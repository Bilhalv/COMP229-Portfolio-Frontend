import { Pencil, Plus, Trash2 } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";
import ErrorNotice from "/components/ErrorNotice";

export default function AdminListPage({
  title,
  subtitle,
  createTo,
  columns,
  rows,
  loading,
  error,
  getRowId,
  getEditTo,
  onDelete,
}) {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <div className="flex w-full max-w-6xl flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageHeader title={title} subtitle={subtitle} />
        <Button to={createTo} size="sm">
          <Plus className="size-4" />
          Add New
        </Button>
      </div>

      {error ? (
        <ErrorNotice message={error.message || `Could not load ${title.toLower()}.`} />
      ) : loading ? (
        <p className="text-text-muted">Loading...</p>
      ) : rows.length === 0 ? (
        <div className="w-full max-w-6xl rounded-3xl border border-border bg-surface px-6 py-10 text-center text-text-muted">
          No records found.
        </div>
      ) : (
        <div className="w-full max-w-6xl overflow-x-auto rounded-3xl border border-border bg-surface">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border bg-background/40 text-text-secondary">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="px-4 py-3 font-semibold">
                    {column.label}
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const id = getRowId(row);
                return (
                  <tr key={id} className="border-b border-border last:border-b-0">
                    {columns.map((column) => (
                      <td key={column.key} className="px-4 py-3 text-text-secondary align-top">
                        {column.render ? column.render(row) : row[column.key] || "-"}
                      </td>
                    ))}
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Button to={getEditTo(row)} variant="outline" size="sm">
                          <Pencil className="size-4" />
                          Edit
                        </Button>
                        <Button
                          type="button"
                          variant="danger"
                          size="sm"
                          onClick={() => onDelete(row)}
                        >
                          <Trash2 className="size-4" />
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <Button to="/admin" variant="outline" size="sm">
        Back to Dashboard
      </Button>
    </div>
  );
}
