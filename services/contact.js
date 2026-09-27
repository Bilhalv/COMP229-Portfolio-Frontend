import { Briefcase, CodeXml, Mail } from "lucide-react";

export async function getContactInfo() {
  return {
    location: "Toronto, ON, Canada",
    phone: "+1 (437) 441-0349",
    email: "pedrobilhalvaoliveira@gmail.com",
    socials: [
      { label: "GitHub", url: "https://github.com/Bilhalv", icon: CodeXml },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/pedrobilhalva/",
        icon: Briefcase,
      },
      {
        label: "Email",
        url: "mailto:pedrobilhalvaoliveira@gmail.com",
        icon: Mail,
      },
    ],
  };
}