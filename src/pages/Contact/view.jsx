import ContactInfo from "./components/ContactInfo";
import MessageForm from "./components/MessageForm";
import PageHeader from "/components/PageHeader";

const contactInfo = {
  location: "Toronto, ON, Canada",
  phone: "+1 (437) 441-0349",
  email: "pedrobilhalvaoliveira@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/Bilhalv" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/pedro-bilhalva/",
    },
    { label: "Email", url: "mailto:pedrobilhalvaoliveira@gmail.com" },
  ],
};

export default function ContactView() {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title="Contact"
        subtitle="Have a project in mind or just want to say hello? Reach out below."
      />
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        <ContactInfo info={contactInfo} />
        <MessageForm />
      </div>
    </div>
  );
}
