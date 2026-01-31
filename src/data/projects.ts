export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Plateforme SaaS",
    description: "Dashboard, auth, facturation, admin.",
    stack: ["React", "Node", "PostgreSQL"],
    href: "#",
  },
  {
    title: "App mobile",
    description: "Parcours onboarding + notifications + API.",
    stack: ["React Native", "Firebase"],
    href: "#",
  },
];
