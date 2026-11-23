---
name: localized-screenshot-review
description: Review a set of Android screenshots across locales for matched UI state, layout defects and suitability for sharing.
---

# Review localized screenshots

Start with the list of target locales and the screen the images should show. Choose a reference image with the intended build, orientation, viewport, text scale and fixture. If the brief allows any of these to vary, record the exception.

1. Match each image to its locale and screen. Check a visible label in the image as well as its filename. Record missing locales or images that show a different state.
2. Compare like for like. A keyboard, different scroll position or different item count can explain a visual difference. Record that mismatch and request a comparable capture before diagnosing a layout regression.
3. Inspect long labels, plural forms in the displayed sample, numbers, fallback-language fragments, cut-off actions and the end of scrollable content. For right-to-left layouts, check reading order and directional controls in context. Mark uncertain translations for a speaker of the language.
4. Check the images intended for sharing for account details, notifications and user-generated content. Recreate the capture using a neutral fixture if needed.
5. Return one row per locale with the screen, observation, evidence and verdict. Distinguish missing evidence from a visible defect. Recommend recapturing only the affected cases.

For example, a clipped button in two matched captures is actionable. An image of the loading screen paired with an image of the loaded list first needs a replacement capture.
