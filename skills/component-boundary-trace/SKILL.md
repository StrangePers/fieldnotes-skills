---
name: component-boundary-trace
description: Localize an incorrect result in a multi-component workflow by following one synthetic input across service, queue and worker boundaries.
---

# Locate the first boundary where the value changes

1. Pick one reproducible request and the single field or invariant that distinguishes the good and bad results. Use a synthetic correlation identifier so concurrent attempts stay separate.
2. Sketch the expected representation at each boundary, including deliberate conversions and defaults. Capture the smallest useful observation immediately before sending and immediately after receiving. Prefer a fixture or sanitized field over dumping a payload.
3. Match observations for the same request and attempt, then find the last correct value and first incorrect value. A missing capture means the fault is still somewhere within a range.
4. Probe the transformation inside that range and rerun the same input. Report what was observed, which component owns the narrowed investigation and a boundary test that would catch a recurrence.

[Follow one time zone through a queue](examples/worked-example.md)
