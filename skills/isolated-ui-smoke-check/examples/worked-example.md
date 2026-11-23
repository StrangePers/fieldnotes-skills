# An empty list can hide a failed request

## Exercise

Run `python demo.py` from this example directory with Python 3. The [local demo](demo.py) prints two addresses and keeps no persistent data. Open each address in a fresh private browser window. With the Network panel open, select **Tasks**, wait for the status text and inspect the tasks request. Which run passed the empty-list check? Stop the demo with Ctrl+C.

Both pages use the same HTML. Only the backend response differs. The fixture deliberately renders a failed request as an empty list.

## Expected review

| Starting page | User-visible result | Request after the click | Verdict |
| --- | --- | --- | --- |
| `/empty` | Tasks, then “No tasks” | HTTP 200 with an empty array | Passed for a known-empty list |
| `/failure` | Tasks, then “No tasks” | HTTP 500 with an error object | Failed at list retrieval. The UI hides the failure |

Checking the heading or looking at either final screenshot alone would let both runs pass. A fix should give the failed request a visible error state and preserve the genuine empty state. This exercise covers a synthetic local backend and a real browser interaction.
