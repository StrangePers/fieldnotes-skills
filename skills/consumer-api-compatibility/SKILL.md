---
name: consumer-api-compatibility
description: Test a library upgrade against an unchanged consumer and distinguish source compilation, binary linkage and behavioral compatibility.
---

# Exercise the existing consumer against the candidate

1. Define the promised compatibility and the baseline release. Choose a minimal consumer that uses the public API exactly as an existing application does. Preserve the consumer source, compiler options and relevant runtime.
2. Establish the baseline. Compile and run the consumer against the previous release. Compile the same source against the candidate in a separate output directory. Capture the first diagnostic tied to a changed public symbol.
3. When binary compatibility matters, run the existing compiled consumer with the candidate library on its runtime path. When behavior matters, assert a caller-visible result. Record each dimension independently.
4. Propose a compatible overload, adapter or explicit migration as appropriate. Repeat the affected checks and state the symbol, consumer pattern and targets actually covered.

[Compile the same Java client against two APIs](examples/worked-example.md)
