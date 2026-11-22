import AdminListPage from "../../components/AdminListPage";
import useAdminProjectsController from "./controller";

export default function AdminProjectsListView() {
  const { projects, error, handleDelete } = useAdminProjectsController();

  return (
    <AdminListPage
      title="Projects"
      subtitle="List, add, edit, and delete projects."
      createTo="/admin/projects/new"
      loading={!projects && !error}
      error={error}
      rows={projects || []}
      getRowId={(row) => row.id}
      getEditTo={(row) => `/admin/projects/${row.id}/edit`}
      onDelete={handleDelete}
      columns={[
        { key: "name", label: "Name" },
        { key: "role", label: "Role" },
        {
          key: "completionDate",
          label: "Completion",
          render: (row) => (row.completionDate ? String(row.completionDate).slice(0, 10) : "-"),
        },
        {
          key: "stack",
          label: "Stack",
          render: (row) => (Array.isArray(row.stack) ? row.stack.join(", ") : "-"),
        },
      ]}
    />
  );
}
