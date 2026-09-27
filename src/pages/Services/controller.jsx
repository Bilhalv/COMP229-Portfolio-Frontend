import { useEffect, useState } from "react";
import { getServices } from "/services/services";

export default function useServicesController() {
  const [services, setServices] = useState(undefined);

  useEffect(() => {
    let isCurrent = true;
    getServices().then((data) => {
      if (isCurrent) {
        setServices(data);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  return services;
}