import { useCallback, useEffect, useState } from "react";
import { deleteAdminUser, getAdminUsers } from "/services/admin/users";

export default function useAdminUsersController() {
  const [users, setUsers] = useState(undefined);
  const [error, setError] = useState(null);

  const loadUsers = useCallback(async () => {
    try {
      setError(null);
      const data = await getAdminUsers();
      setUsers(data);
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
      await deleteAdminUser(user.id);
      await loadUsers();
    } catch (err) {
      setError(err);
    }
  }

  return { users, error, handleDelete };
}
