---
name: keyboard-focus-path-check
description: Verify keyboard reachability, activation and focus restoration across a UI interaction such as opening and closing a modal dialog.
---

# Trace a user action with the keyboard

1. Choose a concrete action, its starting control and the place where the user should be able to continue afterward. Identify the supported keys for that interface.
2. Follow the path with keyboard input only. Record the actual focused control at entry, each important transition, activation and dismissal. Check that focus remains visible and that Tab and reverse navigation stay within a modal while it is open.
3. Close through the user-facing action and through the supported dismissal key. Check where focus returns. If the opener disappeared, identify the logical next control in the workflow.
4. Report the first unexpected transition as a sequence of keys, expected target and observed target. Recheck the complete journey after any fix. Scope the result to the keys and environment exercised.

[Return to the opener after editing a label](examples/worked-example.md)
