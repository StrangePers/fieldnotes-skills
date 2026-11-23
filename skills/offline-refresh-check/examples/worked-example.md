# Keep the last list through a failed refresh

Run this Python 3 state model. None means there has never been a response, while an empty list is a successful response with zero rows.

```python
def refresh(cache, response):
    if isinstance(response, OSError):
        if cache is None:
            return None, "offline, no saved data"
        return cache, "offline, showing saved data"
    return list(response), "current"

for initial in (None, [], ["saved"]):
    cache, status = refresh(initial, OSError("offline"))
    print(cache, status)
    cache, status = refresh(cache, ["fresh"])
    print(cache, status)
```

## Expected review

The three failed requests respectively show no saved data, a known empty cached response, and the saved row. Each successful retry replaces the cache with the fresh row and clears the offline status. Replacing every failed result with an empty list would erase the distinction between first use and a previously successful query. In a real client, also reopen the screen to verify persistence.
