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
        { key: "title", label: "Title" },
        { key: "completion", label: "Completion" },
        {
          key: "description",
          label: "Description",
          render: (row) =>
            row.description?.length > 80
              ? `${row.description.slice(0, 80)}...`
              : row.description,
        },
      ]}
    />
  );
}
