import ContactInfo from "./components/ContactInfo";
import MessageForm from "./components/MessageForm";
import useContactController from "./controller";
import PageHeader from "/components/PageHeader";
import ErrorNotice from "/components/ErrorNotice";

export default function ContactView() {
  const { info, error } = useContactController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title="Contact"
        subtitle="Have a project in mind or just want to say hello? Reach out below."
      />
      {error ? (
        <ErrorNotice message="Could not load the contact information." />
      ) : info ? (
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          <ContactInfo info={info} />
          <MessageForm />
        </div>
      ) : (
        <p className="text-text-muted">Loading contact info...</p>
      )}
    </div>
  );
}