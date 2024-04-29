import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [birds, setBirds] = useState([]);
  // const API_KEY = "623eb1a1-a5c4-420f-b85b-23df5c497190";

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "https://nuthatch.lastelm.software/v2/birds?pageSize=100",
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
    <div>
      <h1>List of Birds</h1>
      <input
        type="text"
        placeholder="Search birds..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredBirds.map((bird) => (
          <li key={bird.id}>
            <div>
              <h2>{bird.name}</h2>
              <p>Scientific Name: {bird.sciName}</p>
              <p>Status: {bird.status}</p>
              {/* <div>
                {bird.images.map((image, index) => (
                  <img key={index} src={image} alt={`Bird ${index + 1}`} />
                ))}
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
