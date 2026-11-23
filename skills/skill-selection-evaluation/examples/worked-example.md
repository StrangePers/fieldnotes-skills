# Score two neighboring review skills

Two skills are available. A checks which revision a test covered. B checks whether a test detects a known fault. The following are fictional invocation receipts from three independent trials per prompt. A dash means no skill was selected.

| Request | Expected | Observed |
| --- | --- | --- |
| Which commit did the passing test cover? | A | A, A, B |
| Would this test fail if sorting were removed? | B | B, B, B |
| Translate this short paragraph into French. | none | -, A, - |

## Exercise

Score the nine trials. Which description would you inspect for each error? Design one held-out request for the commit question.

## Expected review

Seven of nine selections match. The first prompt had one substitution of B for A. Inspect the wording that separates revision evidence from test sensitivity. The third had one unwanted activation of A. Narrow its trigger to a question about a check and its revision. A held-out request could be “We pushed again after CI ran. Which head does that result describe?” These receipts exercise scoring only. An actual model comparison needs fresh trials and observed invocations.
