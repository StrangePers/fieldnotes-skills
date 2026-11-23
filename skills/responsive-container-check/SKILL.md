---
name: responsive-container-check
description: Verify that controls remain reachable as their containing pane changes width inside a fixed-size window.
---

# Exercise the actual container width

1. Identify the task and the component whose available space changes. Record the viewport size and the component's own dimensions separately.
2. Use a wide window and vary only the containing pane. Try sizes around the layout transition as well as its ordinary narrow and wide states. Keep content, text scale and language constant for this comparison.
3. Verify that the primary action remains visible and operable with the intended input and that labels and inputs remain usable. Measure clipping against the pane's bounds. Elements may still exist in the DOM while hidden beyond the pane.
4. Compare against a known-good wide case. Report the smallest observed failing width, viewport and failed action. State which sizes were actually tested.

[Save inside a narrow pane in a wide window](examples/worked-example.md)
