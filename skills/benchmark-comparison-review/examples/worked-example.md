# The second indexer finishes sooner

A team wants to speed up a full index of a fixed 1,000-document corpus. Each run uses the same machine, produces the same document count and output checksum, and measures elapsed seconds from process start to completed index. The first pair takes 12 seconds on the old build and 7 on the new one. Can the team claim a five-second improvement?

## Exercise

The table contains fictional measurements. The input cache is cleared before each block. The first run starts cold and primes it for the second. The output index is rebuilt from scratch every time. Compare the first pair, then compare builds within each cache state.

| Block | First build (cold) | Seconds | Second build (warm) | Seconds |
| --- | --- | ---: | --- | ---: |
| 1 | Old | 12 | New | 7 |
| 2 | New | 12 | Old | 7 |
| 3 | Old | 13 | New | 8 |
| 4 | New | 13 | Old | 8 |

## Expected review

The first pair has a five-second gap, but it changes both the build and the cache state. Reversing the order makes the old build look faster by the same amount. For cold starts both builds take 12 and 13 seconds (mean 12.5). For warm starts both take 7 and 8 seconds (mean 7.5). Each build has two samples per state.

These observations show no measured build advantage within either state. They do not establish equal performance on other workloads. If the five-second gap itself matters, run already-primed and cold starts in both first and second positions. In the supplied table, cache state still coincides with position.
