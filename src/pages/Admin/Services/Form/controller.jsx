import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createAdminService, getAdminServiceById, updateAdminService } from "/services/admin/services";
import { unwrapResponse } from "/src/utils/response";

const emptyForm = { title: "", description: "", tags: "" };

function toFormValues(service) {
  return {
    title: service.title || "",
    description: service.description || "",
    tags: Array.isArray(service.tags) ? service.tags.join(", ") : "",
  };
}

function toServicePayload(data) {
  return {
    ...data,
    tags: data.tags
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  };
}

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
      .then((res) => {
        const service = unwrapResponse(res, "Could not load the selected service.").data;
        if (!service) { setError(new Error("Service not found.")); return; }
        reset(toFormValues(service));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id, isEdit, reset]);

  async function onSubmit(data) {
    setError(null);
    try {
      const payload = toServicePayload(data);
      if (isEdit) unwrapResponse(await updateAdminService(id, payload), "Could not update the service.");
      else unwrapResponse(await createAdminService(payload), "Could not create the service.");
      navigate("/admin/services");
    } catch (err) {
      setError(err);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting: isSubmitting, error };
}
