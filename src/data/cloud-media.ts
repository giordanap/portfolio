export const cloudMediaPillars = [
  {
    label: "Queue-based",
    title: "Async workload isolation",
    description:
      "I separate heavy or fragile operations from critical API paths using queues, workers, retries and failure isolation.",
    points: ["SQS queues", "Background jobs", "Retry strategy", "Failure isolation"],
  },
  {
    label: "Processing",
    title: "Cloud processing flows",
    description:
      "I design cloud workflows where files, events and business tasks move through controlled processing steps.",
    points: ["Lambda workers", "S3 storage", "Event triggers", "Batch execution"],
  },
  {
    label: "Reliability",
    title: "Observable failure handling",
    description:
      "I treat failures as part of the architecture by adding DLQs, logs, audits and operational visibility.",
    points: ["DLQ patterns", "CloudWatch logs", "Audit trails", "Operational visibility"],
  },
];

export const cloudMediaPipeline = [
  "API receives request",
  "Queue isolates workload",
  "Worker processes task",
  "Result is stored",
  "Failures are observed",
];

export const cloudMediaSignals = [
  {
    value: "SQS",
    label: "Queue isolation",
  },
  {
    value: "Lambda",
    label: "Background processing",
  },
  {
    value: "DLQ",
    label: "Failure recovery",
  },
  {
    value: "Logs",
    label: "Production traceability",
  },
];
