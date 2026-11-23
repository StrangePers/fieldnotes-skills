---
name: issue-readiness-check
description: Review whether an issue marked ready has enough decisions, resolved dependencies and observable acceptance criteria to start the intended implementation.
---

# Check whether a ready issue can actually start

1. Read the current issue and its linked decisions, blockers and target scope. Define the concrete result an implementer is supposed to deliver and the evidence a reviewer could accept.
2. Verify which open dependencies actually prevent that result. An open related ticket may be informational. A closed ticket may still leave a contract undecided.
3. Look for missing decisions that would produce materially different implementations. Identify the smallest question, the appropriate decision owner and any bounded work that can already proceed.
4. Report ready, partially actionable or blocked for the named scope, with supporting evidence. Keep board edits, assignments and implementation separate unless requested.

[A Ready export ticket with an unresolved format](examples/worked-example.md)
