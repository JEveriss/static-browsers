import React, { useContext, useEffect } from "react";
import { FooterWrapper } from "./footer.style";

import DataContext from "../../../context/DataContext";

const Footer = () => {
  const { data: navData } = useContext(DataContext);
  const { acf } = navData;

  useEffect(() => {
    if (acf && window) {
      const footerButton = document.querySelector(".footerButton");

      footerButton.onclick = (event) => {
        event.preventDefault();

        window.scrollTo({ top: "top", behavior: "smooth" });
      };
    }
  }, [acf]);

  return acf ? (
    <FooterWrapper>
      <div className="parent">
        <div className="child" />
        <div className="child">
          <a target="_blank" href="https://www.383project.com/">
            <img className="footerIcon" src={acf.logo} />
          </a>
        </div>
        <div className="child">
          <button className="footerButton">Scroll to Top</button>
        </div>
      </div>
    </FooterWrapper>
  ) : null;
};

export default Footer;
