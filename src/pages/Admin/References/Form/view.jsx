import { LoaderCircle, Save } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";
import ErrorNotice from "/components/ErrorNotice";
import useAdminReferenceFormController from "./controller";

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";
const labelClasses = "text-sm font-medium text-text-secondary";

export default function AdminReferenceFormView() {
  const { form, isEdit, loading, submitting, error, handleChange, handleSubmit } = useAdminReferenceFormController();
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader title={isEdit ? "Edit Reference" : "Add Reference"} subtitle={isEdit ? "Update the selected reference." : "Create a new reference record."} />
      {error && !loading ? <ErrorNotice message={error.message || "Could not save the reference."} /> : null}
      {loading ? <p className="text-text-muted">Loading...</p> : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className={labelClasses}>Name <span className="text-error">*</span></label>
            <input id="name" name="name" value={form.name} onChange={handleChange} required className={inputClasses} />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="position" className={labelClasses}>Position <span className="text-error">*</span></label>
              <input id="position" name="position" value={form.position} onChange={handleChange} required className={inputClasses} />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="company" className={labelClasses}>Company <span className="text-error">*</span></label>
              <input id="company" name="company" value={form.company} onChange={handleChange} required className={inputClasses} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="testimonial" className={labelClasses}>Testimonial <span className="text-error">*</span></label>
            <textarea id="testimonial" name="testimonial" value={form.testimonial} onChange={handleChange} required rows={4} className={inputClasses} />
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
