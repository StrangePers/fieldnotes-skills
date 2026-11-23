---
name: release-notes-coverage
description: Review release notes against the actual changes since the previous applicable release and identify missing user-visible effects or migration steps.
---

# Check release notes from the user's side

1. Identify the candidate and the previous shipped version for the same product, release line and audience. Confirm the comparison range from tags, history or release records. Keep uncertainty about the baseline visible.
2. Read the effective diff and supporting tests or PRs. For each change that reached the candidate, describe what an existing user will observe. Pay attention to removed flags, changed defaults, configuration formats and recovery steps. Check whether an apparent change was reverted, gated or excluded from the shipped artifact.
3. Compare those observations with the draft notes. For each material gap, name the affected user, the previous behavior, what now happens and the concrete action they can take. Preserve supported entries and omit internal reorganizations with no demonstrated user impact.
4. Verify migration examples against the candidate when possible. Report the reviewed versions, the suggested wording and any claims that still need evidence. Treat an editorial review as distinct from publishing a release.

[Find the missing migration in a CLI release note](examples/worked-example.md)
