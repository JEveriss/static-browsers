import React, { useContext } from "react";
import { HeroSection } from "./hero.style";
import DataContext from "../../../context/DataContext";

const Hero = () => {
  const { data: heroData } = useContext(DataContext);
  const { acf } = heroData;

  return acf ? (
    <div>
      <HeroSection img={acf.heroImage}>
        <div className="heroContent">
          <img className="hero383Logo" src={acf.logo} />
          <img className="heroIcon" src={acf.icon} />
          <p className="heroSuptitle">{acf.suptitle}</p>
          <h1 className="heroTitle redDot">{acf.title}</h1>
          <p className="topParagraph">{acf.heroParagraph1}</p>
          <p className="bottomParagraph">{acf.heroParagraph2}</p>
        </div>
      </HeroSection>
    </div>
  ) : null;
};

export default Hero;
