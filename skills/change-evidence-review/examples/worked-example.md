# The green check belongs to the previous parser

## Exercise

A Python CLI promises to read old settings files containing `{"colour": "blue"}` and new files containing `{"color": "blue"}`. The only code change between commits A and B is in the settings parser. B is the proposed head.

```diff
-    return settings.get("color", settings.get("colour", "gray"))
+    return settings.get("color", "gray")
```

| Revision | Check | Recorded result |
| --- | --- | --- |
| A | Load the old settings file and assert that the result is blue | Passed |
| B | Run `git diff --check A B` | Passed |

Can the PR claim that B preserves the old setting? Identify the missing evidence, predict the result and then check it. This Python 3 snippet reproduces the changed expression locally.

```python
def read_color(settings):
    return settings.get("color", "gray")

for field in ("color", "colour"):
    value = read_color({field: "blue"})
    print(field, value)
```

## Expected review

The result on A covers the old parser. The check on B covers patch formatting. Neither establishes that B reads an old settings file. The reproduction prints `color blue` followed by `colour gray`. That demonstrates the regression in the example. For the PR, run the old-file compatibility test against B and attach the result to that revision. After a fix, exercise both spellings at the new head.
