import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createAdminReference, getAdminReferenceById, updateAdminReference } from "/services/admin/references";
import { unwrapResponse } from "/src/utils/response";

const emptyForm = { name: "", testimonial: "", position: "", company: "" };

export default function useAdminReferenceFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues: emptyForm });

  useEffect(() => {
    if (!isEdit) return;
    getAdminReferenceById(id)
      .then((res) => {
        const reference = unwrapResponse(res, "Could not load the selected reference.").data;
        if (!reference) { setError(new Error("Reference not found.")); return; }
        reset({
          name: reference.name || "",
          testimonial: reference.testimonial || "",
          position: reference.position || "",
          company: reference.company || "",
        });
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id, isEdit, reset]);

  async function onSubmit(data) {
    setError(null);
    try {
      if (isEdit) unwrapResponse(await updateAdminReference(id, data), "Could not update the reference.");
      else unwrapResponse(await createAdminReference(data), "Could not create the reference.");
      navigate("/admin/references");
    } catch (err) {
      setError(err);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting: isSubmitting, error };
}
