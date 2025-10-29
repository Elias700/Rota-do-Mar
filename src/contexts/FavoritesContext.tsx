import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";
import { getFavorites, toggleFavorite as svcToggleFavorite } from "../services/favorites";

interface FavoritesContextValue {
  favorites: number[];
  isFavorite: (id: number) => boolean;
  toggleFavorite: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    if (user) {
      setFavorites(getFavorites(user.id));
    } else {
      setFavorites([]);
    }
  }, [user]);

  const isFavorite = useCallback((id: number) => favorites.includes(id), [favorites]);

  const toggleFavorite = useCallback(
    (id: number) => {
      if (!user) return; // ignore if not logged
      const nowFav = svcToggleFavorite(user.id, id);
      setFavorites((prev) => {
        if (nowFav) return Array.from(new Set([...prev, id]));
        return prev.filter((x) => x !== id);
      });
    },
    [user]
  );

  const value = useMemo(() => ({ favorites, isFavorite, toggleFavorite }), [favorites, isFavorite, toggleFavorite]);

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
