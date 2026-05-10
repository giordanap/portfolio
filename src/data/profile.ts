export const profile = {
  name: "Giordan Arredondo",
  role: "Senior Backend Engineer",
  headline: "I build resilient APIs, cloud workflows and scalable backend systems.",
  subheadline:
    "Senior Backend Engineer specialized in Node.js, NestJS, AWS, microservices and production-grade distributed systems.",
  location: "Lima, Peru",
  email: "garredondop@uni.pe",
  phone: "+51 931 017 921",
  links: {
    github: "https://github.com/giordanap",
    linkedin: "https://linkedin.com/in/garredondop",
    cv: "/assets/cv/Giordan_Arredondo_CV_EN.pdf",
  },
  badges: [
    "Senior Backend Engineer",
    "Node.js / NestJS",
    "AWS",
    "Microservices",
    "Production Reliability",
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
