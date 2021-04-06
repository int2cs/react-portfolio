import React from "react";
import { AsideNavigation, MainNavigation, AboutMePrez } from "../components";

const AboutMe = () => {
  return (
    <div>
      <MainNavigation />
      <div className="container">
        <AsideNavigation />
        <div className="main">
          {/* Inserer about me */}
          <AboutMePrez />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
