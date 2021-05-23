import React from "react";
import CardHeader from "./CardHeader";
import SeeMoreCard from "./SeeMoreCard";

const _Aside = () => {
  return (
    <aside className="aside">
      <CardHeader />

      <article className="article">
        <p className="contenue">
          Passionné d'informatique et ayant commencé la programmation très tôt,
          j'ai décidé de tout plaquer pour me lancer dans une nouvelle aventure.
          <br />
          Mon but : <em>Vivre de ma passion !</em>
        </p>
        <SeeMoreCard />
      </article>
    </aside>
  );
};

export default _Aside;
