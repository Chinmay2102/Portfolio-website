export function isAuthenticated() {
  return Boolean(localStorage.getItem("accessToken"));
}

export function logout() {
  localStorage.removeItem("accessToken");
}
