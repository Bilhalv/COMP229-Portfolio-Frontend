import { useEffect, useState } from "react";
import { getContactInfo } from "/services/contact";

export default function useContactController() {
  const [info, setInfo] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    getContactInfo()
      .then((result) => {
        // Only apply state if this effect is still mounted (avoids late updates).
        if (isCurrent) {
          setInfo(result);
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

  return { info, error };
}