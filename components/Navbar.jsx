import { NavLink } from "react-router-dom";
import {
  ContactRound,
  FileUser,
  HardHat,
  Home as HomeIcon,
  MessageSquareQuote,
  SquareKanban,
} from "lucide-react";
import { NavBarItems } from "../src/utils/consts";

const NAV_ICONS = {
  Home: HomeIcon,
  About: FileUser,
  Projects: SquareKanban,
  Services: HardHat,
  Contact: ContactRound,
  References: MessageSquareQuote,
};

export default function Navbar() {
  return (
    <div className="flex w-full gap-1 justify-center select-none">
      <NavLink key={"Home"} to={"/"} className={"absolute left-3 top-2 hover:scale-110 transition-all"}>
        <img src="/favicon.svg" alt="logo" className="size-9 my-auto" />
      </NavLink>
      {NavBarItems.map((item) => {
        const Icon = NAV_ICONS[item.label];
        return (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `text-text-primary px-3 py-2 border-b transition-all group w-20 flex justify-center ${
                isActive
                  ? "border-text-primary active"
                  : "border-b-transparent hover:border-text-primary"
              }`
            }
          >
            <Icon
              className={`group-hover:opacity-100 group-[.active]:opacity-100 active:opacity-100 opacity-0 transition-all absolute`}
            />
            <p className="group-hover:opacity-0 transition-all group-[.active]:opacity-0">
              {item.label}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
}
