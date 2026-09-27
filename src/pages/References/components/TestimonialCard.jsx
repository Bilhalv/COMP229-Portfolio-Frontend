import { Quote } from "lucide-react";

export default function TestimonialCard({ reference }) {
  return (
    <article className="group flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/10">
      <Quote className="size-8 text-accent-soft transition-transform duration-300 group-hover:scale-110" />
      <p className="line-clamp-5 text-text-secondary">{reference.testimonial}</p>
      <footer className="mt-auto flex flex-col gap-0.5">
        <p className="font-semibold text-text-primary">{reference.name}</p>
        <p className="text-sm text-accent-soft">
          {reference.position} · {reference.company}
        </p>
      </footer>
    </article>
  );
}