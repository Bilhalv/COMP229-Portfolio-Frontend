import ServiceItem from "./components/ServiceItem";
import useServicesController from "./controller";
import PageHeader from "/components/PageHeader";

export default function ServicesView() {
  const services = useServicesController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title="Services"
        subtitle="A short overview of what I can do for you and your project."
      />
      {services ? (
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
      ) : (
        <p className="text-text-muted">Loading services...</p>
      )}
    </div>
  );
}