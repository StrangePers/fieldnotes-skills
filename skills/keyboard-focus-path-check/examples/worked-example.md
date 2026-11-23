# Return to the opener after editing a label

Open the [local dialog](dialog.html) in a browser. Use a keyboard with normal Tab navigation enabled. The page starts with an **Edit label** button and a **View activity** button.

1. Press Tab to reach **Edit label**, then Enter. The label input should receive focus.
2. Type a sample label, press Tab to **Save**, then Shift+Tab to return to the input. Tab back to **Save** and activate it. Check the saved label and the focused control.
3. Reopen the dialog and press Escape. Check the focused control again.
4. Append `#broken` to the page address, reload, and repeat the journey. Watch the visible focus outline at dismissal.

## Expected review

In normal mode, both Save and Escape return focus to **Edit label**. Only Save updates the label. In broken mode, focus lands on **View activity** after either dismissal. The dialog looks the same in both modes. Record the exact key used to dismiss the dialog, the observed target and the expected return to **Edit label**.
