import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Favorites from "./Favorites";

export const FavoritesContext = createContext(
  {} as { favorites: Character[]; addFavorite: (character: Character) => void }
);

const RouterApp = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => {
    const tempFav = Array.from(favorites);
    if (!tempFav.find((c) => c.id === character.id)) {
      tempFav.push(character);
      setFavorites(tempFav);
    }
  };

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </FavoritesContext.Provider>
  );
};

export default RouterApp;
