import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

  const [loading, setLoading] = useState(isEdit);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: emptyForm });

  useEffect(() => {
    if (!isEdit) return;

    getAdminUserById(id)
      .then((user) => {
        if (!user) {
          setError(new Error("User not found."));
          return;
        }
        reset({
          firstname: user.firstname || "",
          lastname: user.lastname || "",
          email: user.email || "",
          password: user.password || "",
        });
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id, isEdit, reset]);

  async function onSubmit(data) {
    setError(null);
    try {
      if (isEdit) {
        await updateAdminUser(id, data);
      } else {
        await createAdminUser(data);
      }
      navigate("/admin/users");
    } catch (err) {
      setError(err);
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isEdit,
    loading,
    submitting: isSubmitting,
    error,
  };
}
