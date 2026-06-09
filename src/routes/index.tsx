import { createFileRoute, Link } from "@tanstack/react-router";
import { agents } from "@/lib/agents";
import { AgentCard } from "@/components/agent-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sayan Technologies — AI Agents Built for Real Business Problems" },
      { name: "description", content: "Practical AI automation for SEO, design systems, lead qualification, and customer support. Built by a Product Manager who ships." },
      { property: "og:title", content: "Sayan Technologies — AI Agents Built for Real Business Problems" },
      { property: "og:description", content: "Practical AI automation for SEO, design systems, lead qualification, and customer support." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const featured = agents.slice(0, 3);
  return (
    <>
      <section className="container-page pt-20 pb-24 sm:pt-28">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Product Manager · AI Systems & Automation
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] sm:text-6xl">
            AI Agents Built for <span className="gradient-text">Real Business Problems</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Practical automation for SEO, design systems, lead qualification, and customer support.
            No buzzwords. No demos that fall apart in production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Explore the Agents
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="surface-card grid gap-6 p-8 sm:grid-cols-3">
          {[
            { step: "01", title: "Scoped", desc: "Define the real problem, the user, and the measurable outcome before writing a prompt." },
            { step: "02", title: "Built", desc: "Compose models, retrieval, tools, and guardrails into a system that survives edge cases." },
            { step: "03", title: "Deployed", desc: "Ship to production with monitoring, eval suites, and a clear ownership model." },
          ].map((s) => (
            <div key={s.step}>
              <div className="font-display text-sm font-semibold text-primary">{s.step}</div>
              <div className="mt-2 font-display text-lg font-semibold">{s.title}</div>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Featured Agents</h2>
            <p className="mt-2 text-muted-foreground">A few systems shipped recently.</p>
          </div>
          <Link to="/agents" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => <AgentCard key={a.slug} agent={a} />)}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/agents"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Explore the Agents →
          </Link>
        </div>
      </section>
    </>
  );
}
