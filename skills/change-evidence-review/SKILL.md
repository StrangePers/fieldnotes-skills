---
name: change-evidence-review
description: Review whether test and CI results support a specific behavior on the Git revision proposed for merge, especially after a PR update or a local test run.
---

# Review the evidence for a change

1. Name the behavior the change must preserve or introduce. Identify the proposed head, its base and the files that implement or test that behavior. For a local result, check whether uncommitted changes affected the inputs.
2. For each relevant result, identify the command, outcome and revision actually tested. CI may test a generated merge commit. Record its parents when comparing it with the proposed change. Treat skipped tests, empty suites and a successful job that only built the package according to what they exercised.
3. If a result belongs to an earlier revision, inspect the intervening changes to the implementation, tests, fixtures and relevant configuration. Carry the result forward only when you can explain why those changes preserve its relevance. Otherwise identify the smallest check that covers the open question on the proposed revision.
4. Report which behavior is supported, by which check and on which revision. Reconfirm the proposed head if it could have moved during review. Leave untested behavior open and distinguish it from a reproduced failure.

[Review a parser change whose compatibility test ran one commit too early](examples/worked-example.md)
