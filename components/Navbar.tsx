"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-50 hover:text-indigo-400 transition-colors duration-200"
        >
          Rayaan Maredia
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors duration-200 hover:text-zinc-50 ${
                  pathname === href
                    ? "text-zinc-50 font-medium"
                    : "text-zinc-400 font-normal"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-4 py-1.5 text-sm font-medium text-zinc-300 hover:border-indigo-500/60 hover:text-zinc-50 transition-all duration-200"
        >
          Contact me
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-5 bg-zinc-400 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-zinc-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-zinc-400 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-zinc-950 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`text-sm transition-colors hover:text-zinc-50 ${
                    pathname === href ? "text-zinc-50 font-medium" : "text-zinc-400"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-zinc-800">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-4 py-1.5 text-sm font-medium text-zinc-300"
            >
              Contact me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
