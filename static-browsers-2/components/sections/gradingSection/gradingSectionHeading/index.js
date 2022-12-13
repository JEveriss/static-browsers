import React, { useContext } from "react";
import { GradingSectionHeadingWrapper } from "./gradingSectionHeading.style";

import DataContext from "../../../../context/DataContext";

const GradingSectionHeading = () => {
  const { data: sectionData } = useContext(DataContext);
  const { acf } = sectionData;

  return acf ? (
    <>
      <GradingSectionHeadingWrapper>
        <h2 className="redDot">{acf.gradingHeading.heading}</h2>
        <p>
          {acf.gradingHeading.paragraph1} <span id="AGrade"></span>
        </p>
      </GradingSectionHeadingWrapper>
    </>
  ) : null;
};

export default GradingSectionHeading;
