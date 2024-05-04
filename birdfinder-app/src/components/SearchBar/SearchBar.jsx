import React, { useState } from "react";
import axios from "axios";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    console.log(searchTerm);
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
    </div>
  );
};

export default SearchBar;
