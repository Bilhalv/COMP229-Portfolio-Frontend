import { useEffect, useState } from "react";
import { getServices } from "/services/services";
import { unwrapResponse } from "/src/utils/response";

export default function useServicesController() {
  const [services, setServices] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    getServices()
      .then((res) => setServices(unwrapResponse(res, "Could not load services.").data))
      .catch(setError);
  }, []);

  return { services, error };
}
