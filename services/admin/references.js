import { apiDelete, apiGet, apiPost, apiPut } from '/src/utils/api.js';

export async function getAdminReferences() {
  return apiGet('/api/references');
}

export async function getAdminReferenceById(id) {
  return apiGet(`/api/references/${id}`);
}

export async function createAdminReference(data) {
  return apiPost('/api/references', data);
}

export async function updateAdminReference(id, data) {
  return apiPut(`/api/references/${id}`, data);
}

export async function deleteAdminReference(id) {
  return apiDelete(`/api/references/${id}`);
}
