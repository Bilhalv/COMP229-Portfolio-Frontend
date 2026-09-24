import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import References from "../pages/References";
import Services from "../pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/references", element: <References /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;