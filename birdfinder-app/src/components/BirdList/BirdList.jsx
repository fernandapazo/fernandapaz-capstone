import React from "react";
import { Link } from "react-router-dom";
import "./BirdList.scss";

const BirdList = ({ searchResults }) => (
  <ul className="bird-list">
    {searchResults.map((bird, index) => (
      <li key={index} className="bird-list__item">
        <Link to={`/bird/${bird.id}`} className="bird-link">
          <div className="bird-info">
            <h2 className="bird-info__name">{bird.name}</h2>
            {bird.images.length > 0 && (
              <div className="bird-info__hover-images">
                {bird.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Bird ${index + 1}`}
                    className="bird-info__image"
                  />
                ))}
              </div>
            )}
          </div>
        </Link>
      </li>
    ))}
  </ul>
);

export default BirdList;
