export const designTokens = {
  brand: {
    name: "Giordan Arredondo",
    role: "Senior Backend Engineer",
    focus: "Node.js | NestJS | AWS | Microservices",
  },
  colors: {
    background: "#020617",
    backgroundSoft: "#07111f",
    surface: "rgba(15, 23, 42, 0.72)",
    surfaceStrong: "rgba(15, 23, 42, 0.92)",
    border: "rgba(148, 163, 184, 0.18)",
    borderStrong: "rgba(34, 211, 238, 0.35)",
    text: "#f8fafc",
    muted: "#94a3b8",
    cyan: "#22d3ee",
    blue: "#38bdf8",
    violet: "#a78bfa",
    emerald: "#34d399",
  },
  gradients: {
    hero: "radial-gradient(circle at top left, rgba(34, 211, 238, 0.22), transparent 34%), radial-gradient(circle at top right, rgba(167, 139, 250, 0.18), transparent 32%)",
    text: "linear-gradient(135deg, #f8fafc 0%, #67e8f9 45%, #a78bfa 100%)",
    border: "linear-gradient(135deg, rgba(34, 211, 238, 0.55), rgba(167, 139, 250, 0.38), rgba(52, 211, 153, 0.24))",
  },
  layout: {
    maxWidth: "1180px",
    sectionPadding: "clamp(5rem, 8vw, 8rem)",
    radius: {
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
  },
  motion: {
    revealDistance: 24,
    duration: 0.6,
    stagger: 0.1,
  },
} as const;

export type DesignTokens = typeof designTokens;
