import type * as React from "react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

const icons: Record<string, React.ReactNode> = {
  search: <path d="M11 19a8 8 0 1 1 5.3-14 8 8 0 0 1-5.3 14Zm10 2-4.3-4.3" />,
  palette: <path d="M12 22a10 10 0 1 1 10-10c0 2-2 3-4 3h-2a2 2 0 0 0-2 2 4 4 0 0 1-2 5Zm-5-10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />,
  book: <path d="M4 4h12a4 4 0 0 1 4 4v12a2 2 0 0 0-2-2H4Zm0 0v14a2 2 0 0 0 2 2h12" />,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
  message: <path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1.4 3.5A8 8 0 0 1 21 12Z" />,
  gamepad: (
    <>
      <line x1="6" x2="10" y1="11" y2="11" />
      <line x1="8" x2="8" y1="9" y2="13" />
      <line x1="15" x2="15.01" y1="12" y2="12" />
      <line x1="18" x2="18.01" y1="10" y2="10" />
      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
    </>
  ),
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="surface-card group flex flex-col gap-4 p-6 transition-all hover:border-primary/40 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icons[project.icon]}
          </svg>
        </span>
        <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
          {project.liveUrls?.[0] && (
            <a
              href={project.liveUrls[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-primary/10"
              aria-label={`Launch ${project.name}`}
            >
              Launch ↗
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary"
            aria-label={`${project.name} on GitHub`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" /></svg>
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-display text-lg font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.shortDescription}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
      </div>
      <div className="mt-auto pt-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        View details →
      </div>
    </Link>
  );
}
