import { useCallback, useEffect, useState } from "react";
import { deleteAdminReference, getAdminReferences } from "/services/admin/references";
import { unwrapResponse } from "/src/utils/response";

export default function useAdminReferencesController() {
  const [references, setReferences] = useState(undefined);
  const [error, setError] = useState(null);

  const loadReferences = useCallback(async () => {
    try {
      setError(null);
      const res = unwrapResponse(await getAdminReferences(), "Could not load references.");
      setReferences(res.data || []);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => { loadReferences(); }, [loadReferences]);

  async function handleDelete(reference) {
    if (!window.confirm(`Delete reference ${reference.name}?`)) return;
    try {
      unwrapResponse(
        await deleteAdminReference(reference.id),
        "Could not delete the selected reference.",
      );
      await loadReferences();
    } catch (err) {
      setError(err);
    }
  }

  return { references, error, handleDelete };
}
