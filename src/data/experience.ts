export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "RUMBO",
    role: "Full Stack Developer",
    location: "Lima, Peru",
    period: "2025 - Present",
    highlights: [
      "Designed and implemented event-driven asynchronous processes for high-volume background workloads.",
      "Optimized batch processing from around 5 minutes to around 2 minutes through batching and parallelization.",
      "Implemented AWS integrations with Lambda, S3 and SQS, including queues, DLQs and retry strategies.",
    ],
    tags: ["Node.js", "AWS Lambda", "S3", "SQS", "DLQ", "React", "Next.js"],
  },
  {
    company: "Encora",
    role: "Senior Software Engineer",
    location: "Lima, Peru",
    period: "2023 - 2025",
    highlights: [
      "Led backend development for a microservices-based back-office system deployed on Azure.",
      "Implemented gRPC-based communication across more than 50 microservices.",
      "Designed API Gateway capabilities with Kong, route configuration, security plugins and request transformation.",
    ],
    tags: ["Microservices", "gRPC", "Azure", ".NET Core", "CQRS", "Kong"],
  },
  {
    company: "NTT DATA",
    role: "Full Stack Developer",
    location: "Lima, Peru",
    period: "2022 - 2023",
    highlights: [
      "Developed analytical dashboards in React for real-time KPI visualization.",
      "Reduced frontend load times by 40% through rendering and API consumption improvements.",
      "Refactored backend services following SOLID principles to improve maintainability and testability.",
    ],
    tags: ["React", "APIs", "AWS EC2", "SOLID", "Dashboards"],
  },
  {
    company: "NTT DATA",
    role: "Senior Software Engineer",
    location: "Lima, Peru",
    period: "2020 - 2022",
    highlights: [
      "Led the migration of a monolithic .NET system to a NestJS microservices architecture.",
      "Implemented event-based communication with RabbitMQ across initial distributed services.",
      "Implemented AWS solutions with Lambda, S3 and DynamoDB, optimizing operational costs by 30%.",
    ],
    tags: ["NestJS", "Node.js", "RabbitMQ", "AWS Lambda", "S3", "DynamoDB"],
  },
  {
    company: "Acceso Crediticio",
    role: "Frontend and Data Developer",
    location: "Lima, Peru",
    period: "2018 - 2020",
    highlights: [
      "Developed interactive React dashboards with WebSockets for real-time operational monitoring.",
      "Implemented data visualization and processing solutions for business decision-making.",
      "Contributed to a BI platform integrating historical and real-time data through backend API consumption.",
    ],
    tags: ["React", "WebSockets", "BI", "Dashboards", "APIs"],
  },
  {
    company: "APM Terminals",
    role: "Software Developer",
    location: "Callao, Peru",
    period: "2017 - 2018",
    highlights: [
      "Developed web interfaces for port operations visualization.",
      "Built reusable TypeScript components and integrated backend services for operational data exposure.",
      "Collaborated with business teams to translate operational requirements into technical solutions.",
    ],
    tags: ["TypeScript", "Frontend", "Backend Integration", "Operations"],
  },
  {
    company: "Pro Empresa",
    role: "Software Developer Trainee",
    location: "Lima, Peru",
    period: "2016 - 2017",
    highlights: [
      "Supported internal system development using .NET and SQL Server.",
      "Implemented data processing and validation workflows for report generation.",
      "Contributed to system maintenance, debugging and production support.",
    ],
    tags: [".NET", "SQL Server", "Internal Systems", "Support"],
  },
];
