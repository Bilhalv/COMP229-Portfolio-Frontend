import { useCallback, useEffect, useState } from "react";
import { deleteAdminService, getAdminServices } from "/services/admin/services";

export default function useAdminServicesController() {
  const [services, setServices] = useState(undefined);
  const [error, setError] = useState(null);

  const loadServices = useCallback(async () => {
    try {
      setError(null);
      setServices(await getAdminServices());
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => { loadServices(); }, [loadServices]);

  async function handleDelete(service) {
    if (!window.confirm(`Delete service ${service.title}?`)) return;
    try {
      await deleteAdminService(service.id);
      await loadServices();
    } catch (err) {
      setError(err);
    }
  }

  return { services, error, handleDelete };
}
