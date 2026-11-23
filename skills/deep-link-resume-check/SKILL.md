---
name: deep-link-resume-check
description: Check that a direct link reaches the intended destination after cold startup, session restoration or sign-in, with access enforced at the destination.
---

# Preserve the intended destination across startup

1. Define the link target and relevant parameters, the starting session state and the expected user journey. Compare cold start with an already-running session.
2. Observe the requested target before routing decisions. While session state is unknown, retain the intended internal destination. When signed out, check the sign-in step and what resumes after it.
3. Confirm that the resolved account is allowed to open the target. Exercise an inaccessible or missing item as well as the success case. Verify the pending target is consumed once, so later navigation cannot unexpectedly reopen it.
4. Report the first transition that lost or reused the destination. Check the final object identifier in addition to the screen title.

[Open the same order after session restoration](examples/worked-example.md)
