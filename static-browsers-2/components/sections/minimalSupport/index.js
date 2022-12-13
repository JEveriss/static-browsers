import React, { useContext } from "react";
import { SupportWrapper } from "./minimalSupport.style";

import PercentageCoverage from "../gradingSection/percentageCoverage";
import ExperienceTextBlock from "../gradingSection/experienceTextBlock";

import DataContext from "../../../context/DataContext";

const MinimalSupportSubSection = () => {
  const { data: minSupportData } = useContext(DataContext);
  const { acf } = minSupportData;

  return acf ? (
    <SupportWrapper>
      <div id="MinimalSupport" className="minSupportLeftSide">
        <div className="minSupportTitle">
          <h3>
            <span>{acf.minimalSupportSection.subheading.subheadingTop}</span>
            <span className="redDot">
              {acf.minimalSupportSection.subheading.subheadingBottom}
            </span>
          </h3>
        </div>

        <PercentageCoverage
          coverageHeading={
            acf.minimalSupportSection.percentageCoverage.coverageHeading
          }
          percentageActual={
            acf.minimalSupportSection.percentageCoverage.percentageCoverage
          }
          coverageSubtitle={
            acf.minimalSupportSection.percentageCoverage.coverageSubtitle
          }
          coverageFooter={
            acf.minimalSupportSection.percentageCoverage.coverageFooter
          }
        />
      </div>
      <div className="minSupportRightSide">
        <ExperienceTextBlock
          experienceBulletPoints={
            acf.minimalSupportSection.experienceParagraph.experienceBulletPoints
          }
          experienceDescription={
            acf.minimalSupportSection.experienceParagraph.experienceDescription
          }
        />
      </div>
    </SupportWrapper>
  ) : null;
};

export default MinimalSupportSubSection;
