import AdminListPage from "../../components/AdminListPage";
import useAdminServicesController from "./controller";

export default function AdminServicesListView() {
  const { services, error, handleDelete } = useAdminServicesController();
  return (
    <AdminListPage
      title="Services"
      subtitle="List, add, edit, and delete services."
      createTo="/admin/services/new"
      loading={!services && !error}
      error={error}
      rows={services || []}
      getRowId={(row) => row.id}
      getEditTo={(row) => `/admin/services/${row.id}/edit`}
      onDelete={handleDelete}
      columns={[
        { key: "title", label: "Title" },
        { key: "description", label: "Description", render: (row) => row.description?.length > 100 ? `${row.description.slice(0, 100)}...` : row.description },
      ]}
    />
  );
}
