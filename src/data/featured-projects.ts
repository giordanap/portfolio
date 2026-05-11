export const featuredProjects = [
  {
    label: "Platform modernization",
    title: "DataTwin API Gateway modernization",
    description:
      "Migration strategy from a custom NestJS gateway to Kong OSS, keeping the existing frontend contract while improving routing, security and operational control.",
    role: "Backend and architecture contributor",
    stack: ["Kong OSS", "NestJS", ".NET 8", "gRPC", "Docker", "JWT"],
    outcomes: [
      "Mapped existing API flows into gateway services and routes.",
      "Validated HTTP to gRPC access patterns through Kong.",
      "Defined security, routing and smoke validation strategy.",
    ],
  },
  {
    label: "Cloud backend",
    title: "Reliable async processing patterns",
    description:
      "Backend patterns for production workloads using queues, retries, dead-letter queues and observability to isolate failures and protect core APIs.",
    role: "Backend engineer",
    stack: ["Node.js", "TypeScript", "AWS SQS", "DLQ", "Lambda", "CloudWatch"],
    outcomes: [
      "Separated critical API paths from background processing.",
      "Improved traceability for operational incidents.",
      "Designed safer retry and failure-handling flows.",
    ],
  },
  {
    label: "Product engineering",
    title: "ExpiryMate contract-first MVP",
    description:
      "Personal product concept for household expiry tracking, designed with a contract-first approach, clear entities and backend-ready product boundaries.",
    role: "Full-stack product builder",
    stack: ["Next.js", "NestJS", "TypeScript", "API contracts", "Product modeling"],
    outcomes: [
      "Defined Product, ItemLot, Category, Location and NotificationRule entities.",
      "Designed expiry buckets such as today, this week and expired.",
      "Prepared frontend and backend alignment through shared contracts.",
    ],
  },
];

export const projectPrinciples = [
  "Backend-first thinking",
  "Clear service boundaries",
  "Production reliability",
  "Cloud-ready architecture",
  "Measurable validation",
];
