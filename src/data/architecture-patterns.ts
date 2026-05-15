export type ArchitecturePattern = {
  id: string;
  title: string;
  label: string;
  description: string;
  flow: string[];
  tags: string[];
};

export const architecturePatterns: ArchitecturePattern[] = [
  {
    id: "api-gateway-pattern",
    title: "API Gateway Pattern",
    label: "Gateway",
    description:
      "A controlled entrypoint that separates client contracts from internal backend services, routing, security and transformations.",
    flow: ["Client", "Gateway", "Services"],
    tags: ["Kong", "Routing", "Security"],
  },
  {
    id: "queue-dlq-pattern",
    title: "Queue + DLQ Pattern",
    label: "Async",
    description:
      "A failure-aware async pattern where queues isolate workloads and DLQs preserve failed messages for recovery and analysis.",
    flow: ["API", "Queue", "DLQ"],
    tags: ["SQS", "DLQ", "Retries"],
  },
  {
    id: "retry-strategy",
    title: "Retry Strategy",
    label: "Recovery",
    description:
      "A controlled recovery mechanism for transient failures, designed with limits, visibility and safe replay behavior.",
    flow: ["Fail", "Retry", "Recover"],
    tags: ["Backoff", "Recovery", "Safety"],
  },
  {
    id: "background-job-processing",
    title: "Background Job Processing",
    label: "Workers",
    description:
      "A workload separation pattern that keeps critical APIs responsive while heavy work runs through workers or serverless jobs.",
    flow: ["Request", "Worker", "Result"],
    tags: ["Lambda", "Jobs", "Queues"],
  },
  {
    id: "event-driven-architecture",
    title: "Event-driven Architecture",
    label: "Events",
    description:
      "A decoupled architecture style where systems react to events and services evolve with clearer boundaries.",
    flow: ["Event", "Consumer", "Action"],
    tags: ["Events", "SNS", "SQS"],
  },
  {
    id: "service-communication",
    title: "Service-to-service Communication",
    label: "Services",
    description:
      "A communication model for distributed systems using clear contracts, typed messages and focused service boundaries.",
    flow: ["Service A", "Contract", "Service B"],
    tags: ["gRPC", "Contracts", "Boundaries"],
  },
  {
    id: "audit-trail-pattern",
    title: "Audit Trail Pattern",
    label: "Traceability",
    description:
      "A visibility pattern for tracking critical operations across their lifecycle, including delivery, failures and retries.",
    flow: ["Action", "Audit", "Status"],
    tags: ["Logs", "Audits", "Lifecycle"],
  },
  {
    id: "cloud-observability",
    title: "Cloud Observability",
    label: "Operations",
    description:
      "An operational pattern that connects logs, metrics and alerts so production systems are easier to understand and improve.",
    flow: ["Logs", "Metrics", "Signals"],
    tags: ["CloudWatch", "Metrics", "Alerts"],
  },
];
