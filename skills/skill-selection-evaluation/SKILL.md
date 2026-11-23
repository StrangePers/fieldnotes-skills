---
name: skill-selection-evaluation
description: Evaluate whether an agent selects the intended skill among similar available skills, including requests that should use none.
---

# Evaluate skill selection on neighboring tasks

1. Record the client and model, visible skill names and descriptions, and how selection is observed. Verify availability first. If invocation cannot be observed, label any inferred selection separately.
2. Write requests in the user's words. Include a positive case for each neighbor and a plausible out-of-scope request. Assign expected choices before running the trials. Allow multiple acceptable choices when the task truly requires them.
3. Repeat each request in independent fresh sessions using the same configuration. Keep the request free of skill names unless testing explicit invocation. Record actual selections, omissions and unwanted activations.
4. Group errors by prompt and competing skill. Change one ambiguous description, keep an unseen paraphrase for a follow-up, and repeat under comparable conditions. Report counts and sample size.

[Score two neighboring review skills](examples/worked-example.md)
