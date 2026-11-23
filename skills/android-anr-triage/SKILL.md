---
name: android-anr-triage
description: Triage an Android Application Not Responding report when stacks, event timing or release exposure leave the cause or regression status uncertain.
---

# Triage an Android ANR

1. Describe the observed ANR type, affected action, build and event timing. Use relative times and anonymized frame names in a shareable report. Mark missing evidence explicitly. Different ANR types have different triggers.
2. Align thread samples with the unresponsive interval. For an input-dispatch timeout, check the main thread and any thread or process it was waiting on. A late sample in `MessageQueue.nativePollOnce` can show the main thread waiting for the next message after the stall. That frame alone cannot identify what blocked input earlier. [Android ANR diagnosis guide](https://developer.android.com/topic/performance/anrs/diagnose-and-fix-anrs)
3. List the leading explanation as a hypothesis and name the observation that would distinguish it from an alternative. A busy worker or slow call needs a timing or dependency link to the affected operation. If the trace lacks one, keep the cause open.
4. Assess release evidence separately. Record which versions and time windows were sampled, how many events were captured and the available exposure denominator. A group first visible on a release can reflect rollout size, collection coverage or grouping changes. State whether the evidence supports a regression.
5. Return the observed event, evidence limits, regression assessment and one next measurement with a decision rule. Keep account identifiers, device identifiers, raw logs and absolute paths out of shared examples.

[Try triaging a timeout with a late thread sample](examples/worked-example.md)
