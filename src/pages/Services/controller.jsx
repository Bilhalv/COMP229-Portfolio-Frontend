import { useEffect, useState } from "react";
import { getServices } from "/services/services";

export default function useServicesController() {
  const [services, setServices] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    getServices().then(setServices).catch(setError);
  }, []);

  return { services, error };
}
