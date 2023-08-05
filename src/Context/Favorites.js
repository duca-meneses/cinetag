import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();
FavoriteContext.displayName = "Favoritos";

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoriteContext);

  function addFavorite(newFavorite) {
    const favoriteRepeated = favorite.some(
      (item) => item.id === newFavorite.id
    );

    let newList = [...favorite];

    if (!favoriteRepeated) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    newList.splice(
      newList.findIndex(
        (item) =>
          item.id === newList.find((item) => item.id === newFavorite.id).id
      ),
      1
    );
    // newList.splice(newList.indexOf(newFavorite), 1);
    return setFavorite(newList);
  }
  return {
    favorite,
    addFavorite,
  };
}
