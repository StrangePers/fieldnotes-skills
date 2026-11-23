# A greeting breaks a JSON pipeline

Save this Python 3 toy command as `sample.py` in an empty directory.

```python
import json
import sys

if sys.argv[1:] != ["list"]:
    print("Expected list", file=sys.stderr)
    sys.exit(2)
print("Loading sample")
print(json.dumps(["alpha"]))
```

Run `python sample.py list` as a subprocess and parse its complete stdout using `json.loads`. Repeat with `bad` in place of `list`. The fixture promises one JSON array on success and an empty stdout on usage errors.

## Expected review

The valid command exits 0 but its greeting makes stdout invalid JSON. Move the greeting to stderr or remove it. The corrected success case parses as the single-element list containing alpha. The invalid case exits 2, leaves stdout empty and writes “Expected list” to stderr. Verify both cases again with separate streams.
