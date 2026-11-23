# Did a file import fail or finish empty?

A dashboard counts 30 legacy `import_finished` events. In this fictional exercise the operator knows 20 files were empty and 10 reads failed. The stored records contain only the event name. Could a future analyst recover the error rate from those records alone?

## Exercise

Define the metric as read errors divided by completed import attempts. Empty files and successful nonempty imports both count in the denominator. The fixture below represents a newer build. Run it with Python 3 and use its JSON lines to calculate the metric for these attempts.

```python
import json

def import_file(read):
    try:
        rows = read()
    except OSError:
        return "error"
    return "success" if rows else "empty"

def failed_read():
    raise OSError("synthetic read failure")

for read in (lambda: [], failed_read, lambda: ["sample"]):
    print(json.dumps({"event": "import_finished", "result": import_file(read)}))
```

## Expected review

The old records support a completion count of 30. Their fields cannot distinguish even one read error from an empty file. The operator's knowledge gives the historical answer for this exercise, but the event stream cannot reproduce it.

The new output contains one terminal event per input with results `empty`, `error` and `success`, respectively. The fixture error rate is 1 out of 3 completed attempts. On a dashboard spanning both schemas, report the 30 legacy outcomes as unknown and compute the classified rate only for the covered records. A production check would also confirm that the reporting system received the result field from the intended release.
