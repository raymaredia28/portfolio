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
    role: "Software Engineering Intern — Billing Platform",
    company: "Twilio Inc.",
    location: "Remote",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Modernized a legacy PHP system by rewriting core components in Spring Boot and Maven, improving performance and maintainability",
      "Implemented policy-driven CSV/JSON validation and sanitization, ensuring accurate bulk transaction processing",
      "Built unit tests with JUnit/Mockito, achieving high coverage and enforcing quality via Buildkite and SonarQube CI/CD",
      "Designed and tested REST APIs with Postman, Swagger UI, and OpenAPI for seamless service integration",
      "Collaborated in Agile sprints using Jira; followed GitHub workflows for PRs, reviews, and merges",
    ],
  },
  {
    role: "Peer Tutor / Teaching Assistant — Programming Design & Concepts",
    company: "Texas A&M University",
    location: "College Station, TX",
    period: "Aug 2024 – May 2025",
    bullets: [
      "Guided students in C++ fundamentals and object-oriented programming concepts",
      "Facilitated ~25% of students to achieve mastery of C++ fundamentals, contributing to higher class success rates",
      "Coached students weekly with a methodical approach to problem-solving, reinforcing data structures and program optimization",
    ],
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold text-zinc-50 mb-4">About me</h1>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            Hey! I&apos;m Rayaan — a Computer Science student at{" "}
            <span className="text-zinc-200">Texas A&M University</span> (Class of &apos;26,
            3.84 GPA) with an emphasis in Business. I&apos;m from Nederland, Texas, and I&apos;m
            passionate about building software that&apos;s fast, reliable, and genuinely
            useful.
          </p>
          <p>
            Last summer I interned at{" "}
            <span className="text-zinc-200">Twilio</span> on the Billing Platform team,
            where I rewrote legacy PHP services in Spring Boot, built REST APIs, and
            shipped production code used across the platform. Before that I&apos;ve led
            full-stack projects, taught C++ to other students, and shipped everything
            from mobile apps to POS systems.
          </p>
          <p>
            I&apos;m graduating in May 2026 and actively looking for full-time Software
            Engineering roles. I work well in Agile teams, write tests, care about
            code quality, and love tackling hard backend problems.
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
          >
            See my projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm font-semibold text-zinc-300 hover:border-zinc-500 hover:text-zinc-50 transition-colors"
          >
            Download résumé
          </a>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-zinc-50 mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-sm text-zinc-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-zinc-50 mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((job) => (
            <div
              key={job.role}
              className="rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                <h3 className="font-semibold text-zinc-50">{job.role}</h3>
                <span className="shrink-0 text-xs text-zinc-500">{job.period}</span>
              </div>
              <p className="text-sm text-indigo-400 mb-4">
                {job.company} &mdash; {job.location}
              </p>
              <ul className="space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-50 mb-6">Education</h2>
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
            <h3 className="font-semibold text-zinc-50">
              B.S. Computer Science — Emphasis in Business
            </h3>
            <span className="shrink-0 text-xs text-zinc-500">Aug 2022 – May 2026</span>
          </div>
          <p className="text-sm text-indigo-400 mb-3">Texas A&M University — College Station, TX</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-zinc-400">
            <span>GPA: 3.84</span>
            <span>Class of 2026</span>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Relevant coursework: Data Structures &amp; Algorithms · Software Engineering ·
            Discrete Structures · Computer Architecture · Senior Capstone
          </p>
        </div>
      </section>
    </div>
  );
}
