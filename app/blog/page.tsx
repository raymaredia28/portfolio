import type { Metadata } from "next";
import BlogCard, { Post } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog — Raamiz Maredia",
  description: "Thoughts on software, design, and building things on the internet.",
};

// TODO: Replace with your real posts
const posts: Post[] = [
  {
    slug: "why-i-love-typescript",
    title: "Why I Love TypeScript (Even When It's Annoying)",
    excerpt:
      "TypeScript has changed the way I write code. Here's what I've learned after two years of using it in production.",
    date: "May 2025",
    readTime: "5 min read",
    tags: ["TypeScript", "Dev"],
  },
  {
    slug: "building-fast-ui",
    title: "Building UIs That Feel Instant",
    excerpt:
      "Performance isn't just about benchmarks. It's about how fast your app *feels*. Here are the techniques I use.",
    date: "Apr 2025",
    readTime: "7 min read",
    tags: ["Performance", "React", "UX"],
  },
  {
    slug: "lessons-from-freelancing",
    title: "Things Nobody Told Me About Freelancing",
    excerpt:
      "After a year of client work, here are the honest lessons I wish someone had given me on day one.",
    date: "Mar 2025",
    readTime: "6 min read",
    tags: ["Career", "Freelance"],
  },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-zinc-50 mb-3">Blog</h1>
        <p className="text-zinc-400 max-w-xl">
          Thoughts on software, design, and building things on the internet.
          I write when I have something worth saying.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-12 text-center">
          <p className="text-zinc-400">Posts coming soon. Stay tuned.</p>
        </div>
      )}
    </div>
  );
}
