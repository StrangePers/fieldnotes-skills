# Follow one time zone through a queue

A scheduler accepts an explicit time zone. The worker unexpectedly uses UTC. This Python 3 fixture captures four points on the same request without logging any real job data.

```python
import json

request = {"job": "sample-17", "zone": "Asia/Tokyo"}
accepted = request.copy()
message = json.dumps({"job": accepted["job"]})
received = json.loads(message)
scheduled = {**received, "zone": received.get("zone", "UTC")}

for stage, record in (("accepted", accepted), ("outbound", json.loads(message)),
                      ("received", received), ("scheduled", scheduled)):
    print(stage, record["job"], record.get("zone", "<absent>"))
```

## Exercise

Which component should be investigated first? What single change would preserve the requested zone? Keep support for old messages that omit the zone.

## Expected trace

The values are Asia/Tokyo, absent, absent and UTC. The outbound representation is already missing the zone before the worker receives it. Include the explicit zone when constructing the outbound message, then assert the decoded message preserves it. The compatibility case for an older message should still produce UTC.
