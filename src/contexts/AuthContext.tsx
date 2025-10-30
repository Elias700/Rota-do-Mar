import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Credentials, User, RegisterInput } from "../Services/auth";
import { getCurrentAuth, login as svcLogin, logout as svcLogout, register as svcRegister } from "../Services/auth";

type AuthContextValue = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (c: Credentials) => Promise<void>;
  register: (r: RegisterInput) => Promise<User>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getCurrentAuth();
    if (auth) {
      setUser(auth.user);
      setToken(auth.token);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (c: Credentials) => {
    const auth = await svcLogin(c);
    setUser(auth.user);
    setToken(auth.token);
  }, []);

  const register = useCallback(async (r: RegisterInput) => {
    const u = await svcRegister(r);
    return u;
  }, []);

  const logout = useCallback(async () => {
    await svcLogout();
    setUser(null);
    setToken(null);
  }, []);

  const value = useMemo(
    () => ({ user, token, loading, login, register, logout }),
    [user, token, loading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
