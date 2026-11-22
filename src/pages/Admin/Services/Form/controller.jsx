import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createAdminService, getAdminServiceById, updateAdminService } from "/services/admin/services";

const emptyForm = { title: "", description: "" };

export default function useAdminServiceFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues: emptyForm });

  useEffect(() => {
    if (!isEdit) return;
    getAdminServiceById(id)
      .then((service) => {
        if (!service) { setError(new Error("Service not found.")); return; }
        reset({ title: service.title || "", description: service.description || "" });
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id, isEdit, reset]);

  async function onSubmit(data) {
    setError(null);
    try {
      if (isEdit) await updateAdminService(id, data);
      else await createAdminService(data);
      navigate("/admin/services");
    } catch (err) {
      setError(err);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting: isSubmitting, error };
}
