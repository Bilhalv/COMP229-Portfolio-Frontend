import { useCallback, useEffect, useState } from "react";
import { deleteAdminProject, getAdminProjects } from "/services/admin/projects";
import { unwrapResponse } from "/src/utils/response";

export default function useAdminProjectsController() {
  const [projects, setProjects] = useState(undefined);
  const [error, setError] = useState(null);

  const loadProjects = useCallback(async () => {
    try {
      setError(null);
      const res = unwrapResponse(await getAdminProjects(), "Could not load projects.");
      setProjects(res.data || []);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  async function handleDelete(project) {
    const confirmed = window.confirm(`Delete project ${project.name}?`);
    if (!confirmed) return;
    try {
      unwrapResponse(
        await deleteAdminProject(project.id),
        "Could not delete the selected project.",
      );
      await loadProjects();
    } catch (err) {
      setError(err);
    }
  }

  return { projects, error, handleDelete };
}
