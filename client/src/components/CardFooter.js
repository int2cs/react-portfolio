import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Comments from "./Comments";

const CardFooter = (props) => {
  const [nbrLike, setNbrLike] = useState(props.nbrLike);
  const [comments] = useState(props.comments);
  const [boolDisplayComments, setBoolDisplayComment] = useState(false);

  return (
    <footer className="main-footer">
      <div className="actions">
        <NavLink
          to="/"
          alt="like"
          className="main-footer-like"
          onClick={() => setNbrLike(nbrLike + 1)}
        >
          {nbrLike} likes
        </NavLink>
        <NavLink to="/" alt="like" className="main-footer-comment">
          <span
            onClick={() => {
              setBoolDisplayComment(!boolDisplayComments);
            }}
          >
            {comments.length} commentaire{comments.length > 1 ? "s" : ""}
          </span>
        </NavLink>
      </div>
      {boolDisplayComments && <Comments comments={comments} />}
    </footer>
  );
};

export default CardFooter;
