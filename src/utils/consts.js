import {
  ContactRound,
  FileUser,
  HardHat,
  Home,
  MessageSquareQuote,
  SquareKanban,
} from "lucide-react";

export const NavBarItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: FileUser },
  { label: "Projects", path: "/projects", icon: SquareKanban },
  { label: "Services", path: "/services", icon: HardHat },
  { label: "Contact", path: "/contact", icon: ContactRound },
  { label: "References", path: "/references", icon: MessageSquareQuote },
];
