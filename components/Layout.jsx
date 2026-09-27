import { Outlet } from "react-router-dom";
import NavBar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="flex min-h-svh flex-col bg-background text-text-primary">
      <NavBar />
      <main className="flex flex-1 flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}