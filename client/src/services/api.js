const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export async function checkHealth() {
  const response = await fetch(`${API_BASE_URL}/health`);
  if (!response.ok) {
    throw new Error('Backend health check failed');
  }
  return response.json();
}

// TODO: Add feature-specific API functions here as CRUD work is implemented.
// Example:
// export async function getTrails() {
//   const response = await fetch(`${API_BASE_URL}/trails`);
//   return response.json();
// }

export default API_BASE_URL;
