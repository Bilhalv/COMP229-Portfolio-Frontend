import { Download } from "lucide-react";

export default function AboutView() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-16">
      <div className="flex w-full max-w-xl flex-col items-center gap-6 rounded-3xl border border-border bg-surface p-8 text-center">
        <img
          src={
            "./me.jpg"
          }
          alt={"Pedro Bilhalva Oliveira"}
          className="size-44 rounded-full border border-accent object-cover"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-text-primary">
            Pedro Bilhalva Oliveira
          </h1>
          <p className="text-sm text-accent-soft">
            Available for collaborations
          </p>
        </div>
        <p className="max-w-md text-text-secondary">
          Frontend Developer and Computer Programming student at Centennial
          College, specializing in React and Next.js. I love turning Figma
          designs into clean, accessible, and reusable components - writing
          maintainable, tested code that ships features users actually enjoy.
        </p>
        <a
          href={"/resume.pdf"}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-2.5 font-semibold text-text-primary transition-colors hover:bg-accent-hover"
        >
          <Download className="size-4" />
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}
