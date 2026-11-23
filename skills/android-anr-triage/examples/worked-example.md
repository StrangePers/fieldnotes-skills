# A late sample after a tap

## Exercise

This fictional report describes a tap on **Open notebook**. All times are relative to the tap.

| Time | Evidence |
| --- | --- |
| 0.0 s | Test harness sends the tap. |
| +5.2 s | The system records an input-dispatch timeout for the foreground window. |
| +6.4 s | A thread snapshot shows the main thread in `MessageQueue.nativePollOnce` and an indexing worker in a database read. |

The issue group contains three reports on build 42 and none on build 41. The extract omits the session counts, observation windows and traces from the unresponsive interval. Write a triage note and choose one measurement that could change the diagnosis.

## Expected review

- **Observed.** The system recorded an input-dispatch ANR after the tap on build 42. The only thread sample arrived 1.2 seconds after the timeout.
- **Cause unresolved.** Main-thread contention with the indexing worker is plausible. A slow main-thread callback is another possibility. The sample supplies neither a wait relationship nor evidence about what ran while input was stalled.
- **Regression unresolved.** Build 42 is the first build represented in this extract. Three reports versus zero, without comparable exposure and collection windows, cannot establish a rate increase.
- **Next measurement.** Capture one Perfetto trace on a test device across a reproduction, starting before the tap and retaining input, scheduling and lock-contention events through recovery. A main-thread wait on a lock held by the indexer during the input delay would support contention. A long runnable or running callback without that wait would direct investigation toward scheduling or callback work. If the capture misses the stall or lock ownership, leave the cause open.
