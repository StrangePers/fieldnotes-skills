---
name: cli-output-contract-check
description: Check whether scripts can consume a CLI's standard output and use its exit status and diagnostics on both success and failure.
---

# Exercise the CLI through a real subprocess

1. Identify the command's documented machine-readable mode and failure contract. Define a valid input and one invalid input that should reach the argument or data error path.
2. Capture stdout, stderr and exit status separately from the normal executable. Feed stdout directly to the expected consumer. Check the decoded data, including its shape and values.
3. Exercise the failure case. Check whether the status signals failure, what the caller receives on stdout, and whether stderr identifies the actionable problem. Apply the CLI's documented convention for partial or structured errors.
4. Repeat after fixing the producer. Avoid filtering unexpected lines in the test harness because that would conceal incompatibilities for downstream callers.

[A greeting breaks a JSON pipeline](examples/worked-example.md)
