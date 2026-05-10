export type ProjectStatus = "Live" | "In Progress" | "Planned" | "Concept";

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  type: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    caseStudy?: string;
  };
  media: {
    cover: string;
    logo?: string;
    preview?: string;
  };
};

export const projects: Project[] = [
  {
    id: "shoplite",
    name: "ShopLite",
    status: "Live",
    type: "Frontend-only e-commerce",
    description:
      "Frontend-only e-commerce demo built with Next.js, TypeScript, TanStack Query, Zustand, Storybook and DummyJSON.",
    tags: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Storybook",
      "DummyJSON",
      "GitHub Pages",
    ],
    links: {
      github: "https://github.com/giordanap/shoplite",
    },
    media: {
      cover: "/assets/projects/shoplite/cover.webp",
      logo: "/assets/projects/shoplite/logo.svg",
      preview: "/assets/projects/shoplite/preview.webm",
    },
  },
  {
    id: "travelscope",
    name: "TravelScope",
    status: "Planned",
    type: "Frontend-only travel intelligence app",
    description:
      "Frontend-only travel planner combining REST Countries, Open-Meteo, Frankfurter and Nager.Date to explore countries, weather, currencies and holidays.",
    tags: [
      "Next.js",
      "TypeScript",
      "REST Countries",
      "Open-Meteo",
      "Frankfurter",
      "Nager.Date",
      "Data Composition",
    ],
    links: {},
    media: {
      cover: "/assets/projects/travelscope/cover.webp",
      logo: "/assets/projects/travelscope/logo.svg",
      preview: "/assets/projects/travelscope/preview.webm",
    },
  },
  {
    id: "expirymate",
    name: "ExpiryMate",
    status: "Concept",
    type: "Household expiry tracking product",
    description:
      "Product concept for household expiry tracking using product lots, expiration states, categories, locations and notification rules.",
    tags: [
      "Product Design",
      "Data Modeling",
      "API Contracts",
      "Frontend Architecture",
    ],
    links: {},
    media: {
      cover: "/assets/projects/expirymate/cover.webp",
      logo: "/assets/projects/expirymate/logo.svg",
    },
  },
  {
    id: "portfolio-api",
    name: "Portfolio API Concept",
    status: "Concept",
    type: "External API operation router",
    description:
      "Backend architecture concept for routing safe frontend operations through controlled provider adapters, cache, rate limits and external API integrations.",
    tags: [
      "NestJS",
      "Provider Adapters",
      "Cache",
      "Rate Limit",
      "External APIs",
      "API Gateway",
    ],
    links: {},
    media: {
      cover: "/assets/projects/portfolio-api/cover.webp",
      logo: "/assets/projects/portfolio-api/logo.svg",
    },
  },
  {
    id: "portfolio",
    name: "Portfolio",
    status: "In Progress",
    type: "Personal static portfolio",
    description:
      "Premium static portfolio page focused on backend engineering, AWS, microservices, production reliability and project presentation.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Pages",
    ],
    links: {
      github: "https://github.com/giordanap/portfolio",
      live: "https://giordanap.github.io/portfolio/",
    },
    media: {
      cover: "/assets/projects/portfolio/cover.webp",
      logo: "/assets/projects/portfolio/logo.svg",
    },
  },
];
