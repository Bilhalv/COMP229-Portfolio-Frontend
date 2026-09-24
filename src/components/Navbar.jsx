import { NavLink } from "react-router-dom";
import { NavBarItems } from "../utils/consts";

export default function Navbar() {
  return (
    <div className="flex w-full gap-1 justify-center select-none">
      <NavLink key={"Home"} to={"/"} className={"absolute left-3 top-2 hover:scale-110 transition-all"}>
        <img src="/favicon.svg" alt="logo" className="size-9 my-auto" />
      </NavLink>
      {NavBarItems.map((item) => (
        <NavLink
          viewTransition
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
          <item.icon
            className={`group-hover:opacity-100 group-[.active]:opacity-100 active:opacity-100 opacity-0 transition-all absolute`}
          />
          <p className="group-hover:opacity-0 transition-all group-[.active]:opacity-0">
            {item.label}
          </p>
        </NavLink>
      ))}
    </div>
  );
}
