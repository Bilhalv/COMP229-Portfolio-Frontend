import { LoaderCircle, Save } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";
import ErrorNotice from "/components/ErrorNotice";
import useAdminUserFormController from "./controller";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";
const labelClasses = "text-sm font-medium text-text-secondary";

export default function AdminUserFormView() {
  const { form, isEdit, loading, submitting, error, handleChange, handleSubmit } =
    useAdminUserFormController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title={isEdit ? "Edit User" : "Add User"}
        subtitle={isEdit ? "Update the selected user." : "Create a new user record."}
      />

      {error && !loading ? <ErrorNotice message={error.message || "Could not save the user."} /> : null}

      {loading ? (
        <p className="text-text-muted">Loading...</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-surface p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstname" className={labelClasses}>First Name <span className="text-error">*</span></label>
              <input id="firstname" name="firstname" value={form.firstname} onChange={handleChange} required className={inputClasses} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastname" className={labelClasses}>Last Name <span className="text-error">*</span></label>
              <input id="lastname" name="lastname" value={form.lastname} onChange={handleChange} required className={inputClasses} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className={labelClasses}>Email <span className="text-error">*</span></label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className={inputClasses} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className={labelClasses}>Password <span className="text-error">*</span></label>
            <input id="password" name="password" type="password" value={form.password} onChange={handleChange} required className={inputClasses} />
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? <><LoaderCircle className="size-4 animate-spin" />Saving...</> : <><Save className="size-4" />{isEdit ? "Update User" : "Create User"}</>}
            </Button>
            <Button to="/admin/users" variant="outline">Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}
