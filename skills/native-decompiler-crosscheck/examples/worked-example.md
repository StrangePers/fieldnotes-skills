# Does the gauge compare a signed byte?

A team's optimized gauge displays either **below zero** or **normal** for one raw sensor byte. The decompiled expression leaves the signedness of the comparison unclear. Symbols identify the display function in this build.

| Raw input | Signed 8-bit comparison with zero | Unsigned 8-bit comparison with zero | Observed label |
| --- | --- | --- | --- |
| 0x01 | normal | normal | normal |
| 0x7F | normal | normal | normal |
| 0xFF | below zero | normal | below zero |

**Expected finding.** The first two inputs check the harness. The last input distinguishes the hypotheses. A sign-bit test in the matching function and the observed label support signed comparison behavior for this path. Establishing the original variable declaration requires source or type information.
