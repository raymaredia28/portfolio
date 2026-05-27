import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/raamizmaredia" }, // TODO: update handle
  { label: "LinkedIn", href: "https://linkedin.com/in/raamizmaredia" }, // TODO: update
  { label: "Twitter", href: "https://twitter.com/raamizmaredia" }, // TODO: update
  { label: "Email", href: "mailto:raamizmaredia@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Raamiz Maredia. Built with Next.js &amp; Tailwind.
        </p>
        <nav className="flex items-center gap-6">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
