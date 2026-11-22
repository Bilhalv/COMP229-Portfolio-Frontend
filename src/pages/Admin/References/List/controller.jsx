import { useCallback, useEffect, useState } from "react";
import { deleteAdminReference, getAdminReferences } from "/services/admin/references";

export default function useAdminReferencesController() {
  const [references, setReferences] = useState(undefined);
  const [error, setError] = useState(null);

  const loadReferences = useCallback(async () => {
    try {
      setError(null);
      setReferences(await getAdminReferences());
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => { loadReferences(); }, [loadReferences]);

  async function handleDelete(reference) {
    if (!window.confirm(`Delete reference ${reference.name}?`)) return;
    try {
      await deleteAdminReference(reference.id);
      await loadReferences();
    } catch (err) {
      setError(err);
    }
  }

  return { references, error, handleDelete };
}
