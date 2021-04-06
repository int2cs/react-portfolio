import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CardFooter = (props) => {
  const [nbrLike, setNbrLike] = useState(props.nbrLike);

  return (
    <footer className="main-footer">
      <NavLink
        to="/"
        alt="like"
        className="main-footer-like"
        onClick={() => setNbrLike(nbrLike + 1)}
      >
        {nbrLike} likes
      </NavLink>
      <NavLink to="/" alt="like" className="main-footer-comment">
        0 commentaire
      </NavLink>
    </footer>
  );
};

export default CardFooter;
