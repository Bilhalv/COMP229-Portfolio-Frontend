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

function response(data, message = "Success") {
  return { success: true, message, data };
}

export async function getAdminServices() {
  return delay(response([...services], "Services list retrieved successfully."));
}

export async function getAdminServiceById(id) {
  const service = services.find((item) => item.id === id) || null;
  return delay(response(service, "Service retrieved successfully."));
}

export async function createAdminService(data) {
  const service = { ...data, id: crypto.randomUUID() };
  services = [service, ...services];
  return delay(response(service, "Service added successfully."));
}

export async function updateAdminService(id, data) {
  services = services.map((service) =>
    service.id === id ? { ...service, ...data, id } : service,
  );
  const service = services.find((item) => item.id === id) || null;
  return delay(response(service, "Service updated successfully."));
}

export async function deleteAdminService(id) {
  services = services.filter((service) => service.id !== id);
  return delay({ success: true, message: "Service deleted successfully." });
}
