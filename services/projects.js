import { apiGet } from '/src/utils/api.js';

export async function getProjects() {
  return apiGet('/api/projects');
}
