"""Toy client for the quickstart exercise. Run in a disposable directory."""

import argparse
import json
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=("init", "show"))
    command = parser.parse_args().command
    config = Path("sample-config.json")
    if command == "init":
        try:
            with config.open("x", encoding="utf-8") as stream:
                json.dump({"collection": "samples"}, stream)
        except FileExistsError:
            parser.exit(1, "Configuration already exists\n")
        return
    if not config.is_file():
        parser.exit(1, "Missing sample-config.json\n")
    print(json.loads(config.read_text(encoding="utf-8"))["collection"])


if __name__ == "__main__":
    main()
