import { useEffect, useState } from "react";
import { getProjects } from "../../../services/projects";

export default function useProjectsController() {
  const [projects, setProjects] = useState(undefined);

  useEffect(() => {
    let isCurrent = true;
    getProjects().then((data) => {
      if (isCurrent) {
        setProjects(data);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  return projects;
}