import {
  getAccessToken,
  refreshAccessToken,
  logout,
} from "./authService";

export async function fetchWithAuth(url, options = {}) {
  let token = getAccessToken();

  let response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  if (response.status === 401) {
    token = await refreshAccessToken();

    if (!token) {
      logout();
      return Promise.reject("Session expired");
    }

    response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return response;
}
