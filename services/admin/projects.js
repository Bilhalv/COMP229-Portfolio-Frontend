let projects = [
  {
    id: "1",
    name: "Minha Feira",
    role: "Frontend",
    completionDate: "2025-11-01",
    stack: ["React Native", "Expo", "NativeWind", "TypeScript"],
    image: "/projects/minha-feira.png",
    repoUrl:
      "https://gitlab.com/senac-projetos-de-desenvolvimento/2025-debora-pedro-diego/minha-feira-frontend",
    hasEnglishDescription: false,
    description:
      "A mobile app for discovering and managing street markets (feiras), with login, favorites, reviews, an interactive map, and paginated search.",
  },
  {
    id: "2",
    name: "Tormenta 20 Sheet Builder",
    role: "Frontend",
    completionDate: "2024-01-01",
    stack: ["React", "Chakra UI", "TypeScript", "Vercel Postgres"],
    image: "/projects/t20-sheet.png",
    repoUrl: "https://github.com/Bilhalv/T20-Sheet",
    hasEnglishDescription: true,
    description:
      "Interactive character sheet builder for the Brazilian TTRPG Tormenta 20 - assemble stats, skills, and inventory, then export to PDF.",
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
