import React from "react";
import { HeroSection } from "./hero.style";
import heroLogo from "../../images/383Logo.png";
import heroIcon from "../../images/heroIcon.png";
import heroImage from "../../images/heroBrowser.png";
import data from "../../data/data.json";
import Image from "next/image";

const heroData = data[0].acf;

const Hero = () => {

  return (
    <div>
      <HeroSection img={heroImage}>
        <div className="heroContent">
          <Image
            className="hero383Logo"
            alt="383 Logo"
            src={heroLogo}
          />
          <Image
            className="heroIcon"
            alt="icon"
            src={heroIcon}
          />
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
