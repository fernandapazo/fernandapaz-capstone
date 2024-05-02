import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage({ searchResults }) {
  return (
    <div>
      {/* <h1>BirdFinder Home Page</h1> */}
      <SearchBar />
    </div>
  );
}
export default HomePage;
