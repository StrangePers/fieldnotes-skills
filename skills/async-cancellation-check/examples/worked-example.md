# Cancel an export after its first chunk

The exporter promises to keep the last complete result until a replacement is ready. Run this Python 3 model. Events hold the child immediately after its first chunk, so the result does not depend on a sleep interval.

```python
import asyncio

async def trial(cancel):
    published = ["previous"]
    staging = []
    started, resume = asyncio.Event(), asyncio.Event()

    async def writer():
        try:
            staging.append("first")
            started.set()
            await resume.wait()
            staging.append("last")
            published[:] = staging
        finally:
            staging.clear()

    async def export():
        await asyncio.create_task(writer())

    owner = asyncio.create_task(export())
    await started.wait()
    if cancel:
        owner.cancel()
    else:
        resume.set()
    try:
        await owner
    except asyncio.CancelledError:
        pass
    print(owner.cancelled(), published, staging)

asyncio.run(trial(True))
asyncio.run(trial(False))
```

## Expected review

Cancellation prints `True ['previous'] []`. Completion prints `False ['first', 'last'] []`. The first result verifies propagation to the awaited child and preservation of the prior result. The control shows the same writer can publish both chunks. In a file-backed export, inspect actual output bytes and temporary files as well.
