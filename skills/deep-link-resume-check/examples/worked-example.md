# Open the same order after session restoration

A fictional client receives an internal link to order 17. Starting the app selects a home screen by default. Compare these scripted inputs against a router that clears its pending link as soon as the app starts.

| Trial | Input sequence | Expected visible path |
| --- | --- | --- |
| A | Cold start, link received, session loading, signed in with order access | Loading, order 17 |
| B | Cold start, link received, signed out, sign-in succeeds with order access | Sign-in, order 17 |
| C | Cold start, link received, sign-in succeeds without order access | Sign-in, access denied |
| D | After A, navigate home, resume app without a new link | Home |

Run this Python 3 model. Try replacing the initial pending target with `None` to reproduce the lost-link defect.

```python
def visit(events):
    pending = "order 17"
    screens = []
    for event in events:
        if event in ("loading", "sign-in"):
            screens.append(event)
        elif event == "home":
            screens.append("home")
        else:
            assert event in ("allowed", "denied")
            if pending is None:
                screens.append("home")
            else:
                screens.append(pending if event == "allowed" else "access denied")
                pending = None
    return screens

print(visit(["loading", "allowed"]))
print(visit(["sign-in", "allowed"]))
print(visit(["sign-in", "denied"]))
print(visit(["loading", "allowed", "home", "allowed"]))
```

## Expected review

If A or B ends at home, inspect whether startup discarded the pending destination before the session decision. If C opens the order, resuming the link skipped the destination's access check. If D reopens the order, the router retained an already consumed link. Test with a fictional object and inspect the final order number to catch an otherwise plausible wrong detail screen.
