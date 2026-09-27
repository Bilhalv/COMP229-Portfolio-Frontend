import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

// Long testimonials are clamped to 5 lines and expanded only via the toggle, keeping the card grid tidy while the full text stays reachable.
const EXPAND_THRESHOLD = 180;

export default function TestimonialCard({ reference }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = reference.testimonial.length > EXPAND_THRESHOLD;

  return (
    <article className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent hover:bg-surface-hover hover:shadow-lg hover:shadow-accent/10">
      <Quote className="size-8 text-accent-soft transition-transform duration-300 group-hover:scale-110" />
      <p
        className={
          (isLong && !expanded ? "line-clamp-5 " : "") + "text-text-secondary"
        }
      >
        {reference.testimonial}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="inline-flex w-fit items-center gap-1 text-sm font-semibold text-accent-soft transition-colors hover:text-accent"
        >
          {expanded ? (
            <>
              <ChevronUp className="size-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="size-4" />
              Read more
            </>
          )}
        </button>
      )}
      <footer className="mt-auto flex flex-col gap-0.5">
        <p className="font-semibold text-text-primary">{reference.name}</p>
        <p className="text-sm text-accent-soft">
          {reference.position} · {reference.company}
        </p>
      </footer>
    </article>
  );
}