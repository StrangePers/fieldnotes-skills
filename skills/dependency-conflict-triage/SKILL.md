---
name: dependency-conflict-triage
description: Diagnose a dependency solver failure by tracing competing requirements to their owners and testing a minimal compatible change.
---

# Find the incompatible dependency ranges

1. Record the package manager, runtime, dependency sources, lockfile and failing operation. Reproduce the resolver error in a disposable checkout under the same constraints.
2. Trace each relevant requirement from a direct dependency to the contested package. Include environment markers or target constraints that apply. Determine whether any available version satisfies all active requirements under this resolver's rules.
3. Find the nearest dependency whose supported release changes the conflicting range. Test one candidate change at a time. Inspect the resulting lockfile or installation report for unrelated changes. A forced override does not establish compatibility.
4. Report both dependency paths, the smallest verified change and what still needs a runtime test. Keep other platforms or optional dependency groups outside the conclusion unless exercised.

[Resolve two incompatible Python requirements](examples/worked-example.md)
