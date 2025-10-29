
const FAVORITES_KEY = "rdm_favorites"; 

function readAll(): Record<string, number[]> {
  const raw = localStorage.getItem(FAVORITES_KEY);
  try {
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(map: Record<string, number[]>) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(map));
}

export function getFavorites(userId: string): number[] {
  const map = readAll();
  return Array.isArray(map[userId]) ? map[userId] : [];
}

export function setFavorites(userId: string, ids: number[]) {
  const map = readAll();
  map[userId] = Array.from(new Set(ids));
  writeAll(map);
}

export function addFavorite(userId: string, beachId: number) {
  const current = getFavorites(userId);
  if (!current.includes(beachId)) {
    setFavorites(userId, [...current, beachId]);
  }
}

export function removeFavorite(userId: string, beachId: number) {
  const current = getFavorites(userId);
  setFavorites(userId, current.filter((id) => id !== beachId));
}

export function toggleFavorite(userId: string, beachId: number): boolean {
  const current = getFavorites(userId);
  const isFav = current.includes(beachId);
  if (isFav) {
    setFavorites(userId, current.filter((id) => id !== beachId));
    return false;
  } else {
    setFavorites(userId, [...current, beachId]);
    return true;
  }
}
