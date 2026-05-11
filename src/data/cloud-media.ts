export const cloudMediaPillars = [
  {
    label: "Storage",
    title: "Cloud media origin",
    description:
      "I design media flows where files are stored safely, versioned clearly and prepared to be served through cloud infrastructure.",
    points: ["S3 buckets", "Object metadata", "Private assets", "Lifecycle rules"],
  },
  {
    label: "Delivery",
    title: "Fast global distribution",
    description:
      "I separate API workload from media delivery by using CDN based patterns that reduce latency and protect backend services.",
    points: ["CloudFront", "Cache headers", "Static export", "Public assets"],
  },
  {
    label: "Reliability",
    title: "Controlled media operations",
    description:
      "I treat uploads, processing and delivery as production flows with retries, traceability and clear failure paths.",
    points: ["Retries", "DLQ patterns", "CloudWatch logs", "Operational visibility"],
  },
];

export const cloudMediaPipeline = [
  "Upload or static asset registration",
  "Object storage with clear ownership",
  "Optional background processing",
  "CDN optimized delivery",
  "Monitoring and incident visibility",
];

export const cloudMediaSignals = [
  {
    value: "S3",
    label: "Object storage",
  },
  {
    value: "CDN",
    label: "Edge delivery",
  },
  {
    value: "DLQ",
    label: "Failure isolation",
  },
  {
    value: "Logs",
    label: "Traceability",
  },
];
