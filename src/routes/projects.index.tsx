import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "AI Projects Directory — Sayan Technologies" },
      { name: "description", content: "Browse the full directory of AI projects: SEO audits, design systems, style guides, lead scoring, and customer support automation." },
      { property: "og:title", content: "AI Projects Directory — Sayan Technologies" },
      { property: "og:description", content: "Browse the full directory of AI projects built for real business problems." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section className="container-page py-20">
      <header className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">Project Directory</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Production-minded AI projects, each scoped to a specific job. Open the source on GitHub
          or read how each one works.
        </p>
      </header>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
