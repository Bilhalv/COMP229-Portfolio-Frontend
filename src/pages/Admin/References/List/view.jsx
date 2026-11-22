import AdminListPage from "../../components/AdminListPage";
import useAdminReferencesController from "./controller";

export default function AdminReferencesListView() {
  const { references, error, handleDelete } = useAdminReferencesController();
  return (
    <AdminListPage
      title="References"
      subtitle="List, add, edit, and delete references."
      createTo="/admin/references/new"
      loading={!references && !error}
      error={error}
      rows={references || []}
      getRowId={(row) => row.id}
      getEditTo={(row) => `/admin/references/${row.id}/edit`}
      onDelete={handleDelete}
      columns={[
        { key: "name", label: "Name" },
        { key: "position", label: "Position" },
        { key: "company", label: "Company" },
        { key: "testimonial", label: "Testimonial", render: (row) => row.testimonial?.length > 80 ? `${row.testimonial.slice(0, 80)}...` : row.testimonial },
      ]}
    />
  );
}
