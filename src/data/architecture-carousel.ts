export type ArchitectureCarouselSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  flowLabel: string;
  flow: string[];
  tags: string[];
  highlights: string[];
  visualTone: "cyan" | "emerald" | "violet";
};

export const architectureCarouselSlides: ArchitectureCarouselSlide[] = [
  {
    id: "api-gateway-architecture",
    eyebrow: "API Gateway",
    title: "API Gateway architecture",
    description:
      "A gateway-centered backend flow where frontend clients consume stable contracts while services remain protected behind routing, security and transformation layers.",
    flowLabel: "Frontend -> Gateway -> Services",
    flow: [
      "Client apps",
      "Kong Gateway",
      "Backend services",
      "Databases",
      "External providers",
    ],
    tags: ["Kong", "API Gateway", "REST", "Security", "Routing"],
    highlights: [
      "Centralized entrypoint for APIs.",
      "Clear separation between clients and backend services.",
      "Prepared for route-level security and request transformation.",
    ],
    visualTone: "cyan",
  },
  {
    id: "aws-async-processing",
    eyebrow: "AWS Async",
    title: "AWS async processing flow",
    description:
      "A queue-based architecture for moving heavy work out of critical request paths using background processing, retries, DLQs and operational visibility.",
    flowLabel: "API -> Queue -> Worker -> Observability",
    flow: [
      "API request",
      "SQS queue",
      "Lambda or worker",
      "S3 or database",
      "DLQ",
      "CloudWatch",
    ],
    tags: ["AWS", "SQS", "Lambda", "S3", "DLQ", "CloudWatch"],
    highlights: [
      "Decouples heavy workloads from synchronous APIs.",
      "Supports retries and failure isolation.",
      "Improves traceability for production operations.",
    ],
    visualTone: "emerald",
  },
  {
    id: "grpc-microservices",
    eyebrow: "Microservices",
    title: "gRPC microservices communication",
    description:
      "A service-to-service communication model for distributed platforms where internal services communicate through typed contracts and focused domain boundaries.",
    flowLabel: "Gateway -> gRPC -> Domains",
    flow: [
      "Gateway layer",
      "gRPC contracts",
      "Domain services",
      "Internal storage",
      "Monitoring",
    ],
    tags: ["gRPC", "Microservices", "Contracts", "Service Boundaries"],
    highlights: [
      "Typed communication between backend services.",
      "Better separation of domain responsibilities.",
      "Useful for internal high-efficiency service calls.",
    ],
    visualTone: "violet",
  },
  {
    id: "file-processing-pipeline",
    eyebrow: "File Processing",
    title: "File processing pipeline",
    description:
      "A cloud-ready file processing flow where uploads, storage, processing and notifications are separated into resilient backend steps.",
    flowLabel: "Upload -> Storage -> Queue -> Processor",
    flow: [
      "Upload",
      "S3 storage",
      "Queue event",
      "Processor",
      "Result storage",
      "Notification",
    ],
    tags: ["S3", "SQS", "Workers", "Background Jobs", "Notifications"],
    highlights: [
      "Keeps file handling outside critical UI flows.",
      "Makes processing easier to retry and observe.",
      "Supports scalable background execution.",
    ],
    visualTone: "cyan",
  },
  {
    id: "production-reliability-loop",
    eyebrow: "Reliability",
    title: "Production reliability loop",
    description:
      "A production-focused operating model for detecting failures, stabilizing systems, recovering safely and improving observability after incidents.",
    flowLabel: "Detect -> Stabilize -> Recover -> Improve",
    flow: [
      "Detect",
      "Stabilize",
      "Retry or recover",
      "Observe",
      "Improve",
    ],
    tags: ["Timeouts", "Retries", "Logs", "Audits", "Incidents"],
    highlights: [
      "Designed around real production behavior.",
      "Prioritizes stability before complexity.",
      "Turns incidents into stronger systems.",
    ],
    visualTone: "emerald",
  },
];

export type ArchitectureCarouselSlideId =
  (typeof architectureCarouselSlides)[number]["id"];
