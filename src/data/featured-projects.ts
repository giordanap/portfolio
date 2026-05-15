export const featuredProjects = [
  {
    label: "Gateway platform",
    title: "Microservices gateway platform",
    description:
      "A backend platform pattern where client applications consume stable endpoints while internal services remain behind gateway routing, security and transformation layers.",
    role: "System focus: routing, contracts and service boundaries",
    screenshot: {
      src: "/screenshots/projects/datatwin-gateway-placeholder.svg",
      alt: "Microservices gateway platform architecture screenshot placeholder",
    },
    stack: ["Kong OSS", "NestJS", ".NET", "gRPC", "Docker", "JWT"],
    outcomes: [
      "Organizes multiple backend services behind a controlled API entrypoint.",
      "Keeps frontend contracts stable while backend services evolve.",
      "Supports route-level security, request transformation and smoke validation.",
    ],
  },
  {
    label: "Async backend",
    title: "Cloud async processing system",
    description:
      "A cloud workflow pattern for separating heavy workloads from critical API paths using queues, workers, retries, DLQs and production observability.",
    role: "System focus: background processing and failure isolation",
    screenshot: {
      src: "/screenshots/projects/async-processing-placeholder.svg",
      alt: "Cloud async processing system architecture screenshot placeholder",
    },
    stack: ["Node.js", "TypeScript", "AWS SQS", "Lambda", "DLQ", "CloudWatch"],
    outcomes: [
      "Moves long-running or fragile work away from synchronous API flows.",
      "Adds retries and DLQ handling for safer failure recovery.",
      "Improves traceability through logs, audits and operational signals.",
    ],
  },
  {
    label: "Product system",
    title: "Contract-first product backend",
    description:
      "A product architecture approach where entities, API contracts and frontend behavior are aligned before implementation to reduce ambiguity and rework.",
    role: "System focus: product modeling and backend-ready contracts",
    screenshot: {
      src: "/screenshots/projects/expiry-mate-placeholder.svg",
      alt: "Contract-first product backend architecture screenshot placeholder",
    },
    stack: ["Next.js", "NestJS", "TypeScript", "API Contracts", "Data Modeling"],
    outcomes: [
      "Defines entities, states and workflows before building screens.",
      "Aligns frontend and backend through clear API contracts.",
      "Keeps product behavior understandable, testable and easier to evolve.",
    ],
  },
];

export const projectPrinciples = [
  "Systems over job history",
  "Architecture over buzzwords",
  "Backend-first thinking",
  "Clear service boundaries",
  "Production reliability",
  "Observable failure paths",
];
