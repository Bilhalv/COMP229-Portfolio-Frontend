import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createAdminProject, getAdminProjectById, updateAdminProject } from "/services/admin/projects";
import { unwrapResponse } from "/src/utils/response";

const emptyForm = {
  name: "",
  completionDate: "",
  description: "",
  image: "",
  role: "",
  stack: "",
  repoUrl: "",
  hasEnglishDescription: false,
};

function toFormValues(project) {
  return {
    name: project.name || "",
    completionDate: project.completionDate ? String(project.completionDate).slice(0, 10) : "",
    description: project.description || "",
    image: project.image || "",
    role: project.role || "",
    stack: Array.isArray(project.stack) ? project.stack.join(", ") : "",
    repoUrl: project.repoUrl || "",
    hasEnglishDescription: Boolean(project.hasEnglishDescription),
  };
}

function toProjectPayload(data) {
  return {
    ...data,
    stack: data.stack
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    hasEnglishDescription: Boolean(data.hasEnglishDescription),
  };
}

export default function useAdminProjectFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({ defaultValues: emptyForm });

  useEffect(() => {
    if (!isEdit) return;
    getAdminProjectById(id)
      .then((res) => {
        const project = unwrapResponse(res, "Could not load the selected project.").data;
        if (!project) { setError(new Error("Project not found.")); return; }
        reset(toFormValues(project));
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id, isEdit, reset]);

  async function onSubmit(data) {
    setError(null);
    try {
      const payload = toProjectPayload(data);
      if (isEdit) unwrapResponse(await updateAdminProject(id, payload), "Could not update the project.");
      else unwrapResponse(await createAdminProject(payload), "Could not create the project.");
      navigate("/admin/projects");
    } catch (err) {
      setError(err);
    }
  }

  return { register, handleSubmit, onSubmit, errors, isEdit, loading, submitting: isSubmitting, error };
}
