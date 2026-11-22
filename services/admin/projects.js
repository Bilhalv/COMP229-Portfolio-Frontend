let projects = [
  {
    id: "1",
    title: "Minha Feira",
    completion: "2025-11-01",
    description:
      "A mobile app for discovering and managing street markets (feiras), with login, favorites, reviews, an interactive map, and paginated search.",
    image: "/projects/minha-feira.png",
  },
  {
    id: "2",
    title: "Tormenta 20 Sheet Builder",
    completion: "2024-01-01",
    description:
      "Interactive character sheet builder for the Brazilian TTRPG Tormenta 20 - assemble stats, skills, and inventory, then export to PDF.",
    image: "/projects/t20-sheet.png",
  },
];

function delay(value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), 150));
}

function response(data, message = "Success") {
  return { success: true, message, data };
}

export async function getAdminProjects() {
  return delay(response([...projects], "Projects list retrieved successfully."));
}

export async function getAdminProjectById(id) {
  const project = projects.find((item) => item.id === id) || null;
  return delay(response(project, "Project retrieved successfully."));
}

export async function createAdminProject(data) {
  const project = { ...data, id: crypto.randomUUID() };
  projects = [project, ...projects];
  return delay(response(project, "Project added successfully."));
}

export async function updateAdminProject(id, data) {
  projects = projects.map((project) =>
    project.id === id ? { ...project, ...data, id } : project,
  );
  const project = projects.find((item) => item.id === id) || null;
  return delay(response(project, "Project updated successfully."));
}

export async function deleteAdminProject(id) {
  projects = projects.filter((project) => project.id !== id);
  return delay({ success: true, message: "Project deleted successfully." });
}
