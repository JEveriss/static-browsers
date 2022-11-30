import React from "react";
import { HeroSection } from "./hero.style";
import heroImage from "../../images/heroBrowser.png";
import data from "../../data/data.json";

const heroData = data[0].acf;

const Hero = () => {
  return (
    <div>
      <HeroSection img={heroImage}>
        <div className="heroContent">
          <img className="hero383Logo" src={heroData.logo} />
          <img className="heroIcon" src={heroData.icon} />
          <p className="heroSuptitle">{heroData.suptitle}</p>
          <h1 className="heroTitle redDot">{heroData.title}</h1>
          <p className="topParagraph">{heroData.heroParagraph1}</p>
          <p className="bottomParagraph">{heroData.heroParagraph2}</p>
        </div>
      </HeroSection>
    </div>
  );
};

export default Hero;
