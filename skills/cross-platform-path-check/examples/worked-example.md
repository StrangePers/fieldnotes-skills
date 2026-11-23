# Read a Windows diagnostic on a POSIX runner

The fictional report uses the grammar `path:positive-line:positive-column`. Parse the final two fields before interpreting the Windows path. Run this Python 3 exercise on any host.

```python
from pathlib import PureWindowsPath

record = r"Q:\Example Space\src\panel.dart:27:4"
raw, line, column = record.rsplit(":", 2)
path = PureWindowsPath(raw)
print(path.drive, path.name, int(line), int(column))
```

## Expected review

The output is `Q: panel.dart 27 4`. The drive belongs to the path. The space belongs to one directory name. Splitting at every colon would also split the drive, and using the host's POSIX basename rules would retain the backslashes. The exercise extracts a location from a known report grammar. Opening the source locally would also require a mapping from the producer's source root.
