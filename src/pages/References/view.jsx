import TestimonialCard from "./components/TestimonialCard";
import useReferencesController from "./controller";

export default function ReferencesView() {
  const references = useReferencesController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <h1 className="text-4xl font-bold text-text-primary">References</h1>
      {references ? (
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {references.map((reference) => (
            <TestimonialCard key={reference.name} reference={reference} />
          ))}
        </div>
      ) : (
        <p className="text-text-muted">Loading references...</p>
      )}
    </div>
  );
}