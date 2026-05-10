export const navigationItems = [
  {
    label: "Expertise",
    href: "#expertise",
  },
  {
    label: "Architecture",
    href: "#architecture",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Impact",
    href: "#impact",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Stack",
    href: "#stack",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
