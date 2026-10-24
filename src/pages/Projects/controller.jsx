import { useEffect, useState } from "react";
import { getProjects } from "/services/projects";

export default function useProjectsController() {
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects).catch(setError);
  }, []);

  return { projects, error };
}
