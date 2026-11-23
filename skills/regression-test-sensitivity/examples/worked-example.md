# Make a sorting regression visible

A report promises alphabetical order. Its existing test uses an already sorted input. Run this Python 3 exercise and identify the first case that distinguishes the two implementations.

```python
def correct(rows):
    return sorted(rows)

def broken(rows):
    return list(rows)

for rows in (["ash", "elm"], ["elm", "ash"]):
    for implementation in (correct, broken):
        result = implementation(rows)
        print(rows, implementation.__name__, result == ["ash", "elm"])
```

## Expected review

The first input yields two passes. The second yields a pass for the sorter and a failure for the implementation that preserves input order. Use the reversed input and assert the exact returned order in the regression test. An assertion on length or set equality would still pass in both cases.
