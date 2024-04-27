import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [birds, setBirds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBirds = async () => {
    try {
      const response = await axios.get(
        "https://nuthatch.lastelm.software/v2/birds",
        {
          headers: {
            "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
          },
        }
      );
      console.log(response.data);
      setBirds(response.data.entities);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchBirds();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
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
        placeholder="Search by name, scientific name, or region"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredBirds.map((bird) => (
          <li key={bird.id}>
            <h2>{bird.name}</h2>
            <p>Scientific Name: {bird.sciName}</p>
            <p>Region: {bird.region}</p>
            <p>
              Length: {bird.lengthMin} - {bird.lengthMax}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
