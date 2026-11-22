import { LoaderCircle, Save } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";
import ErrorNotice from "/components/ErrorNotice";
import { FormSkeleton } from "/src/components/Skeleton.jsx";
import useAdminReferenceFormController from "./controller";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";
const labelClasses = "text-sm font-medium text-text-secondary";

export default function AdminReferenceFormView() {
  const { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting, error } = useAdminReferenceFormController();
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader title={isEdit ? "Edit Reference" : "Add Reference"} subtitle={isEdit ? "Update the selected reference." : "Create a new reference record."} />
      {error && !loading ? <ErrorNotice message={error.message || "Could not save the reference."} /> : null}
      {loading ? <FormSkeleton fields={4} /> : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className={labelClasses}>Name <span className="text-error">*</span></label>
            <input id="name" className={inputClasses} {...register("name", { required: "Name is required." })} />
            {errors.name && <p className="text-xs text-error">{errors.name.message}</p>}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="position" className={labelClasses}>Position <span className="text-error">*</span></label>
              <input id="position" className={inputClasses} {...register("position", { required: "Position is required." })} />
              {errors.position && <p className="text-xs text-error">{errors.position.message}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="company" className={labelClasses}>Company <span className="text-error">*</span></label>
              <input id="company" className={inputClasses} {...register("company", { required: "Company is required." })} />
              {errors.company && <p className="text-xs text-error">{errors.company.message}</p>}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="testimonial" className={labelClasses}>Testimonial <span className="text-error">*</span></label>
            <textarea id="testimonial" rows={4} className={inputClasses} {...register("testimonial", { required: "Testimonial is required." })} />
            {errors.testimonial && <p className="text-xs text-error">{errors.testimonial.message}</p>}
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? <><LoaderCircle className="size-4 animate-spin" />Saving...</> : <><Save className="size-4" />{isEdit ? "Update Reference" : "Create Reference"}</>}
            </Button>
            <Button to="/admin/references" variant="outline">Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}
