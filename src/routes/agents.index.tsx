import { createFileRoute } from "@tanstack/react-router";
import { agents } from "@/lib/agents";
import { AgentCard } from "@/components/agent-card";

export const Route = createFileRoute("/agents/")({
  head: () => ({
    meta: [
      { title: "AI Agents Directory — Sayan Technologies" },
      { name: "description", content: "Browse the full directory of AI agents: SEO audits, design systems, style guides, lead scoring, and customer support automation." },
      { property: "og:title", content: "AI Agents Directory — Sayan Technologies" },
      { property: "og:description", content: "Browse the full directory of AI agents built for real business problems." },
      { property: "og:url", content: "/agents" },
    ],
    links: [{ rel: "canonical", href: "/agents" }],
  }),
  component: AgentsIndex,
});

function AgentsIndex() {
  return (
    <section className="container-page py-20">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Agent Directory</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Production-minded AI agents, each scoped to a specific job. Open the source on GitHub
          or read how each one works.
        </p>
      </header>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a) => <AgentCard key={a.slug} agent={a} />)}
      </div>
    </section>
  );
}
