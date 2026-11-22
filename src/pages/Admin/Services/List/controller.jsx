import { useCallback, useEffect, useState } from "react";
import { deleteAdminService, getAdminServices } from "/services/admin/services";
import { unwrapResponse } from "/src/utils/response";

export default function useAdminServicesController() {
  const [services, setServices] = useState(undefined);
  const [error, setError] = useState(null);

  const loadServices = useCallback(async () => {
    try {
      setError(null);
      const res = unwrapResponse(await getAdminServices(), "Could not load services.");
      setServices(res.data || []);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => { loadServices(); }, [loadServices]);

  async function handleDelete(service) {
    if (!window.confirm(`Delete service ${service.title}?`)) return;
    try {
      unwrapResponse(
        await deleteAdminService(service.id),
        "Could not delete the selected service.",
      );
      await loadServices();
    } catch (err) {
      setError(err);
    }
  }

  return { services, error, handleDelete };
}
