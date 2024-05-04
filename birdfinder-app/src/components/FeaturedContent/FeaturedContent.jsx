import { useState, useEffect } from "react";
import axios from "axios";

function FeaturedContent() {
  const [randomBirds, setRandomBirds] = useState([]);

  useEffect(() => {
    fetchRandomBirds();
  }, []);

  const fetchRandomBirds = async () => {
    try {
      const randomPage = Math.floor(Math.random() * 5) + 1;
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
      <h2 className="homepage__title">Featured Content</h2>
      <ul className="homepage__bird-list">
        {randomBirds.map((bird, index) => (
          <li key={index} className="homepage__bird-list-item">
            <div className="homepage__bird-list-item-wrapper">
              <h3 className="homepage__bird-list-item-name">{bird.name}</h3>
              <img
                className="homepage__bird-list-item-image"
                src={bird.images[0]}
                alt={bird.name}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturedContent;
