import Link from "next/link";
import ProjectCard, { Project } from "@/components/ProjectCard";

const featured: Project[] = [
  {
    title: "DegreeFlow — CS Degree Planner",
    description:
      "Full-stack degree planning app for TAMU CS students. Built a three-layer PDF parsing pipeline and a rule-based evaluation engine with 182 automated tests. Achieved 4.6/5 usability in student UAT.",
    tags: ["React", "Next.js", "Firestore", "Python"],
    featured: true,
  },
  {
    title: "Panda Express POS System",
    description:
      "Led a 4-member Agile team to build a full point-of-sale system. Owned ~50% of backend APIs with Next.js and PostgreSQL, and delivered a responsive, accessible UI with Tailwind CSS.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Split — Roommate Discovery App",
    description:
      "Designed and built the calendar UI for a social-media-style roommate app. Created Figma mockups and implemented them in React Native with dynamic interaction logic across a 10-member team.",
    tags: ["React Native", "Figma", "UI/UX"],
    featured: true,
  },
];

export default function Home() {
  return (
    <div className="relative">

      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6 pt-28 pb-24">
        <div className="flex flex-col items-start gap-7 max-w-2xl">

          {/* Status badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/8 px-3.5 py-1.5 text-xs font-medium text-indigo-400 tracking-wide">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400" />
            </span>
            Open to full-time roles · CS Graduate
          </span>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <p className="text-lg text-zinc-400 font-normal">Hi, I&apos;m</p>
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight leading-none">
              <span className="gradient-text">Rayaan</span>
              <span className="text-zinc-50"> Maredia</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg text-zinc-300 leading-[1.8] max-w-xl">
            CS graduate from <span className="text-zinc-100 font-medium">Texas A&M</span> and
            former <span className="text-zinc-100 font-medium">Twilio SWE Intern</span>.
            I build scalable backend systems and full-stack web apps — with clean code,
            solid tests, and a focus on shipping things that work.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors duration-200"
            >
              View my work
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://docs.google.com/document/d/1QPux-8jCSnv9Lof4z12kEhTbshZoq3rVi0VADe_Qlzs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-all duration-200"
            >
              View résumé
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 pt-2 border-t border-zinc-800/60 w-full">
            {[
              { value: "3.84", label: "GPA" },
              { value: "Twilio", label: "Last internship" },
              { value: "Texas A&M", label: "University" },
              { value: "May '26", label: "Graduated" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-0.5 pt-4">
                <span className="text-sm font-semibold text-zinc-100">{value}</span>
                <span className="text-xs text-zinc-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="border-y border-zinc-800/60 bg-zinc-900/30 py-5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
              Stack
            </span>
            <span className="h-3.5 w-px bg-zinc-800" />
            {["Java", "Spring Boot", "TypeScript", "React / Next.js", "PostgreSQL", "Docker", "Python", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured projects ── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500">
              Selected work
            </p>
            <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-50 transition-colors duration-200"
          >
            View all
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 px-8 py-10">
          {/* subtle glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-2xl font-bold text-zinc-50 tracking-tight">
                Let&apos;s build something together.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                CS graduate from Texas A&M · Actively looking for full-time SWE roles.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
