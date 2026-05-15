export const profile = {
  name: "Giordan Arredondo",
  role: "Backend Engineer",
  headline: "Backend systems for APIs, cloud workflows and production reliability.",
  subheadline:
    "I design resilient backend architectures with Node.js, NestJS, TypeScript, AWS, microservices, queues, retries and observability.",
  location: "Remote",
  email: "garredondop@uni.pe",
  phone: "+51 931 017 921",
  links: {
    github: "https://github.com/giordanap",
    linkedin: "https://linkedin.com/in/garredondop",
    cv: "/assets/cv/Giordan_Arredondo_CV_EN.pdf",
  },
  badges: [
    "Node.js / NestJS",
    "TypeScript",
    "AWS",
    "Microservices",
    "SQS / DLQ",
    "gRPC",
    "Observability",
  ],
  focusAreas: [
    "Backend Engineering",
    "Cloud Workflows",
    "Distributed Systems",
    "High-throughput APIs",
    "Event-driven Architecture",
    "Production Reliability",
  ],
} as const;

export type Profile = typeof profile;
