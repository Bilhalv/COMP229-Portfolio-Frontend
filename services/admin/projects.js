import { apiDelete, apiGet, apiPost, apiPut } from '/src/utils/api.js';

export async function getAdminProjects() {
  return apiGet('/api/projects');
}

export async function getAdminProjectById(id) {
  return apiGet(`/api/projects/${id}`);
}

export async function createAdminProject(data) {
  return apiPost('/api/projects', data);
}

export async function updateAdminProject(id, data) {
  return apiPut(`/api/projects/${id}`, data);
}

export async function deleteAdminProject(id) {
  return apiDelete(`/api/projects/${id}`);
}
