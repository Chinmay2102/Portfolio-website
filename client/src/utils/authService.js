const API_BASE = import.meta.env.VITE_API_BASE_URL;

export function getAccessToken() {
  return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function setAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export async function refreshAccessToken() {
  const refresh = getRefreshToken();

  if (!refresh) {
    logout();
    return null;
  }

  const response = await fetch(
    `${API_BASE}/api/token/refresh/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    }
  );

  if (!response.ok) {
    logout();
    return null;
  }

  const data = await response.json();
  setAccessToken(data.access);
  return data.access;
}
