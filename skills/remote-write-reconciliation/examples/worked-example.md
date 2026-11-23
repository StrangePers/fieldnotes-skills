# The task exists, but the create call timed out

## Exercise

A fictional task service accepts a client operation ID. The ID is searchable, but the create endpoint does not deduplicate requests. The client sent the task once and lost the reply. Run the Python 3 simulation locally. Both lookups describe the same write under different read conditions.

```python
tasks = []

def create(operation, title):
    tasks.append({"id": len(tasks) + 1, "operation": operation, "title": title})
    raise TimeoutError("reply lost")

def lookup(operation, available):
    if not available:
        raise ConnectionError("lookup unavailable")
    return [task for task in tasks if task["operation"] == operation]

try:
    create("demo-17", "Rebuild sample index")
except TimeoutError:
    pass

for available in (True, False):
    try:
        print(lookup("demo-17", available))
    except ConnectionError:
        print("unknown")
```

What can the client record in each case? Would another create be safe? Make the decision using only the evidence available in that case.

## Expected decision

The first lookup returns task 1 with operation `demo-17` and the intended title. Record completion with task 1. The second lookup yields `unknown`. Preserve the operation ID, defer another create and retry the read when the service is available. A second create could add task 2 with the same operation ID. The simulation needs no network connection, account or credentials.
