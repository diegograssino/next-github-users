"use client";
import { createContext, useEffect, useState } from "react";

interface FavsProviderProps {
  children: React.ReactNode;
}

interface FavsContextProps {
  favs: number[];
  addFav: (id: number) => void;
  removeFav: (id: number) => void;
  checkFav: (id: number) => boolean;
}

export const FavsContext = createContext<FavsContextProps>({
  favs: [],
  addFav: () => {},
  removeFav: () => {},
  checkFav: () => false,
});

export const FavsProvider = ({ children }: FavsProviderProps) => {
  const [favs, setFavs] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("favs", JSON.stringify(favs));
    } else {
      setIsClient(true);
    }
  }, [favs]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localFavs = localStorage.getItem("favs") || "[]";
      setFavs(JSON.parse(localFavs));
    }
  }, []);

  const addFav = (id: number) => {
    if (!favs.some((fav) => fav === id)) {
      const newFavs = [...favs, id];
      setFavs(newFavs);
    }
  };

  const removeFav = (id: number) => {
    const newFavs = favs.filter((fav) => fav !== id);
    setFavs(newFavs);
  };

  const isFav = (id: number) => {
    return favs.some((fav) => fav === id);
  };

  return (
    <FavsContext.Provider value={{ favs, addFav, removeFav, checkFav: isFav }}>
      {children}
    </FavsContext.Provider>
  );
};
