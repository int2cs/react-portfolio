import React, { useState } from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = (props) => {
  const [title] = useState(props.title);
  const [content] = useState(props.content);
  const [img] = useState(props.img);
  const [link] = useState(props.link);
  const [nbrLikes] = useState(props.nbrLikes);
  const [comments] = useState(props.comments);

  return (
    <section className="card">
      <CardHeader />

      <article className="article">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={"Projet " + title} />
        </a>
        <div className="contenue">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
          </a>
          <p>{content}</p>
        </div>
      </article>

      <CardFooter nbrLike={nbrLikes} comments={comments} />
    </section>
  );
};

export default Card;
