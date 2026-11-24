---
name: native-decompiler-crosscheck
description: Check an ambiguous calculation in a team's own optimized native build against matching symbols, machine instructions and controlled test inputs.
---

# Verify a reconstructed calculation in your own build

1. Identify the build, architecture, module-relative function offset and matching symbols. Record which names came from the symbols and which types the decompiler inferred.
2. State two interpretations of one expression that predict different outputs. Inspect the operand width, comparison or branch for that expression. Use the matching source revision and compiler settings to understand inlining or simplification.
3. Choose a control input where both interpretations agree and a distinguishing input where they differ. Pass both through the program's normal test interface. Report the predicted and observed values and the part of the reconstruction they establish. Keep unresolved type or source-level questions explicit.

[Check how a sensor display compares a high-bit reading](examples/worked-example.md)
