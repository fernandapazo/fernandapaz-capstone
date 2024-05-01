import React, { useState } from "react";
import axios from "axios";
import BirdList from "../BirdList/BirdList";
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
      <div className="search-bar__controls">
        <div className="search-bar__input-wrapper">
          <input
            type="text"
            placeholder="explore birds.."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-bar__input"
          />
        </div>
        <button onClick={handleSearch} className="search-bar__button">
          Search
        </button>
      </div>
      <BirdList searchResults={searchResults} />
    </div>
  );
};

export default SearchBar;
