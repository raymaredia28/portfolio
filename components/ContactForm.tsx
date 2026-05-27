"use client";

import { useState } from "react";

// TODO: Wire up to a real email service (Resend, Formspree, etc.)
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // TODO: Replace with real API call
    setTimeout(() => setStatus("done"), 1200);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-300" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-zinc-300" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-300" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What's this about?"
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-300" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me what's on your mind..."
          className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-sm text-zinc-50 placeholder-zinc-600 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
        />
      </div>

      {status === "done" ? (
        <div className="rounded-xl bg-indigo-500/10 border border-indigo-500/30 px-5 py-4 text-sm text-indigo-300 text-center">
          ✓ Message sent! I&apos;ll get back to you soon.
        </div>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400 disabled:opacity-60 transition-colors"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      )}
    </form>
  );
}
