import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BirdDetails() {
  const { id } = useParams();
  const [bird, setBird] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBirdDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://nuthatch.lastelm.software/birds/${id}`,
          {
            headers: {
              "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
            },
          }
        );
        setBird(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bird details:", error);
        setLoading(false);
      }
    };

    fetchBirdDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bird) {
    return <div>Bird not found</div>;
  }

  return (
    <div>
      <h1>Bird Details for Bird ID</h1>
      <h2>{bird.name}</h2>
      <p>Scientific Name: {bird.sciName}</p>
    </div>
  );
}

export default BirdDetails;
