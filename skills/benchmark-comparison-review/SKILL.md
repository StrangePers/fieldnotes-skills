---
name: benchmark-comparison-review
description: Review a performance claim about two builds or configurations when workload, cache state, run order or incomplete measurements could explain the result.
---

# Review a benchmark comparison

1. Write down the decision the benchmark should inform. Define the workload, the output that counts as correct, the metric and the interval being measured. A faster run that silently skips records has completed a different task.
2. Put the raw observations side by side. For each, identify the build or configuration, input, environment, starting state, run order and outcome. Keep failed and missing runs visible. Pair observations that represent the same conditions.
3. Look for conditions that always move with the proposed change. For instance, if only the second run gets a warm cache, repeat both builds in each cache state and reverse the order across blocks. Reset or prime the relevant cache deliberately and record how you verified its state.
4. Report the matched results, sample counts and spread in the original units. Explain which workloads and starting conditions the result covers. If the available observations cannot distinguish two explanations, identify the smallest additional comparison that could.

[Review an indexer that appears five seconds faster](examples/worked-example.md)
