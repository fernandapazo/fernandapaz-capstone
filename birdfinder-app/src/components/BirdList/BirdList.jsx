import React from "react";

const BirdList = ({ searchResults }) => (
  <ul className="bird-list">
    {searchResults.map((bird, index) => (
      <li key={index} className="bird-list__item">
        <div className="bird-info">
          <h2 className="bird-info__name">{bird.name}</h2>
          <p className="bird-info__sci-name">Scientific Name: {bird.sciName}</p>
          <p className="bird-info__status">Status: {bird.status}</p>
          <p className="bird-info__region">
            Region:
            {bird.region.map((region, index) => (
              <span key={index} className="bird-info__region-item">
                {index > 0 ? ", " : ""}
                {region}
              </span>
            ))}
          </p>
          <div className="bird-info__images">
            {bird.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Bird ${index + 1}`}
                className="bird-info__image"
              />
            ))}
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default BirdList;
