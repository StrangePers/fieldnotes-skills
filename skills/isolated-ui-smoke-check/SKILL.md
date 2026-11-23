---
name: isolated-ui-smoke-check
description: Smoke-test a running web or desktop interface in a disposable profile when a healthy launch or visible heading could hide a broken user action.
---

# Smoke-test one user action in isolation

1. Identify the build under test, its entry point, one user action and the visible outcome that proves the action worked. When an empty result is valid, prepare a known-empty fixture and record what a successful response should look like.
2. Launch the target with disposable application data. Use a fresh browser context for a web client. If a backend can persist changes, select a disposable backend or fixture as well. Record which components are real and which are substituted.
3. Enter through the normal UI. Observe the outcome of the action, its request or backend result, and any relevant page errors. Wait for the action to settle before interpreting empty content. An HTTP error can have a response even when the browser reports no transport failure.
4. Report the build, starting state, action, expected result, actual result and the evidence that explains the verdict. Distinguish an application failure from a setup that prevented the check. Stop the disposable instance when finished.

[Compare an empty task list with a failed task request](examples/worked-example.md)
