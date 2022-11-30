import React from "react";
import { SupportWrapper } from "./minimalSupport.style";
import PercentageCoverage from "../gradingSection/percentageCoverage";
import ExperienceTextBlock from "../gradingSection/experienceTextBlock";
import data from "../../data/data.json";

const data2 = data[0].acf;
const minimalSupportData = data2.minimalSupportSection;

const MinimalSupportSubSection = () => {
  const subHeading = minimalSupportData.subheading;
  const coverageData = minimalSupportData.percentageCoverage;
  const experienceData = minimalSupportData.experienceParagraph;

  return (
    <SupportWrapper>
      <div className="minSupportLeftSide">
        <div className="minSupportTitle">
          <h3>
            <span>{subHeading.subheadingTop}</span>
            <span className="redDot">{subHeading.subheadingBottom}</span>
          </h3>
        </div>

        <PercentageCoverage
          coverageHeading={coverageData.coverageHeading}
          percentageActual={coverageData.percentageCoverage}
          coverageSubtitle={coverageData.coverageSubtitle}
          coverageFooter={coverageData.coverageFooter}
        />
      </div>
      <div className="minSupportRightSide">
        <ExperienceTextBlock
          experienceBulletPoints={experienceData.experienceBulletPoints}
          experienceDescription={experienceData.experienceDescription}
        />
      </div>
    </SupportWrapper>
  );
};

export default MinimalSupportSubSection;
