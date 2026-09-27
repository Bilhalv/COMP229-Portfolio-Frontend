// Featured projects shown on the Projects page
export async function getProjects() {
  return [
    {
      name: "Minha Feira",
      role: "Frontend",
      completionDate: "Nov 2025",
      stack: ["React Native", "Expo", "NativeWind", "TypeScript"],
      image: "/projects/minha-feira.png",
      repoUrl: "https://gitlab.com/senac-projetos-de-desenvolvimento/2025-debora-pedro-diego/minha-feira-frontend",
      hasEnglishDescription: false,
      description:
        "A mobile app for discovering and managing street markets (feiras), with login, favorites, reviews, an interactive map, and paginated search. Built with Expo for the Senac 2025 team project, where I acted as frontend developer and drove it to a stable build.",
    },
    {
      name: "Tormenta 20 Sheet Builder",
      role: "Frontend",
      completionDate: "Jan 2024",
      stack: ["React", "Chakra UI", "TypeScript", "Vercel Postgres"],
      image: "/projects/t20-sheet.jpg",
      repoUrl: "https://github.com/Bilhalv/T20-Sheet",
      hasEnglishDescription: true,
      description:
        "Interactive character sheet builder for the Brazilian TTRPG Tormenta 20 - assemble stats, skills, and inventory, then export to PDF. A cross-discipline project (DB, web, OOP, mobile) built with React, where I developed the frontend.",
    },
    {
      name: "Rick and Morty API Test",
      role: "Main Developer",
      completionDate: "Sep 2024",
      stack: ["React Native", "Expo", "REST API"],
      image: "/projects/rick-morty.png",
      repoUrl: "https://github.com/Bilhalv/Rick-and-morty-API-Test",
      hasEnglishDescription: true,
      description:
        "A compact Expo app that consumes the Rick and Morty API, with a searchable character list, add-to-list, and character detail pages. A focused exercise in React Native navigation and API integration.",
    },
  ];
}