import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [birds, setBirds] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://nuthatch.lastelm.software/v2/birds",

        {
          headers: {
            "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
          },
        }
      );
      setBirds(response.data.entities);
      console.log(response.data.entities);
    } catch (error) {
      console.error("Error fetching birds:", error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBirds = birds.filter((bird) => {
    return (
      bird.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bird.sciName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bird.region.some((region) =>
        region.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  });

  return (
    <div className="search-bar">
      <h1 className="search-bar__title">List of Birds</h1>
      <input
        type="text"
        placeholder="Search birds..."
        value={searchQuery}
        onChange={handleChange}
        className="search-bar__input"
      />
      <button onClick={() => handleSearch(1)} className="search-bar__button">
        Search
      </button>
      <ul className="bird-list">
        {filteredBirds.map((bird, index) => (
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
