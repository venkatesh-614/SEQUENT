import "./Home.css";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <div className="heading">
              <span>SEQUENT</span>
            </div>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/levels">Levels</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
          </li>
          <li>
            <Link to="/chatbot">ChatBot</Link>
          </li>
        </ul>

        <ul className="nav-btns">
          <li>
            <Link to="/profile" className="profile-btn">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
