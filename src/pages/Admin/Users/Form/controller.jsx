import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createAdminUser,
  getAdminUserById,
  updateAdminUser,
} from "/services/admin/users";

const emptyForm = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

export default function useAdminUserFormController() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(isEdit);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isEdit) return;

    getAdminUserById(id)
      .then((user) => {
        if (!user) {
          setError(new Error("User not found."));
          return;
        }
        setForm({
          firstname: user.firstname || "",
          lastname: user.lastname || "",
          email: user.email || "",
          password: user.password || "",
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
      if (isEdit) {
        await updateAdminUser(id, form);
      } else {
        await createAdminUser(form);
      }
      navigate("/admin/users");
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    form,
    isEdit,
    loading,
    submitting,
    error,
    handleChange,
    handleSubmit,
  };
}
