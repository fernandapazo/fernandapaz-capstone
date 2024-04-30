import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    const requestConfig = {
      method: "get",
      url: "https://nuthatch.lastelm.software/v2/birds",
      headers: {
        "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
      },
      params: {
        pageSize: 25,
        name: searchTerm,
      },
    };

    axios(requestConfig)
      .then((response) => {
        setSearchResults(response.data.entities);
        console.log(response.data.entities);
      })
      .catch((error) => console.error("Error fetching bird data:", error));
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <h1 className="search-bar__title">Discover the World of Birds</h1>
      <div className="search-bar__input-wrapper">
        <input
          type="text"
          placeholder="explore birds, explore life.."
          value={searchTerm}
          onChange={handleInputChange}
          className="search-bar__input"
        />
      </div>
      <button onClick={handleSearch} className="search-bar__button">
        Search
      </button>
      <ul className="bird-list">
        {searchResults.map((bird, index) => (
          <li key={index} className="bird-list__item">
            <div className="bird-info">
              <h2 className="bird-info__name">{bird.name}</h2>
              <p className="bird-info__sci-name">
                Scientific Name: {bird.sciName}
              </p>
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
    </div>
  );
};

export default SearchBar;
