import React from "react";
import { Link } from "react-router-dom";
import BirdFinderLogo from "../../assets/Images/BirdFinderApp-logo.png";
import userPic from "../../assets/Images/use ph image copy.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo-img" src={BirdFinderLogo} />
          <h2 className="header__logo-text">BIRDFINDER</h2>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link to="/" className="header__nav-link">
                Search
              </Link>
            </li>
            <div className="header__nav-item-wrapper">
              <li className="header__nav-item">
                <Link to="/profile" className="header__nav-link">
                  <img className="header__user-icon" src={userPic} />
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
