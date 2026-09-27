import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  message: "",
};

const inputClasses =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none";

const labelClasses = "text-sm font-medium text-text-secondary";

export default function MessageForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    console.log("Message submitted:", form);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-text-primary">
          Send me a message
        </h2>
        <p className="text-sm text-text-muted">
          Fields marked with * are required. Submitting will take you back to
          the home page.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="firstName" className={labelClasses}>
            First Name <span className="text-error">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Jane"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lastName" className={labelClasses}>
            Last Name <span className="text-error">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
            className={inputClasses}
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="phone" className={labelClasses}>
          Contact Number{" "}
          <span className="font-normal text-text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClasses}
          placeholder="+1 (555) 000-0000"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={labelClasses}>
          Email Address <span className="text-error">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className={inputClasses}
          placeholder="jane@example.com"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className={inputClasses}
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-2.5 font-semibold text-background transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (
          <>
            <LoaderCircle className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}