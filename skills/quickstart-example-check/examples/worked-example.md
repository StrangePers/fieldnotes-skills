# A passing SDK test and a failing quickstart

## Exercise

The [toy SDK client](example_client.py) stands in for an installed package. Use Python 3 and an empty directory containing only a copy of that file. A fictional guide promises that the following quickstart prints the selected collection.

```sh
python example_client.py show
```

The SDK test passes. Its setup writes a file named `sample-config.json` containing `{"collection": "samples"}` before testing the very same command. Try the guide as written. Which step does a new reader need? You can inspect the client's help with `python example_client.py --help`.

## Expected review

The first command exits with status 1 and prints `Missing sample-config.json`. The test's setup had supplied a prerequisite that the quickstart omitted. For the corrected guide, start in a second empty directory containing only the client and run:

```sh
python example_client.py init
python example_client.py show
```

The second command should print `samples` and exit successfully. This verifies the documented first use of the fixture. Package installation would need its own check for a real SDK.
