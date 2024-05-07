import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FavoritesList.scss";

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
    <div className="favorites-list">
      <ul className="favorites-list__items">
        {favorites.map((favorite, index) => (
          <li key={index} className="favorites-list__item">
            <Link to={`/bird/${favorite.id}`} className="favorites-list__link">
              <div className="favorites-list__info">
                <span className="favorites-list__name">{favorite.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoritesList;
