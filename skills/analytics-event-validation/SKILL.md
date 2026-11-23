---
name: analytics-event-validation
description: Validate that analytics events distinguish the outcomes a product metric needs, especially after a release changes event fields or a dashboard starts showing zeros.
---

# Check whether events can answer a product question

1. State the question, observation unit and denominator. For an error rate per completed import, define how an empty file, a read error, a successful import and an unfinished attempt enter the calculation.
2. Trace each relevant outcome from the emitting code to one captured event, then to the fields available in the reporting system. Check the build and observation window. If a release appears silent, confirm that data from that release is arriving and allow for the reporting delay.
3. Run controlled inputs with known outcomes. Compare emitted names, result values and counts with the expected records. Look for paths that emit nothing or emit twice. Use synthetic fixtures and retain only the fields the metric needs.
4. Calculate the metric from those records and state its coverage. Treat older events without the new outcome as unclassified. Keep them visible when explaining which periods or releases can be compared.

[Find the missing outcome in an import metric](examples/worked-example.md)
