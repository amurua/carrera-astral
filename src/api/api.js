const API_URL = "http://localhost:8080";

export async function fetchTopRanking(n = 10) {
  const r = await fetch(`${API_URL}/ranking/top/${n}`);
  return r.json();
}

export async function fetchNotifications() {
  const r = await fetch(`${API_URL}/notificaciones/ultimas`);
  return r.json();
}
