import TestimonialCard from "./components/TestimonialCard";
import useReferencesController from "./controller";
import PageHeader from "/components/PageHeader";
import ErrorNotice from "/components/ErrorNotice";

export default function ReferencesView() {
  const { references, error } = useReferencesController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title="References"
        subtitle="A few words from people I have worked with."
      />
      {error ? (
        <ErrorNotice message="Could not load the references." />
      ) : references ? (
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