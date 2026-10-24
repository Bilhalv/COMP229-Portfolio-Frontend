import { useEffect, useState } from "react";
import { getReferences } from "/services/references";

export default function useReferencesController() {
  const [references, setReferences] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReferences().then(setReferences).catch(setError);
  }, []);

  return { references, error };
}
