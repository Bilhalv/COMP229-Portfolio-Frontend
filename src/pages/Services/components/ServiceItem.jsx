import Chip from "/components/Chip.jsx";

export default function ServiceItem({ service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/10">
      <span className="flex size-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 transition-colors duration-300 group-hover:bg-accent group-hover:border-accent">
        <Icon className="size-7 text-accent-soft transition-colors duration-300 group-hover:text-background" />
      </span>
      <h2 className="text-lg font-semibold text-text-primary">
        {service.title}
      </h2>
      <p className="text-sm leading-relaxed text-text-secondary">
        {service.description}
      </p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {service.tags.map((skill) => (
          <Chip key={skill} filled={false}>
            {skill}
          </Chip>
        ))}
      </div>
    </article>
  );
}