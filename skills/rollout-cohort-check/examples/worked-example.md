# Fewer failures during a smaller rollout

A fictional team reviews desktop updates. One launch can contribute at most one failure. Both mature cohorts below use the same platform, channel and completed 24-hour reporting window after launch. A separate candidate cohort is still reporting.

| Build and cohort | Downloads | Confirmed launches | Launches with failure |
| --- | ---: | ---: | ---: |
| Baseline, mature | 1,200 | 1,000 | 20 |
| Candidate, mature | 160 | 100 | 3 |
| Candidate, recent | 300 | 50 | pending |

## Exercise

A teammate proposes expansion because 3 failures is fewer than 20. Calculate the mature per-launch rates. Should the recent downloads or launches enter that comparison? What decision is supported by this table?

## Expected review

The comparable observations are 20/1,000 (2%) and 3/100 (3%). Candidate exposure is smaller, and its observed rate is higher. The raw counts give no basis for claiming improvement. Leave the recent cohort pending and reassess when outcomes mature against the team's decision thresholds. These samples alone do not establish a causal regression.
