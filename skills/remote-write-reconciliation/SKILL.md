---
name: remote-write-reconciliation
description: Determine whether a remote create or update took effect after a timeout or lost response, and whether a retry could duplicate or overwrite work.
---

# Resolve an uncertain remote write

1. Recover the intended change, destination and operation identifier from the original request. Preserve its payload and any service-issued receipt or idempotency key privately. A timeout leaves the final state open.
2. Read the service's operation record or resulting resource. Match the operation, destination and intended effect. Similar titles and nearby timestamps can match someone else's write. With asynchronous processing, check for a pending operation even if the resource has yet to appear.
3. If the matching effect is confirmed, record its resource identifier and finish. If the service reports pending, follow the existing operation. If the read is unavailable, partial, delayed or contradictory, retain the unknown result. In particular, an empty search in an eventually consistent index leaves room for the first request to complete.
4. Retry only within the original authorization and when duplicate effects are ruled out. Examples include a definitive service record that the write failed without effect, or a documented idempotency guarantee still valid for the identical request and key. Before replaying an update, check that its original preconditions still hold. Verify the resulting state after any retry.

[Investigate a task that was created before the response was lost](examples/worked-example.md)
