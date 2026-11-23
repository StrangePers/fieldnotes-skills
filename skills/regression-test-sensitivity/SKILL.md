---
name: regression-test-sensitivity
description: Check whether a passing regression test actually detects the reported defect by comparing known-bad and corrected behavior on the same input.
---

# Challenge the test with a known defect

1. Define the observable promise from the caller's perspective. Choose a known-bad revision or a minimal local fault that breaks that promise. Keep the experiment away from the shipping branch.
2. Run the same focused test against both implementations. Verify that the test actually ran and that any failure is the intended assertion, rather than a setup error.
3. If both pass, inspect fixtures, mocks and assertions. Choose the smallest input on which correct and broken behavior differ, then assert the observable result.
4. Report the two outcomes and their scope. Preserve the corrected test in the proposed change when requested. A single discriminating case establishes sensitivity to that defect.

[Make a sorting regression visible](examples/worked-example.md)
