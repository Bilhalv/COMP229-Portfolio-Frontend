import { useEffect, useState } from "react";
import { getReferences } from "/services/references";
import { unwrapResponse } from "/src/utils/response";

export default function useReferencesController() {
  const [references, setReferences] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReferences()
      .then((res) => setReferences(unwrapResponse(res, "Could not load references.").data))
      .catch(setError);
  }, []);

  return { references, error };
}
