import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Rayaan Maredia",
  description: "CS student at Texas A&M, former Twilio SWE intern, full-stack developer.",
};

const skills = {
  "Languages": ["Java", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  "Frameworks": ["Spring Boot", "React.js", "Next.js", "Tailwind CSS", "React Native"],
  "Tools": ["Git/GitHub", "Docker", "Postman", "Figma", "Jira", "SonarQube"],
  "Methods": ["Agile/Scrum", "OOP", "Unit Testing", "CI/CD", "REST APIs"],
};

const experience = [
  {
    role: "Software Engineering Intern",
    team: "Billing Platform",
    company: "Twilio Inc.",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Modernized a legacy PHP system by rewriting core components in Spring Boot and Maven, improving performance and maintainability",
      "Implemented policy-driven CSV/JSON validation and sanitization, ensuring accurate bulk transaction processing",
      "Built unit tests with JUnit/Mockito, achieving high coverage enforced via Buildkite and SonarQube CI/CD",
      "Designed and tested REST APIs with Postman, Swagger UI, and OpenAPI for seamless service integration",
      "Collaborated in Agile sprints using Jira; followed GitHub workflows for PRs, reviews, and merges",
    ],
  },
  {
    role: "Peer Tutor / Teaching Assistant",
    team: "Programming Design & Concepts",
    company: "Texas A&M University",
    location: "College Station, TX",
    period: "Aug 2024 – May 2025",
    bullets: [
      "Guided students in C++ fundamentals and object-oriented programming concepts",
      "Helped ~25% of students achieve mastery of C++ fundamentals, contributing to higher class success rates",
      "Coached students weekly with a methodical approach to problem-solving, reinforcing data structures and optimization",
    ],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">

      {/* ── Header ── */}
      <div className="max-w-2xl mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500 mb-3">
          About me
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-tight mb-8">
          Building things that matter.
        </h1>
        <div className="flex flex-col gap-5 text-zinc-400 text-[15px] leading-[1.85]">
          <p>
            I&apos;m Rayaan — a Computer Science student at{" "}
            <span className="text-zinc-200 font-medium">Texas A&M University</span> (Class of
            &apos;26, 3.84 GPA) with an emphasis in Business. I&apos;m from Nederland, Texas,
            and I care deeply about building software that&apos;s fast, reliable, and
            genuinely useful.
          </p>
          <p>
            Last summer I interned at{" "}
            <span className="text-zinc-200 font-medium">Twilio</span> on the Billing Platform
            team, where I rewrote legacy PHP services in Spring Boot, shipped REST APIs, and
            wrote production code used across the platform. Outside of work I&apos;ve led
            full-stack projects, taught C++ to other students, and shipped everything from
            mobile apps to point-of-sale systems.
          </p>
          <p>
            I&apos;m graduating in May 2026 and actively looking for full-time Software
            Engineering roles. I work well in Agile teams, take testing seriously, and
            love tackling hard backend problems.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors duration-200"
          >
            See my projects
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
      </div>

      {/* ── Skills ── */}
      <section className="mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500 mb-3">
          Skills
        </p>
        <h2 className="text-2xl font-bold text-zinc-50 tracking-tight mb-8">
          What I work with
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-400 mb-4">
                {category}
              </p>
              <ul className="flex flex-col gap-2.5">
                {items.map((skill) => (
                  <li key={skill} className="text-sm text-zinc-300 leading-none">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500 mb-3">
          Experience
        </p>
        <h2 className="text-2xl font-bold text-zinc-50 tracking-tight mb-8">
          Where I&apos;ve worked
        </h2>
        <div className="flex flex-col gap-5">
          {experience.map((job) => (
            <div
              key={job.role}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold text-zinc-50 text-base leading-snug">
                    {job.role}
                    <span className="text-zinc-500 font-normal"> · {job.team}</span>
                  </h3>
                  <p className="text-sm text-indigo-400">
                    {job.company}
                    <span className="text-zinc-600"> — {job.location}</span>
                  </p>
                </div>
                <span className="shrink-0 text-xs text-zinc-500 sm:text-right leading-none pt-0.5">
                  {job.period}
                </span>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-[1.7]">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-indigo-500/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Education ── */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-500 mb-3">
          Education
        </p>
        <h2 className="text-2xl font-bold text-zinc-50 tracking-tight mb-8">
          Where I study
        </h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-zinc-50 text-base">
                B.S. Computer Science
                <span className="text-zinc-500 font-normal"> — Emphasis in Business</span>
              </h3>
              <p className="text-sm text-indigo-400">
                Texas A&M University
                <span className="text-zinc-600"> — College Station, TX</span>
              </p>
            </div>
            <span className="shrink-0 text-xs text-zinc-500 leading-none pt-0.5">
              Aug 2022 – May 2026
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-zinc-300">GPA: <span className="font-medium text-zinc-100">3.84</span></span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-300">Class of <span className="font-medium text-zinc-100">2026</span></span>
          </div>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
            Relevant coursework: Data Structures &amp; Algorithms · Software Engineering ·
            Discrete Structures · Computer Architecture · Senior Capstone
          </p>
        </div>
      </section>

    </div>
  );
}
