export const productionHighlights = [
  {
    metric: "Timeouts",
    label: "Blocking flow reduction",
    description:
      "Split heavy operations, reduce synchronous work and move fragile tasks into background processing.",
  },
  {
    metric: "DLQ",
    label: "Failure isolation",
    description:
      "Design queues, retries and dead-letter paths so failed workloads are traceable and recoverable.",
  },
  {
    metric: "Logs",
    label: "Operational visibility",
    description:
      "Add logs, audits and lifecycle tracking so teams can understand what happened in production.",
  },
];

export const productionAreas = [
  {
    title: "Timeouts",
    description:
      "I reduce blocking operations, split workloads and move heavy tasks to background processing when critical APIs should stay responsive.",
    items: ["Background jobs", "Queue isolation", "Batch splitting", "API protection"],
  },
  {
    title: "Memory leaks",
    description:
      "I analyze memory growth, isolate expensive flows and stabilize services that degrade under sustained production usage.",
    items: ["Memory growth", "Flow isolation", "Runtime stability", "Production analysis"],
  },
  {
    title: "Concurrency issues",
    description:
      "I design safer flows using queues, idempotency, controlled retries and isolation to reduce duplicated or conflicting work.",
    items: ["Idempotency", "Controlled retries", "SQS", "Race condition reduction"],
  },
  {
    title: "High-volume batches",
    description:
      "I optimize execution by chunking workloads, parallelizing safe operations and moving long-running processing outside the request path.",
    items: ["Chunking", "Parallelization", "Async processing", "Batch optimization"],
  },
  {
    title: "Traceability gaps",
    description:
      "I add audit trails, structured logs and lifecycle tracking for critical operations such as messaging, file processing and retries.",
    items: ["Audit trails", "Structured logs", "Lifecycle tracking", "CloudWatch"],
  },
  {
    title: "Fragile integrations",
    description:
      "I protect integrations with clearer boundaries, retries, error handling and observable failure paths across external providers.",
    items: ["Provider boundaries", "Retry strategy", "Error handling", "Operational signals"],
  },
];

export const productionTimeline = [
  {
    step: "01",
    title: "Detect",
    description:
      "Read logs, metrics, user impact and operational signals to understand the real production behavior.",
  },
  {
    step: "02",
    title: "Isolate",
    description:
      "Separate the risky workload, reduce blast radius and protect the critical API path first.",
  },
  {
    step: "03",
    title: "Recover",
    description:
      "Apply a safe fix, retry or replay failed work and validate the affected flow with traceability.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Convert the incident into stronger architecture, better observability and safer failure handling.",
  },
];
