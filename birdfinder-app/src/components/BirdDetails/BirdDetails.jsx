import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./BirdDetails.scss";

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
        console.log(response.data);
        console.log(response.data.recordings);
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Low Concern":
        return "status-green";
      case "Common Bird in Steep Decline":
        return "status-yellow";
      case "Red Watch List":
        return "status-red";
      default:
        return "";
    }
  };

  return (
    <div className="bird-details">
      <h1 className="bird-details__title">{bird.name}</h1>
      <FavoriteButton id={id} birdName={bird.name} />
      <div className="bird-details__info">
        <h3 className="bird-details__subtitle">Scientific Name</h3>
        <p className="bird-details__sci-name"> {bird.sciName}</p>
        <h3 className="bird-details__subtitle">Family Name</h3>
        <p className="bird-details__family"> {bird.family}</p>
        <h3 className="bird-details__subtitle">Wing Span Max</h3>
        <p className="bird-details__wing-span-max">{bird.lengthMax}</p>
        <h3 className="bird-details__subtitle">Wing Span Min</h3>
        <p className="bird-details__wing-span-min"> {bird.lengthMin}</p>
        <h3 className="bird-details__subtitle">Status</h3>
        <p className={`bird-details__status ${getStatusColor(bird.status)}`}>
          {" "}
          {bird.status}
        </p>
        <h3 className="bird-details__subtitle">Region</h3>
        <p className="bird-details__region">
          {bird.region.map((region, index) => (
            <span key={index} className="bird-details__region-item">
              {index > 0 ? ", " : ""}
              {region}
            </span>
          ))}
        </p>
        <h3 className="bird-details__subtitle">Images</h3>
        <div className="bird-details__images">
          {bird.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Bird ${index + 1}`}
              className="bird-details__images-item"
            />
          ))}
        </div>
      </div>
      <div className="bird-details__recordings">
        <h2 className="bird-details__recordings-title">Recordings</h2>
        <AudioPlayer />
      </div>
    </div>
  );
}

export default BirdDetails;
