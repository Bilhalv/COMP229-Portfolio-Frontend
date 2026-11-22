import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createAdminProject,
  getAdminProjectById,
  updateAdminProject,
} from "/services/admin/projects";

const emptyForm = { title: "", completion: "", description: "", image: "" };

export default function useAdminProjectFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;
    getAdminProjectById(id)
      .then((project) => {
        if (!project) {
          setError(new Error("Project not found."));
          return;
        }
        setForm({
          title: project.title || "",
          completion: project.completion ? String(project.completion).slice(0, 10) : "",
          description: project.description || "",
          image: project.image || "",
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
      if (isEdit) await updateAdminProject(id, form);
      else await createAdminProject(form);
      navigate("/admin/projects");
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  }

  return { form, isEdit, loading, submitting, error, handleChange, handleSubmit };
}
