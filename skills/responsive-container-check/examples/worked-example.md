# Save inside a narrow pane in a wide window

Open the [local editor](editor.html) in a browser with a viewport at least 900 CSS pixels wide. Keep the window size fixed and use the buttons above the editor to switch its pane between 600 and 280 pixels.

1. In each width, type a label and click Save with the pointer. Verify the confirmation contains the label.
2. Append `#broken` to the page address, reload and repeat. Compare the pane bounds with the Save button bounds at the narrow size.
3. Restore the wide pane. Does the same action work again?

## Expected review

With the container rule active, the narrow pane stacks the controls and Save stays reachable. In broken mode the wide row persists and the right-hand action is clipped at 280 pixels. It returns at 600 pixels. The window never crossed a viewport breakpoint. The two sampled widths demonstrate the failure without establishing its exact first pixel.
