import ServiceItem from "./components/ServiceItem";
import useServicesController from "./controller";

export default function ServicesView() {
  const services = useServicesController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold text-text-primary">Services</h1>
        <p className="max-w-xl text-text-muted">
          A short overview of what I can do for you and your project.
        </p>
      </div>
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