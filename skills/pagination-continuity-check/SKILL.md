---
name: pagination-continuity-check
description: Check paginated results for lost, duplicated or stale records after a failed page request, retry or filter change.
---

# Verify the full sequence across page boundaries

1. Start with a stable fixture with known IDs and order. Record the query, sort order, initial cursor and expected sequence. For a changing data source, establish its snapshot or ordering guarantees first.
2. Follow the returned continuation token. Inject a failure on a later page and retry the same logical request. Check when the client appends records and advances its cursor. Record both the requests and the accumulated IDs.
3. Change the filter while viewing a later page. Start the new query from its own initial state and check that delayed responses from the old query cannot append to the new result.
4. Compare the exact sequence, including duplicates and missing records, and the terminal cursor. Equal counts alone can conceal one lost ID and one duplicate.

[A retry and a new filter](examples/worked-example.md)
