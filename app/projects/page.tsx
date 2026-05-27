import type { Metadata } from "next";
import ProjectCard, { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Raamiz Maredia",
  description: "Things I've built — side projects, open source, and client work.",
};

// TODO: Replace with your real projects
const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web app that does something really cool. Built to solve a real problem with clean, scalable code.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "https://example.com",
    repo: "https://github.com/raamizmaredia/project-alpha",
    featured: true,
  },
  {
    title: "Project Beta",
    description:
      "An open-source CLI tool that makes a tedious developer task fast and painless.",
    tags: ["Python", "FastAPI", "Docker"],
    repo: "https://github.com/raamizmaredia/project-beta",
  },
  {
    title: "Project Gamma",
    description:
      "Mobile-first experience with great animations and UX. Shows attention to design and interaction detail.",
    tags: ["React Native", "Expo", "Supabase"],
    href: "https://example.com",
  },
  {
    title: "Project Delta",
    description:
      "Internal tool that saved a team hours per week. Sometimes the best projects are the boring utility ones.",
    tags: ["Node.js", "Express", "MongoDB"],
    repo: "https://github.com/raamizmaredia/project-delta",
  },
  {
    title: "Project Epsilon",
    description:
      "An experiment with a new technology I wanted to learn. Sometimes building is the best way to understand.",
    tags: ["Rust", "WebAssembly"],
    repo: "https://github.com/raamizmaredia/project-epsilon",
  },
  {
    title: "Project Zeta",
    description:
      "A browser extension that makes one specific thing about browsing the web a lot better.",
    tags: ["JavaScript", "Chrome Extensions", "Manifest V3"],
    href: "https://example.com",
    repo: "https://github.com/raamizmaredia/project-zeta",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-zinc-50 mb-3">Projects</h1>
        <p className="text-zinc-400 max-w-xl">
          Things I&apos;ve built — side projects, open source contributions, client work,
          and experiments. Each one taught me something new.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
