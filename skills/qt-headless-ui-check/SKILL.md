---
name: qt-headless-ui-check
description: Check whether a Qt Widgets or Qt Quick interaction on a virtual display reaches the intended control and changes application state.
---

# Verify one Qt interaction on a virtual display

1. Record the application build, Qt platform plugin, screen size and device pixel ratio. For a focus or window-management problem, reproduce the window system used by the failing job. For example, an X11 CI job can run under Xvfb.
2. Pick one observable outcome and establish its starting value. A filter test might begin with two rows and expect one after a click.
3. In Qt Test, locate the intended widget by a stable identifier and wait for its window to be exposed. For Qt Quick, wait for the view and find the intended item in the test scene. When driving the app externally, verify window identity, focus and client-area coordinates at the current scale.
4. Perform the action once. Record the relevant signal and wait a bounded time for the model or view to change. For an asynchronous proxy model, `QTRY_COMPARE(proxy.rowCount(), 1)` checks the final count. On failure, record both observed values and capture the affected area.

[Trace a filter click that leaves two rows visible](examples/worked-example.md)
