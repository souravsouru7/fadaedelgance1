export const API_BASE = import.meta.env.VITE_API_BASE || 'https://fadedelgance.shop';

export function buildApiUrl(pathOrUrl) {
  if (!pathOrUrl) return API_BASE;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (pathOrUrl.startsWith('/')) return `${API_BASE}${pathOrUrl}`;
  return `${API_BASE}/${pathOrUrl}`;
}

export async function apiFetch(pathOrUrl, options = {}) {
  const url = buildApiUrl(pathOrUrl);
  const defaultHeaders = { 'Content-Type': 'application/json' };
  const headers = { ...defaultHeaders, ...(options.headers || {}) };
  const response = await fetch(url, { ...options, headers });
  return response;
}


