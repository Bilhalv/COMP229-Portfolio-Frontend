import { LoaderCircle, Save } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";
import ErrorNotice from "/components/ErrorNotice";
import { FormSkeleton } from "/src/components/Skeleton.jsx";
import useAdminUserFormController from "./controller";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";
const labelClasses = "text-sm font-medium text-text-secondary";

export default function AdminUserFormView() {
  const { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting, error } =
    useAdminUserFormController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title={isEdit ? "Edit User" : "Add User"}
        subtitle={isEdit ? "Update the selected user." : "Create a new user record."}
      />

      {error && !loading ? <ErrorNotice message={error.message || "Could not save the user."} /> : null}

      {loading ? (
        <FormSkeleton fields={4} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-surface p-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstname" className={labelClasses}>First Name <span className="text-error">*</span></label>
              <input id="firstname" className={inputClasses} {...register("firstname", { required: "First name is required." })} />
              {errors.firstname && <p className="text-xs text-error">{errors.firstname.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastname" className={labelClasses}>Last Name <span className="text-error">*</span></label>
              <input id="lastname" className={inputClasses} {...register("lastname", { required: "Last name is required." })} />
              {errors.lastname && <p className="text-xs text-error">{errors.lastname.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className={labelClasses}>Email <span className="text-error">*</span></label>
            <input id="email" type="email" className={inputClasses} {...register("email", { required: "Email is required." })} />
            {errors.email && <p className="text-xs text-error">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className={labelClasses}>
              Password {!isEdit && <span className="text-error">*</span>}
            </label>
            <input
              id="password"
              type="password"
              className={inputClasses}
              placeholder={isEdit ? "Leave blank to keep current password" : ""}
              {...register("password", {
                required: isEdit ? false : "Password is required.",
              })}
            />
            {isEdit && <p className="text-xs text-text-muted">Leave blank to keep the current password.</p>}
            {errors.password && <p className="text-xs text-error">{errors.password.message}</p>}
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
