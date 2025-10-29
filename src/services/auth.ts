
export type User = {
  id: string;
  name: string;
  email: string;
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export type Credentials = {
  email: string;
  password: string;
};

type AuthState = {
  token: string;
  user: User;
};

const USERS_KEY = "rdm_users";
const AUTH_KEY = "rdm_auth";

function readUsers(): Array<User & { password: string }> {
  const raw = localStorage.getItem(USERS_KEY);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeUsers(users: Array<User & { password: string }>) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getCurrentAuth(): AuthState | null {
  const raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveAuth(auth: AuthState | null) {
  if (!auth) {
    localStorage.removeItem(AUTH_KEY);
  } else {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  }
}

function delay(ms = 500) {
  return new Promise((res) => setTimeout(res, ms));
}

function genId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function genToken(userId: string) {
  return btoa(`${userId}.${Date.now()}.${Math.random()}`);
}

export async function register(input: RegisterInput): Promise<User> {
  await delay();
  const users = readUsers();
  const exists = users.some((u) => u.email.toLowerCase() === input.email.toLowerCase());
  if (exists) {
    throw new Error("Email já cadastrado");
  }
  const newUser: User & { password: string } = {
    id: genId(),
    name: input.name,
    email: input.email,
    password: input.password,
  };
  users.push(newUser);
  writeUsers(users);
  return { id: newUser.id, name: newUser.name, email: newUser.email };
}

export async function login(credentials: Credentials): Promise<AuthState> {
  await delay();
  const users = readUsers();
  const found = users.find(
    (u) => u.email.toLowerCase() === credentials.email.toLowerCase() && u.password === credentials.password
  );
  if (!found) {
    throw new Error("Credenciais inválidas");
  }
  const token = genToken(found.id);
  const user: User = { id: found.id, name: found.name, email: found.email };
  const auth: AuthState = { token, user };
  saveAuth(auth);
  return auth;
}

export async function logout(): Promise<void> {
  await delay(200);
  saveAuth(null);
}
