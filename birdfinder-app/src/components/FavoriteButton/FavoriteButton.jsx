import React, { useState, useEffect } from "react";
import "./FavoriteButton.scss";
import heartIcon from "../../assets/Icons/favorite_heart.svg";

function FavoriteButton({ id, birdName }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
      setIsFavorite(storedFavorites.some((fav) => fav.id === id));
    }
  }, [id]);

  const toggleFavorite = () => {
    const index = favorites.findIndex((fav) => fav.id === id);
    if (index === -1) {
      console.log(favorites);
      const newFavorites = [...favorites, { id, name: birdName }];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(true);
    } else {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
    }
  };

  return (
    <div className="favorite">
      <button className="favorite-button" onClick={toggleFavorite}>
        <img src={heartIcon} alt="Heart" className="heart-icon" />
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default FavoriteButton;
