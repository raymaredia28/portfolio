# Portfolio — CLAUDE.md

## Project overview
Personal brand website for Raamiz Maredia. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Stack
- **Framework**: Next.js 15 App Router
- **Styling**: Tailwind CSS v4 (config-free, uses `@import "tailwindcss"` in globals.css)
- **Language**: TypeScript
- **Fonts**: Geist Sans + Geist Mono via `next/font/google`
- **Package manager**: npm

## Dev commands
```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## File structure
```
app/
  layout.tsx          # Root layout — wraps every page with <Navbar> and <Footer>
  page.tsx            # Home / hero page
  about/page.tsx      # About — bio, skills, timeline
  projects/page.tsx   # Projects grid
  blog/page.tsx       # Blog post list
  contact/page.tsx    # Contact form + socials
  globals.css         # Global styles, Tailwind import, CSS vars

components/
  Navbar.tsx          # Sticky top nav with mobile hamburger
  Footer.tsx          # Footer with links + copyright
  ProjectCard.tsx     # Reusable card for the projects page
  BlogCard.tsx        # Reusable card for the blog page
```

## Design system
- **Background**: `zinc-950` (#09090b)
- **Card/surface**: `zinc-900` (#18181b)
- **Border**: `zinc-800` (#27272a)
- **Text primary**: `zinc-50`
- **Text secondary**: `zinc-400`
- **Accent**: `indigo-500` (#6366f1)
- All pages use `max-w-5xl mx-auto px-6` for layout

## Content placeholders
All placeholder content is marked with `{/* TODO */}` comments. Update:
- `app/page.tsx` — hero tagline, featured projects
- `app/about/page.tsx` — bio, skills, experience
- `app/projects/page.tsx` — real project entries in the `projects` array
- `app/blog/page.tsx` — real posts in the `posts` array
- `components/Footer.tsx` — social links (GitHub, Twitter, LinkedIn, email)

## GitHub / deployment
- Repo: https://github.com/raymaredia28/portfolio
- Deployment target: Vercel (connect repo → auto-deploy on push to main)
- When user describes a change, implement it, commit, and push to main
