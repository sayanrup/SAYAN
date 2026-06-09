import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { agents, getAgent, type Agent } from "@/lib/agents";

export const Route = createFileRoute("/agents/$slug")({
  loader: ({ params }) => {
    const agent = getAgent(params.slug);
    if (!agent) throw notFound();
    return { agent };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.agent;
    const title = a ? `${a.name} — Sayan Technologies` : "Agent — Sayan Technologies";
    const desc = a?.shortDescription ?? "AI agent built for a real business problem.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: a ? `/agents/${a.slug}` : "/agents" },
      ],
      links: a ? [{ rel: "canonical", href: `/agents/${a.slug}` }] : [],
    };
  },
  component: AgentDetail,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl font-semibold">Agent not found</h1>
      <Link to="/agents" className="mt-4 inline-block text-primary hover:underline">
        Back to all agents
      </Link>
    </div>
  ),
});

function AgentDetail() {
  const { agent } = Route.useLoaderData() as { agent: Agent };
  return (
    <article className="container-page py-16">
      <Link to="/agents" className="text-sm text-muted-foreground hover:text-foreground">
        ← All agents
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap gap-1.5">
          {agent.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">{agent.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{agent.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {agent.liveUrls?.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              {l.label} ↗
            </a>
          ))}
          <a
            href={agent.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-5 py-2.5 text-sm font-semibold hover:bg-secondary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg>
            View on GitHub
          </a>
        </div>
      </header>

      <section className="mt-14 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-display text-xl font-semibold">The problem</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">{agent.problem}</p>

          <h2 className="mt-12 font-display text-xl font-semibold">How it works</h2>
          <ol className="mt-4 grid gap-4 sm:grid-cols-3">
            {agent.howItWorks.map((step, i) => (
              <li key={step.title} className="surface-card p-5">
                <div className="font-display text-sm font-semibold text-primary">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-1 font-display text-base font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-12 font-display text-xl font-semibold">Architecture</h2>
          <div className="surface-card mt-3 flex h-48 items-center justify-center text-sm text-muted-foreground">
            Diagram coming soon
          </div>
        </div>

        <aside className="space-y-8">
          <div className="surface-card p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Tech stack
            </h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {agent.techStack.map((t) => <li key={t} className="tag-chip">{t}</li>)}
            </ul>
          </div>
          <div className="surface-card p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Other agents
            </h3>
            <ul className="mt-3 space-y-2">
              {agents.filter((a) => a.slug !== agent.slug).slice(0, 4).map((a) => (
                <li key={a.slug}>
                  <Link
                    to="/agents/$slug"
                    params={{ slug: a.slug }}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {a.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </article>
  );
}
