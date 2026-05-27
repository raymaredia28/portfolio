import type { Metadata } from "next";
import ProjectCard, { Project } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects — Rayaan Maredia",
  description: "Full-stack apps, backend systems, and side projects built by Rayaan Maredia.",
};

const projects: Project[] = [
  {
    title: "DegreeFlow — CS Degree Planner",
    description:
      "Led a 4-member team to ship a full-stack degree planning app for TAMU CS students. Built a three-layer PDF parsing pipeline (pdfplumber, AI API, OCR fallback) to extract and normalize transcript data, plus a rule-based evaluation engine validated by 182 automated tests. Achieved 4.6/5 usability and 4.4/5 preference over the existing Howdy planner in UAT.",
    tags: ["React", "Next.js", "Firestore", "Python", "AI/OCR"],
    featured: true,
  },
  {
    title: "Panda Express POS System",
    description:
      "Managed Agile coordination and led weekly scrums across a 4-member team. Implemented ~50% of backend APIs with Next.js and PostgreSQL, and designed a responsive, accessible UI with Tailwind CSS for restaurant management and daily transactions.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "Agile"],
    featured: true,
  },
  {
    title: "Split — Roommate Discovery App",
    description:
      "UI/UX designer for a social-media-style roommate discovery app built with a 10-member team. Crafted an intuitive calendar UI in Figma and implemented it in React Native with dynamic color and interaction logic triggered by user events.",
    tags: ["React Native", "Expo", "Figma", "UI/UX"],
    featured: true,
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">

      <div className="mb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500 mb-3">
          Work
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-[15px] text-zinc-400 leading-relaxed max-w-lg">
          Things I&apos;ve built — full-stack apps, mobile UIs, and backend systems.
          Each one shipped to real users.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    </div>
  );
}
