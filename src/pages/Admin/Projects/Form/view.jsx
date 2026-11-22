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
            <label htmlFor="title" className={labelClasses}>Title <span className="text-error">*</span></label>
            <input id="title" className={inputClasses} {...register("title", { required: "Title is required." })} />
            {errors.title && <p className="text-xs text-error">{errors.title.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="completion" className={labelClasses}>Completion Date <span className="text-error">*</span></label>
            <input id="completion" type="date" className={inputClasses} {...register("completion", { required: "Completion date is required." })} />
            {errors.completion && <p className="text-xs text-error">{errors.completion.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className={labelClasses}>Image URL</label>
            <input id="image" className={inputClasses} placeholder="/projects/example.png" {...register("image")} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description" className={labelClasses}>Description <span className="text-error">*</span></label>
            <textarea id="description" rows={4} className={inputClasses} {...register("description", { required: "Description is required." })} />
            {errors.description && <p className="text-xs text-error">{errors.description.message}</p>}
          </div>
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
