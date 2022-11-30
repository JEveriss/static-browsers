import React from "react";
import { NavWrapper } from "./navBar.style";
import Image from "next/image";
import heroLogo from "../../images/383Logo.png"
// import Glossary from "../utils/glossary";
import data from "../../data/data.json";

const data2 = data[0].acf.navBar;

const NavBar = () => {
  console.log(data2)
  return (
    <NavWrapper>
      <div>
        <Image className="navIcon" alt="383 Logo" src={heroLogo} />
      </div>
      {data2.map((i, index) => {
        return (
          <div key={`navElement${index}`}>
            <a href={i.navLink}>{i.navItem}</a>
          </div>
        );
      })}
      <div className="hide">
        {/* <>
          <a onClick={actions.theme.toggleGlossary}>Glossary</a>
          {state.theme.isGlossaryVisible && <Glossary />}
        </> */}
        Glossary
      </div>
    </NavWrapper>
  );
};

export default NavBar;
