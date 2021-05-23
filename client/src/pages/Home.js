import React, { useEffect, useState } from "react";
import { Aside, AsideNavigation, MainNavigation, Card } from "../components";
// import { bdd } from "../bdd";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3050/").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <MainNavigation />
      <div className="container">
        <embed src="" type="" />
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
      <embed src="" type="" />
    </div>
  );
};

export default Home;
