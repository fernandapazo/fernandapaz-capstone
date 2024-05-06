import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FavoritesList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
      console.log(favorites);
    }
  }, []);

  return (
    <div>
      <h2>Favorites List</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            <Link to={`/bird/${favorite.id}`}>{favorite.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
