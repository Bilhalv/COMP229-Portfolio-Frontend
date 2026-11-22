import { createBrowserRouter } from "react-router-dom";
import Layout from "/components/Layout";
import AboutMe from "/src/pages/AboutMe/view";
import Contact from "/src/pages/Contact/view";
import Home from "/src/pages/Home";
import NotFound from "/src/pages/NotFound";
import Projects from "/src/pages/Projects/view";
import References from "/src/pages/References/view";
import Services from "/src/pages/Services/view";
import AdminDashboard from "/src/pages/Admin/Dashboard";
import AdminUsersList from "/src/pages/Admin/Users/List";
import AdminUserForm from "/src/pages/Admin/Users/Form";
import AdminProjectsList from "/src/pages/Admin/Projects/List";
import AdminProjectForm from "/src/pages/Admin/Projects/Form";
import AdminServicesList from "/src/pages/Admin/Services/List";
import AdminServiceForm from "/src/pages/Admin/Services/Form";
import AdminReferencesList from "/src/pages/Admin/References/List";
import AdminReferenceForm from "/src/pages/Admin/References/Form";

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

      { path: "/admin", element: <AdminDashboard /> },
      { path: "/admin/users", element: <AdminUsersList /> },
      { path: "/admin/users/new", element: <AdminUserForm /> },
      { path: "/admin/users/:id/edit", element: <AdminUserForm /> },

      { path: "/admin/projects", element: <AdminProjectsList /> },
      { path: "/admin/projects/new", element: <AdminProjectForm /> },
      { path: "/admin/projects/:id/edit", element: <AdminProjectForm /> },

      { path: "/admin/services", element: <AdminServicesList /> },
      { path: "/admin/services/new", element: <AdminServiceForm /> },
      { path: "/admin/services/:id/edit", element: <AdminServiceForm /> },

      { path: "/admin/references", element: <AdminReferencesList /> },
      { path: "/admin/references/new", element: <AdminReferenceForm /> },
      { path: "/admin/references/:id/edit", element: <AdminReferenceForm /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
