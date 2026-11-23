# Four reads, one dangerous fallback

A fictional CLI starts with defaults on first use. Its policy is to preserve existing files after a failed read. An earlier implementation saved defaults at shutdown whenever the loader returned an empty object. Which inputs make that behavior unsafe?

Run this Python 3 model. An exception passed as input stands in for a filesystem read failure.

```python
import json

def load(sample):
    try:
        if isinstance(sample, OSError):
            raise sample
        return "loaded", json.loads(sample)
    except FileNotFoundError:
        return "first use", {}
    except (json.JSONDecodeError, OSError):
        return "preserve and report", None

for sample in (FileNotFoundError(), '{"theme":"dark"}', '{', OSError("busy")):
    print(load(sample))
```

## Expected review

The outcomes are first use, loaded dark theme, preserve malformed bytes, and preserve unreadable data. Under this policy only first use makes a new default configuration eligible for an initial save. A later successful read after the transient failure should recover the dark theme if that was the stored value. Test the real save path too: an error result that shutdown still converts into a write can erase the file.
