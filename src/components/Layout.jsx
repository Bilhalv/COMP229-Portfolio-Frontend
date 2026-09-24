import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-text-primary">
      <Navbar />
      <main className="flex flex-1 flex-col items-center">
        <Outlet />
      </main>
    </div>
  );
}