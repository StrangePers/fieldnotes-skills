"""Materialize the native profile's locked external skills. Run with Python 3.11+."""
from pathlib import Path
import hashlib
import json
import shutil
import subprocess
import tempfile


PROFILE = Path(__file__).resolve().parent
WORKSPACE = PROFILE.parents[1]


def tree_digest(directory):
    digest = hashlib.sha256()
    files = sorted(directory.rglob("*"), key=lambda p: p.relative_to(directory).as_posix())
    for path in files:
        if path.is_symlink():
            raise ValueError(f"Unexpected symlink in source pack: {path}")
        if path.is_file():
            name = path.relative_to(directory).as_posix().encode("utf-8")
            digest.update(name + b"\0" + hashlib.sha256(path.read_bytes()).digest())
    return digest.hexdigest()


def prepare(source, cache):
    expected = source["tree_sha256"]
    destination = cache / expected
    if destination.exists():
        if tree_digest(destination) != expected:
            raise ValueError(f"Modified cache: move {destination} aside and rerun.")
        print(f"Verified {len(source['skills'])} cached skills from {source['repository']}")
        return

    with tempfile.TemporaryDirectory(dir=cache) as temporary:
        stage = Path(temporary)
        repo = stage / "checkout"
        pack = stage / "pack"
        subprocess.run(["git", "init", "-q", str(repo)], check=True)
        git = ["git", "-C", str(repo), "-c", "core.autocrlf=false"]
        commit = source["commit"]
        subprocess.run([*git, "fetch", "--quiet", "--no-tags", "--depth=1",
                        source["repository"], commit], check=True)
        paths = ["skills/" + name for name in source["skills"]]
        license_file = source.get("license_file")
        if license_file:
            paths.append(license_file)
        subprocess.run([*git, "checkout", commit, "--", *paths], check=True)
        pack.mkdir()
        for name in source["skills"]:
            folder = pack / name
            (repo / "skills" / name).rename(folder)
            if license_file:
                shutil.copyfile(repo / license_file, folder / "LICENSE")
        actual = tree_digest(pack)
        if actual != expected:
            raise ValueError(f"Source pack digest {actual} differs from lock {expected}")
        try:
            pack.rename(destination)
        except OSError:
            if not destination.is_dir() or tree_digest(destination) != expected:
                raise
        print(f"Prepared {len(source['skills'])} skills from {source['repository']} at {commit}")


def main():
    sources = json.loads((PROFILE / "sources.json").read_bytes())
    manifest = json.loads((WORKSPACE / "workspace.json").read_bytes())
    roots = [".native-sources/" + source["tree_sha256"] for source in sources]
    if roots != manifest["skill_roots"]:
        raise ValueError("Source lock and workspace skill_roots disagree")
    cache = WORKSPACE / ".native-sources"
    cache.mkdir(exist_ok=True)
    for source in sources:
        prepare(source, cache)


if __name__ == "__main__":
    main()
