import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./FeaturedContent.scss";

function FeaturedContent() {
  const [randomBirds, setRandomBirds] = useState([]);

  useEffect(() => {
    fetchRandomBirds();
  }, []);

  const fetchRandomBirds = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 8) + 1;
      const response = await axios.get(
        "https://nuthatch.lastelm.software/v2/birds",
        {
          headers: {
            "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
          },
          params: {
            page: randomPage,
            pageSize: 3,
            hasImg: true,
          },
        }
      );
      setRandomBirds(response.data.entities);
    } catch (error) {
      console.error("Error fetching random birds:", error);
    }
  };
  return (
    <div className="featured-content">
      <h2 className="featured-content__title">Avian Spotlight</h2>
      <ul className="featured-content__bird-list">
        {randomBirds.map((bird, index) => (
          <li key={index} className="featured-content__bird-card">
            <Link
              to={`/bird/${bird.id}`}
              className="featured-content__bird-card-link"
            >
              <div className="featured-content__bird-card-content">
                <img
                  className="featured-content__bird-card-content-image"
                  src={bird.images[0]}
                  alt={bird.name}
                />
                <h3 className="featured-content__bird-card-content-name">
                  {bird.name}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedContent;
