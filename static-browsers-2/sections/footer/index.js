import React from "react";
import { FooterWrapper } from "./footer.style";
import heroLogo from "../../images/383Logo.png"
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div>
          <a target="_blank" href="https://www.383project.com/">
            <Image className="footerIcon" alt="383 Logo" src={heroLogo} />
          </a>
          {/* <button>
            <a href={"#TopOfPage"}>scroll2top</a>
          </button> */}
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
