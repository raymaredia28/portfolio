import Link from "next/link";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default function BlogCard({ slug, title, excerpt, date, readTime, tags }: Post) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-indigo-500/50 transition-all duration-300">
        <div className="flex items-center gap-3 text-xs text-zinc-500">
          <time dateTime={date}>{date}</time>
          <span>·</span>
          <span>{readTime}</span>
        </div>

        <h3 className="text-lg font-semibold text-zinc-50 group-hover:text-indigo-400 transition-colors leading-snug">
          {title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed">{excerpt}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
