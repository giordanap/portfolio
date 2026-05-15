export const technicalExperience = [
  {
    period: "Core",
    title: "Backend core",
    description:
      "The strongest part of my profile: APIs, services, contracts and backend logic with Node.js, NestJS and TypeScript.",
    tags: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL", "gRPC"],
  },
  {
    period: "Cloud",
    title: "Cloud and async workflows",
    description:
      "AWS-based flows for queues, background jobs, file processing, retries, DLQs and production visibility.",
    tags: ["AWS", "Lambda", "S3", "SQS", "SNS", "CloudWatch"],
  },
  {
    period: "Architecture",
    title: "Distributed systems patterns",
    description:
      "Microservices, API Gateway, event-driven architecture, service boundaries and observable production behavior.",
    tags: ["Microservices", "Kong", "API Gateway", "Events", "DLQ"],
  },
  {
    period: "Complement",
    title: "Frontend and platform support",
    description:
      "Frontend and complementary platform experience used to connect product workflows with backend capabilities.",
    tags: ["React", "Next.js", "Angular", ".NET", "Azure"],
  },
];

export const technicalStackGroups = [
  {
    title: "Backend Core",
    description: "Main area of specialization.",
    items: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "REST",
      "GraphQL",
      "gRPC",
      "CQRS",
      "Clean Architecture",
    ],
  },
  {
    title: "Cloud & Async",
    description: "Cloud workflows and background processing.",
    items: [
      "AWS Lambda",
      "S3",
      "SNS",
      "SQS",
      "SES",
      "IAM",
      "ECS",
      "CloudWatch",
      "KMS",
    ],
  },
  {
    title: "Architecture",
    description: "How systems are organized and connected.",
    items: [
      "Microservices",
      "API Gateway",
      "Kong",
      "Event-driven Architecture",
      "Distributed Systems",
      "Service Boundaries",
    ],
  },
  {
    title: "Data & Cache",
    description: "Storage and data access technologies.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQL Server",
      "DynamoDB",
    ],
  },
  {
    title: "Frontend Support",
    description: "Frontend delivery as a complement to backend work.",
    items: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "API Integration",
    ],
  },
  {
    title: "Complementary Platforms",
    description: "Additional backend and cloud platform experience.",
    items: [
      ".NET Core",
      "Azure App Services",
      "Azure Functions",
      "Blob Storage",
      "Key Vault",
      "Docker",
      "GitHub Actions",
      "GitLab CI/CD",
    ],
  },
];

export const technicalOperatingStyle = [
  "Start from the production flow, not only from the framework.",
  "Keep API contracts clear, predictable and easy to consume.",
  "Separate synchronous requests from background workloads.",
  "Design failure paths with retries, DLQs, logs and audits.",
  "Use complementary tools only when they support the main backend architecture.",
];
