import { useCallback, useEffect, useState } from "react";
import { deleteAdminProject, getAdminProjects } from "/services/admin/projects";

export default function useAdminProjectsController() {
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  const loadProjects = useCallback(async () => {
    try {
      setError(null);
      const data = await getAdminProjects();
      setProjects(data);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  async function handleDelete(project) {
    const confirmed = window.confirm(`Delete project ${project.title}?`);
    if (!confirmed) return;
    try {
      await deleteAdminProject(project.id);
      await loadProjects();
    } catch (err) {
      setError(err);
    }
  }

  return { projects, error, handleDelete };
}
