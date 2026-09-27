import { ExternalLink, TriangleAlert } from "lucide-react";
import Chip from "/components/Chip.jsx";

export default function ProjectItem({ data }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/10">
      <div className="overflow-hidden">
        <img
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold text-text-primary">
            {data.name}
          </h2>
          <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs text-accent-soft">
            {data.completionDate}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-text-secondary">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {data.stack.map((skill) => (
            <Chip key={skill} filled={false}>
              {skill}
            </Chip>
          ))}
        </div>
        <div className="mt-auto flex flex-col items-start gap-1 border-t border-border pt-3">
          <span className="text-xs text-text-muted">Role: {data.role}</span>
          <a
            href={data.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft transition-colors hover:text-accent"
          >
            <ExternalLink className="size-4" />
            Repository
            {!data.hasEnglishDescription && (
              <span
                className="ml-1 flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-[11px] font-medium text-amber-300"
                title="This repository does not have an English description"
              >
                <TriangleAlert className="size-3" />
                no English description
              </span>
            )}
          </a>
        </div>
      </div>
    </article>
  );
}