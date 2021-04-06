import React, { useState } from "react";
import {
  Aside,
  Card,
  AsideNavigation,
  MainNavigation,
  CardHeader,
  CardFooter,
} from "../components";
import { bdd } from "../bdd";

const Home = () => {
  const [data] = useState(bdd);
  return (
    <div>
      <MainNavigation />
      <div className="container">
        <AsideNavigation />
        <div className="main">
          {data.map((res) => (
            <section className="card">
              <CardHeader />
              <article className="article">
                <img src={res.image} alt="Projet" />
                <div className="contenue">
                  <h3>{res.name}</h3>
                  <p>{res.description}</p>
                </div>
              </article>
              <CardFooter nbrLike={res.like} />
            </section>
          ))}
          <Card />
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Home;
