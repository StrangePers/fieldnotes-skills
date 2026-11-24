---
name: cpp-dll-abi-check
description: Verify a Windows DLL upgrade with an existing C++ client, including loaded dependency versions and the complete Qt runtime when applicable.
---

# Run the existing client against the proposed DLL

1. Collect the released client, baseline and candidate DLLs, and their public headers. Record the process and library architectures. Use a separate directory per run and verify the same EXE hash throughout.
2. Compare the exports the client imports by name or ordinal. On x86, check calling convention and name decoration. In the headers, check caller-allocated object sizes, structure packing and ownership. For a buffer API, establish length units and who frees the buffer.
3. Exercise the same call with the baseline and candidate. Record the loaded DLL path, return value and caller-visible output. Include a documented error case, such as an undersized output buffer.
4. Inspect the running process's modules. Record resolved paths and file versions for relevant dependencies, or hashes when version information is unavailable. For Qt Widgets include QtCore, QtGui, QtWidgets and the active platform plugin. If startup fails, keep the loader diagnostic and identify which files were observed only in the deployment directory.
5. For a Qt upgrade, run the same EXE and user action with the complete baseline runtime and then the complete candidate runtime. Use matching architectures, build configurations, Qt modules and plugins. Check DLL and plugin search paths for stray SDK copies. If investigating a single-DLL swap, give it its own result alongside the two complete runtimes.

[Compare a single Qt DLL swap with a full runtime upgrade](examples/worked-example.md)
