export const navigationItems = [
  {
    label: "Systems",
    href: "#expertise",
  },
  {
    label: "Architectures",
    href: "#architecture",
  },
  {
    label: "Cloud & Async",
    href: "#cloud-media",
  },
  {
    label: "Stack",
    href: "#technical-experience",
  },
  {
    label: "Problems",
    href: "#production",
  },
  {
    label: "Patterns",
    href: "#patterns",
  },
  {
    label: "Systems Work",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

export type NavigationItem = (typeof navigationItems)[number];
