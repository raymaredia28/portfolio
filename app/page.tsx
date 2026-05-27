import Link from "next/link";
import ProjectCard, { Project } from "@/components/ProjectCard";

// TODO: Replace with your real featured projects
const featured: Project[] = [
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
      "An open-source tool that developers actually use. Highlights your ability to ship clean, documented software.",
    tags: ["Python", "FastAPI", "Docker"],
    repo: "https://github.com/raamizmaredia/project-beta",
    featured: true,
  },
  {
    title: "Project Gamma",
    description:
      "A mobile-first experience with slick animations and great UX. Shows your eye for design and detail.",
    tags: ["React Native", "Expo", "Supabase"],
    href: "https://example.com",
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-20">
        <div className="flex flex-col gap-6 max-w-2xl">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Open to opportunities
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-50 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-indigo-400">Raamiz</span>
            .
          </h1>

          {/* TODO: update tagline */}
          <p className="text-xl text-zinc-400 leading-relaxed">
            I build{" "}
            <span className="text-zinc-50 font-medium">fast, beautiful software</span>{" "}
            that people actually enjoy using. Full-stack developer with a passion for
            clean code, great design, and shipping things that matter.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
            >
              View my work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-2.5 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tech stack pills ── */}
      <section className="border-y border-zinc-800 bg-zinc-900/50 py-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-600">
              Stack
            </span>
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "PostgreSQL",
              "Docker",
              "Tailwind CSS",
            ].map((tech) => (
              <span key={tech} className="text-sm text-zinc-400">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured projects ── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-zinc-50">Featured Projects</h2>
            <p className="mt-2 text-zinc-400">A few things I&apos;ve built recently.</p>
          </div>
          <Link
            href="/projects"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors hidden sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-zinc-50">Let&apos;s build something together.</h2>
            <p className="mt-1 text-zinc-400">
              I&apos;m always down to hear about interesting problems and cool projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
          >
            Say hello →
          </Link>
        </div>
      </section>
    </>
  );
}
