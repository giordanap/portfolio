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
    label: "Cloud",
    href: "#cloud-media",
  },
  {
    label: "Production",
    href: "#production",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Stack",
    href: "#technical-experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
