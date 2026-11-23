---
name: async-cancellation-check
description: Verify that cancelling an asynchronous operation reaches its child work and leaves output in the promised state.
---

# Follow cancellation to the output

1. Identify the operation owner, child tasks and publication point. State what cancellation promises before publication and what happens if completion wins the race.
2. Pause at a deterministic boundary such as the first staged chunk. Cancel the owner and wait for its terminal outcome and child cleanup. A dismissed progress indicator proves only a UI change.
3. Inspect the destination and staging area, including any previous successful output. Look for detached writers, broad error handling that consumes cancellation, and partial output exposed as complete.
4. Run the same fixture to completion as a control. Report the observed boundary, terminal status and output state. Treat a separately owned background job according to its documented lifecycle.

[Cancel an export after its first chunk](examples/worked-example.md)
