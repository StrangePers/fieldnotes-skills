---
name: cross-platform-path-check
description: Interpret file locations produced on another operating system when separators, drive letters, spaces or line and column suffixes can change their meaning.
---

# Parse paths using the producer's conventions

1. Identify the producer's path grammar, how it encodes locations and the consumer's intended operation. Parsing for display and opening a file in another checkout have different requirements.
2. Separate location metadata using the report's documented grammar. Preserve spaces and drive prefixes. Use a lexical path type for the producer's platform when the file is unavailable locally.
3. Test distinct cases from the supported formats, including a path without coordinates when allowed. Only translate to a local path when an explicit source-root mapping exists.
4. Report the original text, parsed components and any unresolved mapping. Use invented paths for examples shared outside the team.

[Read a Windows diagnostic on a POSIX runner](examples/worked-example.md)
