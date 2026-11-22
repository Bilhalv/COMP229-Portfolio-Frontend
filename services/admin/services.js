let services = [
  {
    id: "1",
    title: "Web Development",
    description:
      "Responsive, accessible interfaces built with React.js and Next.js, styled with TailwindCSS and backed by well-structured, reusable components.",
  },
  {
    id: "2",
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps using React Native and Expo, delivering smooth, native-feeling experiences from a single codebase.",
  },
];

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 150));
}

export async function getAdminServices() {
  return delay([...services]);
}

export async function getAdminServiceById(id) {
  return delay(services.find((service) => service.id === id) || null);
}

export async function createAdminService(data) {
  const service = { ...data, id: crypto.randomUUID() };
  services = [service, ...services];
  return delay(service);
}

export async function updateAdminService(id, data) {
  services = services.map((service) =>
    service.id === id ? { ...service, ...data, id } : service,
  );
  return delay(services.find((service) => service.id === id) || null);
}

export async function deleteAdminService(id) {
  services = services.filter((service) => service.id !== id);
  return delay(true);
}
