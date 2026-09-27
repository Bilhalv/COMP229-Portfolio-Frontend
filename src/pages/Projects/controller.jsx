import { useEffect, useState } from "react";
import { getProjects } from "/services/projects";

export default function useProjectsController() {
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCurrent = true;

    getProjects()
      .then((result) => {
        // Only apply state if this effect is still mounted (avoids late updates).
        if (isCurrent) {
          setProjects(result);
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

  return { projects, error };
}