import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <header className="app-header">
      <a href="/">Planner</a>
      <nav className="app-nav">
        <ul className="app-nav-list">
          <li className="app-nav-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="app-nav-list-item">
            <NavLink to="profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
