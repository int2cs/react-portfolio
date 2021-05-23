import React, { useState } from "react";

const Comments = (props) => {
  const [comments] = useState(props.comments);

  return (
    <div className="comments">
      {comments.map((comment, index) => (
        <div key={index} className="comments-content">
          <img className="avatar" src="./img/avatarDefault.png" alt="avatar" />
          <div className="comments-text">
            <h5>{comment.author}</h5>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
