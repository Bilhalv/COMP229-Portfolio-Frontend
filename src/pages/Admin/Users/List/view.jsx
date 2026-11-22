import AdminListPage from "../../components/AdminListPage";
import useAdminUsersController from "./controller";

export default function AdminUsersListView() {
  const { users, error, handleDelete } = useAdminUsersController();

  return (
    <AdminListPage
      title="Users"
      subtitle="List, add, edit, and delete users."
      createTo="/admin/users/new"
      loading={!users && !error}
      error={error}
      rows={users || []}
      getRowId={(row) => row.id}
      getEditTo={(row) => `/admin/users/${row.id}/edit`}
      onDelete={handleDelete}
      columns={[
        {
          key: "name",
          label: "Name",
          render: (row) => `${row.firstname} ${row.lastname}`,
        },
        { key: "email", label: "Email" },
        { key: "created", label: "Created" },
        { key: "updated", label: "Updated" },
      ]}
    />
  );
}
