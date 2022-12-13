import React, { useContext, useEffect } from "react";
import { NavWrapper } from "./navBar.style";

import Glossary from "../../../components/glossary";

import DataContext from "../../../context/DataContext";

const NavBar = () => {
  const { data: navData } = useContext(DataContext);
  const { acf } = navData;

  useEffect(() => {
    if (acf && window) {
      // selecting all a tags inside navElements -> line 44
      const navElements = document.querySelectorAll(".navElements a");
      // each nav element gets an event assigned to their onclick parameter -> line 20
      navElements.forEach((navElement) => {
        // onclick gives an event
        navElement.onclick = (event) => {
          event.preventDefault();
          const offSet = 100;
          // create the element to scroll to
          const targetElement = document.querySelector(
            // 'data-    ' is grouped inside dataset -> line 44
            navElement.dataset.target
          );
            // find the element's position on the screen - ClientRect = Rectangle 
          const elementPosition = targetElement.getBoundingClientRect().top;
          
          const scrollAmount = elementPosition + window.scrollY - offSet;
          window.scrollTo({ top: scrollAmount, behavior: "smooth" });
        };
      });
    }
  }, [acf]);

  return acf ? (
    <NavWrapper>
      <div>
        <img className="navIcon" alt="383 Logo" src={acf.logo} />
      </div>
      {acf.navBar.map((item, index) => {
        return (
          <div className="navElements" key={`navElement${index}`}>
            <a href={item.navLink} data-target={item.navLink}>
              {item.navItem}
            </a>
          </div>
        );
      })}

      <Glossary />
    </NavWrapper>
  ) : null;
};

export default NavBar;
