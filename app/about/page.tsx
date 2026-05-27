import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Raamiz Maredia",
  description: "Learn more about Raamiz Maredia — background, skills, and experience.",
};

// TODO: Update skills
const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
  "DevOps": ["Docker", "GitHub Actions", "Vercel", "AWS", "Linux"],
  "Tools": ["Git", "Figma", "VS Code", "Postman", "Notion"],
};

// TODO: Update experience
const experience = [
  {
    role: "Software Engineer",
    company: "Some Cool Company",
    period: "2024 – Present",
    description:
      "Built and shipped features used by thousands of users. Improved performance, wrote clean code, and collaborated with a great team.",
  },
  {
    role: "Freelance Developer",
    company: "Self-employed",
    period: "2023 – 2024",
    description:
      "Worked with clients to design and build web apps, landing pages, and internal tools from scratch.",
  },
];

// TODO: Update education
const education = [
  {
    degree: "B.S. Computer Science",
    school: "Your University",
    period: "2020 – 2024",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-4xl font-bold text-zinc-50 mb-4">About me</h1>
        {/* TODO: Write your real bio */}
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            Hey! I&apos;m Raamiz — a software developer based somewhere cool. I love building
            things that live on the internet, especially when they&apos;re fast, accessible,
            and genuinely useful.
          </p>
          <p>
            I started coding when I was [age/year], and I haven&apos;t stopped since. These
            days I mostly work with React, TypeScript, and whatever backend technology
            fits the job. I care a lot about the craft — clean code, good UX, and
            shipping things that actually work.
          </p>
          <p>
            Outside of code, I [your hobbies / interests]. Always happy to chat about
            new projects, ideas, or just grab a virtual coffee.
          </p>
        </div>

        <div className="flex gap-3 mt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-400 transition-colors"
          >
            See my work
          </Link>
          <a
            href="/resume.pdf" // TODO: add resume.pdf to /public
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
              className="flex flex-col sm:flex-row gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="sm:w-36 shrink-0">
                <span className="text-xs text-zinc-500">{job.period}</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-50">{job.role}</h3>
                <p className="text-sm text-indigo-400 mb-2">{job.company}</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold text-zinc-50 mb-6">Education</h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="flex flex-col sm:flex-row gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="sm:w-36 shrink-0">
                <span className="text-xs text-zinc-500">{edu.period}</span>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-50">{edu.degree}</h3>
                <p className="text-sm text-indigo-400">{edu.school}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
