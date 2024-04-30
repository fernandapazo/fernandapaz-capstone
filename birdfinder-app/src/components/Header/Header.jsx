import React from "react";
import BirdFinderLogo from "../../assets/BirdFinder-logo.png";
import userPic from "../../assets/use ph image copy.jpg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo-img" src={BirdFinderLogo} />
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Search
              </a>
            </li>
            <div className="header__nav-item-wrapper">
              <li className="header__nav-item">
                <a href="#">
                  <img className="header__user-icon" src={userPic} />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
