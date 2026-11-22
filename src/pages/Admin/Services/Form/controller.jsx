import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createAdminService, getAdminServiceById, updateAdminService } from "/services/admin/services";

const emptyForm = { title: "", description: "" };

export default function useAdminServiceFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    getAdminServiceById(id)
      .then((service) => {
        if (!service) { setError(new Error("Service not found.")); return; }
        setForm({ title: service.title || "", description: service.description || "" });
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
      if (isEdit) await updateAdminService(id, form);
      else await createAdminService(form);
      navigate("/admin/services");
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  }

  return { form, isEdit, loading, submitting, error, handleChange, handleSubmit };
}
