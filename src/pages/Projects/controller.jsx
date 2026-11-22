import { useEffect, useState } from "react";
import { getProjects } from "/services/projects";
import { unwrapResponse } from "/src/utils/response";

export default function useProjectsController() {
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(unwrapResponse(res, "Could not load projects.").data))
      .catch(setError);
  }, []);

  return { projects, error };
}
