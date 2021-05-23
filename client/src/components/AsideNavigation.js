import React from "react";
import { NavLink } from "react-router-dom";

const AsideNavigation = () => {
  return (
    <nav className="sidebar">
      <NavLink exact to="/" className="sidebar-home active">
        Fil d'actualité
      </NavLink>
      <NavLink to="/Messages" className="sidebar-message">
        Messages
      </NavLink>
      <NavLink to="/Events" className="sidebar-event">
        Evènement
      </NavLink>
      <NavLink to="/Groupes" className="sidebar-sites">
        Pages
      </NavLink>
      <NavLink to="/Friends" className="sidebar-group">
        Amis
      </NavLink>
    </nav>
  );
};

export default AsideNavigation;
