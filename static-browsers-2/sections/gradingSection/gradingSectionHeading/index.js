import React from "react";
import { GradingSectionHeadingWrapper } from "./gradingSectionHeading.style";
import data from "../../../data/data.json";

const sectionData = data[0].acf.gradingHeading;

const GradingSectionHeading = () => {
  return (
    <>
      <GradingSectionHeadingWrapper>
        <h2 className="redDot">{sectionData.heading}</h2>
        <p >{sectionData.paragraph1} </p>
        <p id="AGrade"></p>
      </GradingSectionHeadingWrapper>
    </>
  );
};

export default GradingSectionHeading;
