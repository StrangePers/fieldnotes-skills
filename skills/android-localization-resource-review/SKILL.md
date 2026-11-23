---
name: android-localization-resource-review
description: Review a change to Android string and plural resources for missing format arguments, unintended fallback and incorrect quantity forms before UI review.
---

# Review Android localization resources

1. Start with the changed resource names, the default definitions, the affected locales and their call sites. Identify which arguments carry user-visible meaning and which value selects the plural category. In `getQuantityString(id, count, count)` the first count selects the form and the second supplies the formatting argument.
2. Compare the arguments in each translated form by position, type and meaning. Reordering numbered arguments can be valid. Treat `%%` as a literal percent in a formatted string. Check intended omissions with the call site or translator, especially when an omitted argument carries a destination, amount or name.
3. Check representative quantities against the target language's rules. A translation can need categories absent from the default resource. Confirm that the selected text reads correctly at the boundary and that the fallback text works for quantities it will cover. Flag a missing localized entry when the resulting default-language text is unintended. [Android string resources](https://developer.android.com/guide/topics/resources/string-resource) · [CLDR plural rules](https://unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html)
4. Report the locale, resource, sample input, observed or predicted rendering and expected rendering for each finding. Label a source-only prediction as such. If a phrase is uncertain, give the translator the exact input and sentence to review.

[Try the Slovak resource review and compare your findings](examples/worked-example.md)
