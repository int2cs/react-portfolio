import React from "react";
import { NavLink } from "react-router-dom";

const SeeMoreCard = () => {
  return (
    <div className="seeMoreCard">
      <NavLink to="/AboutMe">Voir plus...</NavLink>
    </div>
  );
};

export default SeeMoreCard;
