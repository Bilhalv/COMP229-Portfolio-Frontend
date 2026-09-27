import { Briefcase, CodeXml, Mail } from "lucide-react";

export const contactEmail = "pedrobilhalvaoliveira@gmail.com";

export const contactSocials = [
  { label: "GitHub", url: "https://github.com/Bilhalv", icon: CodeXml },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/pedrobilhalva/",
    icon: Briefcase,
  },
  {
    label: "Email",
    url: `mailto:${contactEmail}`,
    icon: Mail,
  },
];

export async function getContactInfo() {
  return {
    location: "Toronto, ON, Canada",
    phone: "+1 (437) 441-0349",
    email: contactEmail,
    socials: contactSocials,
  };
}