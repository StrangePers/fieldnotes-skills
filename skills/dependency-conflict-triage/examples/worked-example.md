# Resolve two incompatible Python requirements

A fictional offline Python package index contains exactly the releases below, all eligible for the current interpreter. The application pins `reader==1.0` and `writer==1.0`. Use pip's one-version-per-distribution resolution for this environment.

| Package release | Requires |
| --- | --- |
| reader 1.0 | codec>=1,<2 |
| writer 1.0 | codec>=2,<3 |
| writer 1.1 | codec>=1.5,<3 |
| codec 1.5 and 2.0 | No dependencies |

## Exercise

Find both paths to the conflict. Predict whether removing the lockfile can help while those pins remain. Choose one direct dependency change and list the resulting versions. Which part of that result would a successful install still leave untested?

## Expected review

Reader 1.0 allows codec 1.5. Writer 1.0 allows only codec 2.0 from this index. Their intersection is empty, including on a clean install. Change the direct writer pin to 1.1. The common range then admits codec 1.5, yielding reader 1.0, writer 1.1 and codec 1.5. The install resolves. Run a representative read/write round trip before claiming the upgrade preserves behavior.
