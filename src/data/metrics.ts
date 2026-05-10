export type Metric = {
  value: string;
  label: string;
  description: string;
};

export const metrics: Metric[] = [
  {
    value: "10+",
    label: "Years of experience",
    description: "Backend and full-stack software engineering experience.",
  },
  {
    value: "~5 → ~2",
    label: "Batch processing time",
    description: "Reduced high-volume batch execution time through batching and parallelization.",
  },
  {
    value: "35%",
    label: "Faster onboarding response",
    description: "Improved supplier onboarding response times through caching strategies.",
  },
  {
    value: "40%",
    label: "Faster frontend loads",
    description: "Reduced frontend load times through rendering and API consumption improvements.",
  },
  {
    value: "~500/day",
    label: "Email lifecycle traceability",
    description: "Built messaging audit capabilities for daily email delivery, failures and retries.",
  },
  {
    value: "50+",
    label: "Microservices with gRPC",
    description: "Implemented service communication patterns across a large microservices ecosystem.",
  },
  {
    value: "30%",
    label: "AWS cost optimization",
    description: "Optimized operational costs through AWS-based architecture improvements.",
  },
];
