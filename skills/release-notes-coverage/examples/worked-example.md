# One release note is missing

## Exercise

A fictional importer is moving from release 1.4 to candidate 1.5. The draft says, “Large imports now complete faster.” Review the supplied release evidence and write the smallest addition that helps an existing user upgrade.

| Change in the candidate | Evidence available to the reviewer |
| --- | --- |
| Batched file reads | The release benchmark on the same large input supports the existing performance note. |
| Renamed destination flag | The parser below reproduces the shipped flag in each version. Both versions require a destination. |
| Split the logging formatter into a private module | Its interface, emitted text and levels are unchanged. |

Run this snippet with Python 3 to check the migration. It prints the accepted destination or the parser's exit code. The rejected call also emits an expected usage message.

```python
import argparse

def parse_destination(version, arguments):
    parser = argparse.ArgumentParser(prog="sample-import", allow_abbrev=False)
    flag = "--output" if version == "1.4" else "--destination"
    parser.add_argument(flag, dest="folder", required=True)
    try:
        return parser.parse_args(arguments).folder
    except SystemExit as error:
        return error.code

for version, flag in (("1.4", "--output"), ("1.5", "--output"),
                      ("1.5", "--destination")):
    print(version, flag, parse_destination(version, [flag, "out"]))
```

## Expected review

The three outcomes are `out`, exit code `2` and `out`. Keep the existing performance entry. Add: “The import destination flag changed from `--output` to `--destination`. Update scripts that use it before upgrading. For example, change `sample-import --output out` to `sample-import --destination out`.”

The formatter move needs no user action. The snippet verifies the CLI migration. The performance evidence is supplied as part of the exercise.
