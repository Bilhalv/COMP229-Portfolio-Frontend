import { LoaderCircle, Save } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";
import ErrorNotice from "/components/ErrorNotice";
import useAdminProjectFormController from "./controller";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";
const labelClasses = "text-sm font-medium text-text-secondary";

export default function AdminProjectFormView() {
  const { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting, error } = useAdminProjectFormController();

  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader title={isEdit ? "Edit Project" : "Add Project"} subtitle={isEdit ? "Update the selected project." : "Create a new project record."} />
      {error && !loading ? <ErrorNotice message={error.message || "Could not save the project."} /> : null}
      {loading ? <p className="text-text-muted">Loading...</p> : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className={labelClasses}>Name <span className="text-error">*</span></label>
            <input id="name" className={inputClasses} {...register("name", { required: "Name is required." })} />
            {errors.name && <p className="text-xs text-error">{errors.name.message}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="completionDate" className={labelClasses}>Completion Date <span className="text-error">*</span></label>
              <input id="completionDate" type="date" className={inputClasses} {...register("completionDate", { required: "Completion date is required." })} />
              {errors.completionDate && <p className="text-xs text-error">{errors.completionDate.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="role" className={labelClasses}>Role <span className="text-error">*</span></label>
              <input id="role" className={inputClasses} placeholder="Frontend" {...register("role", { required: "Role is required." })} />
              {errors.role && <p className="text-xs text-error">{errors.role.message}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="image" className={labelClasses}>Image URL</label>
            <input id="image" className={inputClasses} placeholder="/projects/example.png" {...register("image")} />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="repoUrl" className={labelClasses}>Repository URL <span className="text-error">*</span></label>
            <input id="repoUrl" type="url" className={inputClasses} placeholder="https://github.com/..." {...register("repoUrl", { required: "Repository URL is required." })} />
            {errors.repoUrl && <p className="text-xs text-error">{errors.repoUrl.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="stack" className={labelClasses}>Stack <span className="text-error">*</span></label>
            <input id="stack" className={inputClasses} placeholder="React, TypeScript, Node.js" {...register("stack", { required: "At least one stack item is required." })} />
            <p className="text-xs text-text-muted">Comma-separated values.</p>
            {errors.stack && <p className="text-xs text-error">{errors.stack.message}</p>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" className={labelClasses}>Description <span className="text-error">*</span></label>
            <textarea id="description" rows={4} className={inputClasses} {...register("description", { required: "Description is required." })} />
            {errors.description && <p className="text-xs text-error">{errors.description.message}</p>}
          </div>

          <label className="flex items-center gap-2 text-sm text-text-secondary">
            <input type="checkbox" className="size-4 accent-accent" {...register("hasEnglishDescription")} />
            Repository has an English description
          </label>

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? <><LoaderCircle className="size-4 animate-spin" />Saving...</> : <><Save className="size-4" />{isEdit ? "Update Project" : "Create Project"}</>}
            </Button>
            <Button to="/admin/projects" variant="outline">Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}
