import React from "react";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const Card = () => {
  return (
    <section className="card">
      <CardHeader />

      <article className="aboutMe">
        <h2>Présentation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum
          iusto et assumenda recusandae, aliquam necessitatibus, maxime, earum
          sit delectus qui. Nemo distinctio architecto fuga impedit at veniam
          quis animi quisquam, ratione ut eveniet quas reiciendis aliquam dolor
          minus aspernatur necessitatibus. Repudiandae molestiae, ullam
          provident sunt unde hic impedit, nobis at atque beatae illo eveniet
          debitis, repellendus totam dolorum. Eveniet ad culpa officia magni
          voluptate, nulla explicabo. Ullam quidem totam quibusdam veritatis eum
          fugiat, nam quo, cupiditate nesciunt, unde hic voluptate? Ipsa iure
          tenetur architecto tempora iste error nam ullam ratione nemo totam,
          iusto nihil recusandae! Iusto tenetur porro fugit ratione itaque non
          quo consequuntur maiores voluptatum eligendi suscipit esse tempore
          repellat quaerat, sit molestiae harum eaque, doloribus quasi. Sit
          repellat voluptates odio esse exercitationem.
        </p>
      </article>

      <CardFooter />
    </section>
  );
};

export default Card;
