import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sayan Technologies" },
      { name: "description", content: "Get in touch about AI projects, product consulting, or automation engagements." },
      { property: "og:title", content: "Contact — Sayan Technologies" },
      { property: "og:description", content: "Get in touch about AI projects, product consulting, or automation engagements." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="container-page py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Let's talk.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a problem an AI project might solve? Want to discuss a build? Drop a note.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="https://linkedin.com/in/sayan-samanta-b92792131" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-lg border border-border bg-surface/40 p-3 hover:bg-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h4v16H4zM6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 8h4v2a4 4 0 0 1 7 3v7h-4v-6a2 2 0 0 0-4 0v6h-4z" /></svg>
            </a>
            <a href="https://github.com/sayanrup" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-lg border border-border bg-surface/40 p-3 hover:bg-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg>
            </a>
          </div>
          <div className="surface-card mt-10 p-6">
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Book a call
            </h2>
            <div className="mt-3 flex h-40 items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              Calendly embed
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="surface-card space-y-5 p-8"
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="font-display text-xl font-semibold">Thanks — message received.</div>
              <p className="mt-2 text-sm text-muted-foreground">I'll get back to you within 48 hours.</p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input id="name" required className="mt-1.5 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" required className="mt-1.5 w-full rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" required rows={5} className="mt-1.5 w-full resize-none rounded-md border border-border bg-background/60 px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <button type="submit" className="w-full rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
