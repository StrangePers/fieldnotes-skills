# Native profile for OpenCode and SVN

Use 26 skills for C++, Qt and everyday development from an existing SVN working copy. The project stays in SVN. Git hosts the library and a separate local directory where Fieldnotes installs the selected skills. These commands use PowerShell on Windows, Git, Python 3.11+, and the OpenCode 2.3.0 CLI.

## Install

Start in the **parent directory of the SVN working copy**. Reuse your clone of `project-fieldnotes` if you already have one. The directory `fieldnotes-skills-native` is separate from the team workspace's `fieldnotes-native` directory, so you can try this profile alongside the team setup.

```powershell
git clone https://github.com/StrangePers/project-fieldnotes.git
git clone https://github.com/StrangePers/fieldnotes-skills.git
python fieldnotes-skills/profiles/native/prepare.py
git init fieldnotes-skills-native
python project-fieldnotes/fieldnotes.py init fieldnotes-skills-native --workspace fieldnotes-skills --project native
```

In the **SVN working copy root**, create `opencode.jsonc` with this content. If an OpenCode config already exists, merge this path into its `skills` array. When switching this working copy from the team profile, replace the old native skill path here.

```json
{
  "skills": ["../fieldnotes-skills-native/.agents/skills"]
}
```

Run OpenCode from that root. To check all 26 IDs and where OpenCode found them, run:

```powershell
$root = (Resolve-Path '../fieldnotes-skills-native/.agents/skills').Path + '\'
$expected = (Get-Content -Raw '../fieldnotes-skills/workspace.json' | ConvertFrom-Json).projects.native.skills
$deadline = (Get-Date).AddMinutes(2)
do {
    $result = opencode.cmd api GET /api/skill --header "x-opencode-directory: $((Get-Location).Path)" | ConvertFrom-Json
    if ($LASTEXITCODE -ne 0) { throw 'OpenCode skill query failed.' }
    $native = @($result.data | Where-Object { $_.path -and $_.path.Replace('/', '\').StartsWith($root, [StringComparison]::OrdinalIgnoreCase) })
    $difference = @(Compare-Object $expected @($native | ForEach-Object id))
    if ($difference.Count -eq 0) { break }
    Start-Sleep -Seconds 2
} while ((Get-Date) -lt $deadline)
if ($difference.Count) {
    $difference
    throw "OpenCode found $($native.Count) profile skills. Check the skills path in opencode.jsonc."
}
"OpenCode sees all $($native.Count) native skills."
```

Expect `OpenCode sees all 26 native skills.` The check allows time for discovery at startup and excludes skills loaded from other directories.

## Update

From the **parent directory**, run the following in order. Continue to sync once preparation succeeds.

```powershell
git -C fieldnotes-skills pull --ff-only
python fieldnotes-skills/profiles/native/prepare.py
python project-fieldnotes/fieldnotes.py sync --workspace fieldnotes-skills --check
python project-fieldnotes/fieldnotes.py sync --workspace fieldnotes-skills
python project-fieldnotes/fieldnotes.py sync --workspace fieldnotes-skills --check
```

The first check previews changes. The final check should print `0 file(s) to change` for each registered checkout.

## Which versions are installed?

| Skills | Source |
| --- | --- |
| 9 Fieldnotes Skills | The current checkout of this library. The selected IDs are in [workspace.json](../../workspace.json). |
| 15 Superpowers workflows | [Superpowers v7.0.0](https://github.com/obra/superpowers/tree/bb92a77741419a4ab5f06e711a283343f1ada0c3/skills). Each installed directory includes the MIT license. |
| `task-brief-and-handoff`, `binary-debug-evidence` | [Fieldnotes Team snapshot](https://github.com/StrangePers/fieldnotes-team/tree/00da16478fffd7019c49c7c0b14db7f9a943ea39/skills). Both include their CC BY 4.0 notices. |

Preparation fetches the commits in the [source lock](sources.json), checks the selected files against their SHA-256 tree digests and stores them in the library's ignored `.native-sources/` directory. Subsequent runs verify and reuse matching cached files offline. The team repository's own submodule is not fetched.
