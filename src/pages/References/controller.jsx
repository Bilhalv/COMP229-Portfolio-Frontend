import { useEffect, useState } from "react";
import { getReferences } from "/services/references";

export default function useReferencesController() {
  const [references, setReferences] = useState(undefined);

  useEffect(() => {
    let isCurrent = true;
    getReferences().then((data) => {
      if (isCurrent) {
        setReferences(data);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  return references;
}