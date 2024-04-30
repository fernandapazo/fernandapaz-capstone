import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">BirdFinder</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i>
            </a>
          </li>
          {/* Replace the <i> tag with your user profile icon */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
