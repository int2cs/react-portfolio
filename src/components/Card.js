import React from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = () => {
  return (
    <section className="card">
      <CardHeader />

      <article className="article">
        <img src="./img/image.jpg" alt="Projet" />
        <p className="contenue">
          Hey ! Salut jeune recruteur.euse.
          <br />
          Bienvenue sur mon PortfolioSocial. Le but de ce reseaux est de vous
          présenter une partie de mon travail que j'ai réalisé dans le cadre de
          ma formation <strong>Développeur Web & Web Mobile</strong>.<br />
          N'hésitez pas à vous balader, plusieurs fun facts sont très
          probablement dissimulés ici et là.
        </p>
      </article>

      <CardFooter like="Chuck Norris" />
    </section>
  );
};

export default Card;
