// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <h1 className="logo">TheBetZone</h1>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/baseball">Baseball - MLB</Link>
            <img
              src="https://loodibee.com/wp-content/uploads/Major_League_Baseball_MLB_transparent_logo.png"
              alt="MLB Logo"
              className="league-logo"
            />
          </li>
          <li>
            <Link to="/basketball">Basketball - NBA</Link>
            <img
              src="https://i.pinimg.com/originals/90/6e/51/906e51825875defc35d0c15899ddd22d.png"
              alt="NBA Logo"
              className="league-logo"
            />
          </li>
          <li>
            <Link to="/football">American Football - NFL</Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/640px-National_Football_League_logo.svg.png"
              alt="NFL Logo"
              className="league-logo"
            />
          </li>
          <li>
            <Link to="/soccer">Soccer - EPL</Link>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png"
              alt="Soccer Logo"
              className="league-logo"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
