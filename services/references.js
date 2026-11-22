import { apiGet } from '/src/utils/api.js';

export async function getReferences() {
  return apiGet('/api/references');
}
