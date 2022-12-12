import React, { useContext } from "react";
import { FooterWrapper } from "./footer.style";
import DataContext from "../../../context/DataContext";

const Footer = () => {
  const { data: navData } = useContext(DataContext);
  const { acf } = navData;
  return acf ? (
    <>
      <FooterWrapper>
        <div>
          <a target="_blank" href="https://www.383project.com/">
            <img className="footerIcon" src={acf.logo} />
          </a>
          {/* <button>
            <a href={"#TopOfPage"}>scroll2top</a>
          </button> */}
        </div>
      </FooterWrapper>
    </>
  ) : null;
};

export default Footer;
