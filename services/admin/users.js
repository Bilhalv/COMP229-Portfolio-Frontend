import { apiDelete, apiGet, apiPost, apiPut } from '/src/utils/api.js';

export async function getAdminUsers() {
  return apiGet('/api/users');
}

export async function getAdminUserById(id) {
  return apiGet(`/api/users/${id}`);
}

export async function createAdminUser(data) {
  return apiPost('/api/users', data);
}

export async function updateAdminUser(id, data) {
  return apiPut(`/api/users/${id}`, data);
}

export async function deleteAdminUser(id) {
  return apiDelete(`/api/users/${id}`);
}
