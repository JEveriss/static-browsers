import React from "react";
import { NavWrapper } from "./navBar.style";
import Image from "next/image";
import heroLogo from "../../images/383Logo.png";
import Glossary from "../../components/glossary";
import data from "../../data/data.json";

const navData = data[0].acf.navBar;

const NavBar = () => {
  return (
    <NavWrapper>
      <div>
        <Image className="navIcon" alt="383 Logo" src={heroLogo} />
      </div>
      {navData.map((item, index) => {
        return (
          <div key={`navElement${index}`}>
            <a href={item.navLink}>{item.navItem}</a>
          </div>
        );
      })}

      <Glossary />

    </NavWrapper>
  );
};

export default NavBar;
