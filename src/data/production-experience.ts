export const productionHighlights = [
  {
    metric: "10+",
    label: "Years building software",
    description:
      "Backend-focused full-stack experience across APIs, integrations, cloud services and production systems.",
  },
  {
    metric: "5+",
    label: "Years in distributed systems",
    description:
      "Working with services, queues, retries, failure isolation, cloud integrations and production operations.",
  },
  {
    metric: "24/7",
    label: "Production mindset",
    description:
      "Focused on reliability, observability, incident response, performance and maintainable delivery.",
  },
];

export const productionAreas = [
  {
    title: "Production reliability",
    description:
      "I build backend flows with clear failure paths, retries, dead-letter queues and operational visibility.",
    items: ["SQS retries", "DLQ patterns", "CloudWatch logs", "Error isolation"],
  },
  {
    title: "Incident response",
    description:
      "I approach incidents by reading signals, identifying impact, stabilizing the system and documenting the root cause.",
    items: ["Log analysis", "Impact assessment", "Hotfixes", "Post-incident learning"],
  },
  {
    title: "Performance and scalability",
    description:
      "I optimize APIs and backend processes by reducing bottlenecks, improving query behavior and separating workloads.",
    items: ["API latency", "Async processing", "Queue-based load control", "Service boundaries"],
  },
  {
    title: "Cloud operations",
    description:
      "I work with cloud-native components to support integrations, background jobs, storage and monitoring.",
    items: ["AWS Lambda", "S3", "SQS", "CloudWatch"],
  },
];

export const productionTimeline = [
  {
    step: "01",
    title: "Detect",
    description:
      "Use logs, alerts, metrics and user impact signals to understand what is happening in production.",
  },
  {
    step: "02",
    title: "Stabilize",
    description:
      "Reduce impact first through safe fixes, rollbacks, feature isolation or queue-based containment.",
  },
  {
    step: "03",
    title: "Resolve",
    description:
      "Apply the technical fix with clear validation, traceability and confidence in the affected flow.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Turn the incident into stronger monitoring, better boundaries, safer retries and clearer documentation.",
  },
];
