# A retry and a new filter

This service has a fixed snapshot and opaque cursors scoped to a filter. A failed request returns no records. The expected red sequence is R1, R2, R3, R4, and the blue sequence is B1, B2.

| Filter | Request cursor | Outcome | IDs | Next cursor |
| --- | --- | --- | --- | --- |
| red | start | OK | R1, R2 | r2 |
| red | r2 | timeout | none | unknown |
| red | r2 | OK | R3, R4 | end |
| blue | start | OK | B1, B2 | end |

## Exercise

Trace the accumulated list after each row. A broken retry handler applies the last successful page again on timeout. Another client keeps the red terminal cursor when switching to blue. What would a user see in each case?

## Expected review

The correct lists are [R1,R2], [R1,R2], [R1,R2,R3,R4], then [B1,B2]. The broken retry adds R1 and R2 twice before appending R3 and R4. Keeping the terminal cursor can suppress the first blue request entirely. On filter change, clear the old items and cursor together and accept responses only for the current query. The case covers a stable snapshot and one failed read.
