import { apiDelete, apiGet, apiPost, apiPut } from '/src/utils/api.js';

export async function getAdminServices() {
  return apiGet('/api/services');
}

export async function getAdminServiceById(id) {
  return apiGet(`/api/services/${id}`);
}

export async function createAdminService(data) {
  return apiPost('/api/services', data);
}

export async function updateAdminService(id, data) {
  return apiPut(`/api/services/${id}`, data);
}

export async function deleteAdminService(id) {
  return apiDelete(`/api/services/${id}`);
}
