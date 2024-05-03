import { useState, useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage({ searchResults }) {
  const [randomBirds, setRandomBirds] = useState([]);

  useEffect(() => {
    fetchRandomBirds();
  }, []);

  const fetchRandomBirds = async () => {
    try {
      const response = await axios.get(
        "https://nuthatch.lastelm.software/v2/birds",
        {
          headers: {
            "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
          },
          params: {
            page: 5,
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
    <div className="homepage">
      <SearchBar />
      <div className="homepage__container">
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
    </div>
  );
}
export default HomePage;
