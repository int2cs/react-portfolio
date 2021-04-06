import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="topbar">
      <NavLink exact to="/" className="topbar-logo">
        Logo
      </NavLink>

      <nav className="topbar-nav">
        <NavLink exact to="/">
          accueil
        </NavLink>
        <NavLink to="/Historique">historique</NavLink>
        <NavLink to="/Events">evènements</NavLink>
        <NavLink to="/Contact">contact</NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
