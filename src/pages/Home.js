import React, { useState } from "react";
import { Aside, AsideNavigation, MainNavigation, Card } from "../components";
import { bdd } from "../bdd";

const Home = () => {
  const [data] = useState(bdd);
  return (
    <div>
      <MainNavigation />
      <div className="container">
        <AsideNavigation />
        <div className="main">
          {data.map((res, index) => (
            <Card
              key={index}
              title={res.name}
              content={res.description}
              img={res.image}
              link={res.link}
              nbrLikes={res.like}
              comments={res.comments}
            />
          ))}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Home;
