import { apiGet } from '/src/utils/api.js';

export async function getServices() {
  return apiGet('/api/services');
}
