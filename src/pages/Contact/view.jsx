import ContactInfo from "./components/ContactInfo";
import MessageForm from "./components/MessageForm";
import useContactController from "./controller";

export default function ContactView() {
  const info = useContactController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold text-text-primary">Contact</h1>
        <p className="max-w-xl text-text-muted">
          Have a project in mind or just want to say hello? Reach out below.
        </p>
      </div>
      {info ? (
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