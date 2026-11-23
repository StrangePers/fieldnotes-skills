---
name: offline-refresh-check
description: Verify a data screen across cold offline startup, cached startup, refresh failure and connectivity recovery.
---

# Follow a screen through an offline refresh

1. Define what the user should see with no cached response, a known empty response and cached records. Record cache scope and freshness for the active query and account.
2. Seed a disposable client with a known successful response. Exercise a failed refresh while observing both content and status. Repeat with an empty cache and with no previous response.
3. Restore connectivity and complete a successful refresh. Verify the displayed content comes from the new response, the transient error clears and the refreshed cache survives the next read.
4. Report the state transitions, the source of displayed data and the first point of divergence. An online indicator alone cannot prove the backend request succeeded.

[Keep the last list through a failed refresh](examples/worked-example.md)
