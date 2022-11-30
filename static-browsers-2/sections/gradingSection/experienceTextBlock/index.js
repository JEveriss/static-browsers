import React from "react";

import { ExperienceTextBlockStyle } from "./experienceTextBlock.style";

const ExperienceTextBlock = ({
  experienceDescription,
  experienceBulletPoints,
}) => {
  return (
    <ExperienceTextBlockStyle>
      <h3>{experienceDescription}</h3>
      <ul>
        {experienceBulletPoints.map((exp, index) => {
          return <li key={`bulletPoint${index}`}>{exp.bulletPoint}</li>;
        })}
      </ul>
    </ExperienceTextBlockStyle>
  );
};

export default ExperienceTextBlock;
