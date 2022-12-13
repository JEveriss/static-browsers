import React, { useContext } from "react";
import { NavWrapper } from "./navBar.style";

import Glossary from "../../../components/glossary";

import DataContext from "../../../context/DataContext";

const NavBar = () => {
  const { data: navData } = useContext(DataContext);
  const { acf } = navData;
console.log(acf)
  return acf ? (
    <NavWrapper>
      <div>
        <img className="navIcon" alt="383 Logo" src={acf.logo} />
      </div>
      {acf.navBar.map((item, index) => {
        return (
          <div key={`navElement${index}`}>
            <a href={item.navLink}>{item.navItem}</a>
          </div>
        );
      })}

      <Glossary />
    </NavWrapper>
  ) : null;
};

export default NavBar;
