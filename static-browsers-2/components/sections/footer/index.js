import React, { useContext } from "react";
import { FooterWrapper } from "./footer.style";

import DataContext from "../../../context/DataContext";

const Footer = () => {
  const { data: navData } = useContext(DataContext);
  const { acf } = navData;

  return acf ? (
    <>
      <FooterWrapper>
        <div className="parent">
          <div className="child" />
          <div className="child">
            <a target="_blank" href="https://www.383project.com/">
              <img className="footerIcon" src={acf.logo} />
            </a>
          </div>
          <div className="child">
            <div className="buttonWrapper">
              <button>
                <a href={"#Top"}>Scroll to Top</a>
              </button>
            </div>
          </div>
        </div>
      </FooterWrapper>
    </>
  ) : null;
};

export default Footer;
