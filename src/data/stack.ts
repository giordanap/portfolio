export type StackGroup = {
  title: string;
  weight: "primary" | "secondary";
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    title: "Primary Backend",
    weight: "primary",
    items: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "REST",
      "GraphQL",
      "gRPC",
      "CQRS",
      "Clean Architecture",
      "SOLID",
    ],
  },
  {
    title: "Cloud and Async",
    weight: "primary",
    items: [
      "AWS Lambda",
      "S3",
      "SQS",
      "SNS",
      "SES",
      "ECS",
      "IAM",
      "CloudWatch",
      "KMS",
      "DLQ",
      "Retries",
    ],
  },
  {
    title: "Architecture",
    weight: "primary",
    items: [
      "Microservices",
      "Event-driven Architecture",
      "API Gateway",
      "Distributed Systems",
      "High-volume Workloads",
      "Production Reliability",
    ],
  },
  {
    title: "Databases",
    weight: "secondary",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL Server", "DynamoDB"],
  },
  {
    title: "Frontend Support",
    weight: "secondary",
    items: ["React", "Next.js", "Angular", "TypeScript"],
  },
  {
    title: "Enterprise and DevOps",
    weight: "secondary",
    items: [
      ".NET Core",
      "Azure",
      "Docker",
      "GitHub Actions",
      "GitLab CI/CD",
      "Kong",
      "RabbitMQ",
    ],
  },
];
