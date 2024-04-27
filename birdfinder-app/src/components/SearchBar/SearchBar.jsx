import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [birds, setBirds] = useState([]);

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

  return (
    <div>
      <h1>List of Birds</h1>
      <ul>
        {birds.map((bird) => (
          <li key={bird.id}>{bird.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
