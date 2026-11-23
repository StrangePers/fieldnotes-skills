---
name: android-device-state-check
description: Check an Android UI change on a real device when the existing install and its user data must be preserved.
---

# Check an Android change on a device

Use this when a reviewer needs a device observation, for example whether the final list item stays reachable with larger text. Ask for the intended behavior if it is unclear.

1. Name the behavior that would prove the change works. Record the app build, device, relevant settings and starting screen. Keep identifiers out of screenshots or reports meant for sharing.
2. Choose a reversible action and an observable piece of existing state such as a selected tab, saved item or progress marker. Prefer a test account, fixture or side-by-side test build when reaching the screen requires destructive setup. If no suitable setup exists, report that constraint.
3. Exercise the change through the same entry point a user would take. Observe the expected boundary as well as the initial view. For a scrolling list, reach the last item and try its action.
4. Return to the starting screen. Check the chosen state marker again and restore any settings changed for the test.
5. Report build, scenario, observations and remaining limitations. If the change worked only on a fixture, name the fixture. If no device was available, record the device check as pending.

A reviewer should be able to repeat the same path and tell what evidence would change the verdict. Clearing data, uninstalling the app or overwriting a user's save requires a separate decision from the owner.
