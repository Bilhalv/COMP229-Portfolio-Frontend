let references = [
  {
    id: "1",
    name: "Ana Vargas",
    testimonial:
      "Pedro consistently delivered thoughtful, well-structured projects and always went the extra mile to polish the user experience.",
    position: "Girlfriend",
    company: "Personal Life",
  },
  {
    id: "2",
    name: "Débora Carvalho",
    testimonial:
      "A great colleague, always willing to help and committed to delivering excellent quality work.",
    position: "Student",
    company: "Senac",
  },
];

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 150));
}

function response(data, message = "Success") {
  return { success: true, message, data };
}

export async function getAdminReferences() {
  return delay(response([...references], "References list retrieved successfully."));
}

export async function getAdminReferenceById(id) {
  const reference = references.find((item) => item.id === id) || null;
  return delay(response(reference, "Reference retrieved successfully."));
}

export async function createAdminReference(data) {
  const reference = { ...data, id: crypto.randomUUID() };
  references = [reference, ...references];
  return delay(response(reference, "Reference added successfully."));
}

export async function updateAdminReference(id, data) {
  references = references.map((reference) =>
    reference.id === id ? { ...reference, ...data, id } : reference,
  );
  const reference = references.find((item) => item.id === id) || null;
  return delay(response(reference, "Reference updated successfully."));
}

export async function deleteAdminReference(id) {
  references = references.filter((reference) => reference.id !== id);
  return delay({ success: true, message: "Reference deleted successfully." });
}
