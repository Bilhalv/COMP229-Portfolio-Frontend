import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createAdminReference, getAdminReferenceById, updateAdminReference } from "/services/admin/references";

const emptyForm = { name: "", testimonial: "", position: "", company: "" };

export default function useAdminReferenceFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    getAdminReferenceById(id)
      .then((reference) => {
        if (!reference) { setError(new Error("Reference not found.")); return; }
        setForm({
          name: reference.name || "",
          testimonial: reference.testimonial || "",
          position: reference.position || "",
          company: reference.company || "",
        });
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id, isEdit]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      if (isEdit) await updateAdminReference(id, form);
      else await createAdminReference(form);
      navigate("/admin/references");
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  }

  return { form, isEdit, loading, submitting, error, handleChange, handleSubmit };
}
