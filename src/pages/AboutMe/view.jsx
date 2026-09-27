import { Download } from "lucide-react";
import PageHeader from "/components/PageHeader";
import TechLogos from "/components/TechLogos.jsx";
import Button from "/components/Button.jsx";

export default function AboutView() {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader title="About Me" />
      <div className="flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl border border-border bg-surface p-8 text-center group">

      <div className="overflow-hidden rounded-full border border-accent">
        <img
          src="./me.jpg"
          alt="Pedro Bilhalva Oliveira"
          className="size-44 object-cover group-hover:scale-120 transition-transform"
          />
          </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold text-text-primary">
            Pedro Bilhalva Oliveira
          </h2>
          <p className="text-sm text-accent-soft">
            Available for collaborations
          </p>
        </div>
        <p className="max-w-md text-text-secondary">
          Frontend Developer and Software Engineering student at Centennial
          College, specializing in React and Next.js. I love turning Figma
          designs into clean, accessible, and reusable components - writing
          maintainable, tested code that ships features users actually enjoy.
        </p>
        <Button href="/resume.pdf" target="_blank">
          <Download className="size-4" />
          Download Resume (PDF)
        </Button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
          Tech I use
        </h2>
        <TechLogos />
      </div>
    </div>
  );
}