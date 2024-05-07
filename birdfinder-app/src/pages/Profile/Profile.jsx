import FavoritesList from "../../components/FavoritesList/FavoritesList";
import "./Profile.scss";

//FavoritesList

function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">My Favorites</h1>
      <FavoritesList />
    </div>
  );
}
export default Profile;
