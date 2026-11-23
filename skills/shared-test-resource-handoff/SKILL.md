---
name: shared-test-resource-handoff
description: Decide when a second test job can take over a shared database, device or staging environment after the first job disconnects or appears to finish.
---

# Hand off a shared test resource

1. Identify the exact resource, current owner, operation in flight and how all competing jobs coordinate access. Separate checkout directories or client profiles may still point to the same backend.
2. After a disconnect, check the resource's own lock, operation status or ownership service. A lost runner connection or an old timestamp leaves ownership uncertain. Preserve the current state while another owner can still write.
3. Establish the handoff conditions for this resource. Verify the first operation reached a known terminal state and the shared data meets the next job's prerequisites. Acquire ownership using the same atomic mechanism as competing writers. Verify the relevant state under ownership before performing the next action.
4. Record the resource, previous outcome, new owner and observed starting state. If ownership or state cannot be established, report what remains unknown. Follow the resource's documented recovery procedure before considering a reset.

[Watch two local processes contend for one disposable database](examples/worked-example.md)
