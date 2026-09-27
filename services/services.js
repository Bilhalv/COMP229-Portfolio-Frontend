import { Globe, Palette, Server, Smartphone } from "lucide-react";

export async function getServices() {
  return [
    {
      title: "Web Development",
      icon: Globe,
      description:
        "Responsive, accessible interfaces built with React.js and Next.js, styled with TailwindCSS and backed by well-structured, reusable components.",
      tags: ["React.js", "Next.js", "TailwindCSS", "TypeScript"],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description:
        "Cross-platform mobile apps using React Native and Expo, delivering smooth, native-feeling experiences from a single codebase.",
      tags: ["React Native", "Expo", "JavaScript", "TypeScript"],
    },
    {
      title: "UI/UX Implementation",
      icon: Palette,
      description:
        "Translation of complex Figma designs into clean, modular, and production-ready UI components that match the original vision pixel by pixel.",
      tags: ["Figma", "HTML5", "CSS3", "Component Architecture"],
    },
    {
      title: "API Integration & General Programming",
      icon: Server,
      description:
        "RESTful API integration, maintainable code with Jest testing, and general programming skills for algorithms and a variety of problem domains.",
      tags: ["REST API", "MVC", "Jest", "Python"],
    },
  ];
}