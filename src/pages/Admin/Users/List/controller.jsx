import { useCallback, useEffect, useState } from "react";
import { deleteAdminUser, getAdminUsers } from "/services/admin/users";
import { unwrapResponse } from "/src/utils/response";

export default function useAdminUsersController() {
  const [users, setUsers] = useState(undefined);
  const [error, setError] = useState(null);

  const loadUsers = useCallback(async () => {
    try {
      setError(null);
      const res = unwrapResponse(await getAdminUsers(), "Could not load users.");
      setUsers(res.data || []);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  async function handleDelete(user) {
    const confirmed = window.confirm(
      `Delete user ${user.firstname} ${user.lastname}?`,
    );
    if (!confirmed) return;

    try {
      unwrapResponse(
        await deleteAdminUser(user.id),
        "Could not delete the selected user.",
      );
      await loadUsers();
    } catch (err) {
      setError(err);
    }
  }

  return { users, error, handleDelete };
}
