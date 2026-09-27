import { useEffect, useState } from "react";
import { getServices } from "/services/services";

export default function useServicesController() {
  const [services, setServices] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    getServices()
      .then((result) => {
        // Only apply state if this effect is still mounted (avoids late updates).
        if (isCurrent) {
          setServices(result);
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

  return { services, error };
}