import { createBrowserRouter } from "react-router-dom";
import Layout from "/components/Layout";
import AboutMe from "/src/pages/AboutMe/view";
import Contact from "/src/pages/Contact";
import Home from "/src/pages/Home";
import NotFound from "/src/pages/NotFound";
import Projects from "/src/pages/Projects/view";
import References from "/src/pages/References/view";
import Services from "/src/pages/Services/view";

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
