import { ArrowUpRight, FolderGit2 } from "lucide-react";

export default function ProjectItem({ data }) {
  return (
    <article className="group flex w-125 gap-4 rounded-3xl border border-border bg-surface p-3 transition-all duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/10">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="size-40 object-cover transition-transform duration-300 group-hover:scale-105"
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-text-primary">
            <FolderGit2 className="size-5 text-accent-soft" />
            {data.name}
          </h2>
          <ArrowUpRight className="size-5 shrink-0 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>
        <p className="line-clamp-5 text-sm text-text-secondary">
          {data.description}
        </p>
      </div>
    </article>
  );
}