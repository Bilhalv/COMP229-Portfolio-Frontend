import { useEffect, useState } from "react";
import { getReferences } from "/services/references";

export default function useReferencesController() {
  const [references, setReferences] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    getReferences()
      .then((result) => {
        // Only apply state if this effect is still mounted (avoids late updates).
        if (isCurrent) {
          setReferences(result);
        }
      })
      .catch((err) => {
        if (isCurrent) {
          setError(err);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, []);

  return { references, error };
}