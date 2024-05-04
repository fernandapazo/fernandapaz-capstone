import { useState, useEffect } from "react";
import "./HomePage.scss";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import BirdList from "../../components/BirdList/BirdList";
import FeaturedContent from "../../components/FeaturedContent/FeaturedContent";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    const requestConfig = {
      method: "get",
      url: "https://nuthatch.lastelm.software/v2/birds",
      headers: {
        "API-Key": "623eb1a1-a5c4-420f-b85b-23df5c497190",
      },
      params: {
        pageSize: 10,
        name: searchTerm,
      },
    };
    setSearchTerm(searchTerm);
    console.log("this should display searchTerm:", searchTerm);

    axios(requestConfig)
      .then((response) => {
        setSearchResults(response.data.entities);

        console.log(response.data.entities);
      })
      .catch((error) => console.error("Error fetching bird data:", error));
  };
  return (
    <div className="homepage">
      <SearchBar onSearch={handleSearch} />
      {/* <SearchBar onSearch={(searchTerm) => setSearchTerm(searchTerm)} /> */}
      {searchResults.length === 0 && <FeaturedContent />}
      <BirdList searchResults={searchResults} />
    </div>
  );
}
export default HomePage;
