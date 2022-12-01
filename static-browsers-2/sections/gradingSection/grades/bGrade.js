import React from "react";
import {
  SectionWrapper,
  LeftSide,
  RightSide,
  MobileSectionWrapper,
} from "./gradeGlobal.style.js";

import GiantLetterGrade from "../giantLetterGrade";
import PercentageCoverage from "../percentageCoverage";
import ExperienceTextBlock from "../experienceTextBlock";
import SupportTable from "../supportTable";
import SectionDivider from "../../../components/sectionDivider/index.js";

import data from "../../../data/data.json";
const data2 = data[0].acf;

const BGradeSection = () => {
  const desktopTableData = data2.bGradeSupportTableDesktop;
  const mobileTableData = data2.bGradeSupportTableMobile;
  const gradeData = data2.bGradeSupportDetails;

  const letterData = gradeData.giantLetterGrade;
  const coverageData = gradeData.percentageCoverage;
  const experienceData = gradeData.experienceParagraph;

  return (
    <MobileSectionWrapper>
      <SectionWrapper>
        <LeftSide>
          <GiantLetterGrade
            letterGrade={letterData.letterGrade}
            gradeSubtitle={letterData.gradeSubtitle}
            gradeFooter={letterData.gradeFooter}
          />
          <PercentageCoverage
            coverageHeading={coverageData.coverageHeading}
            percentageActual={coverageData.percentageCoverage}
            coverageSubtitle={coverageData.coverageSubtitle}
            coverageFooter={coverageData.coverageFooter}
          />
        </LeftSide>

        <RightSide>
          <ExperienceTextBlock
            experienceBulletPoints={experienceData.experienceBulletPoints}
            experienceDescription={experienceData.experienceDescription}
          />
        </RightSide>
      </SectionWrapper>

      <SupportTable
        desktopData={desktopTableData}
        mobileData={mobileTableData}
      />
      <div id="CGrade" />
      <SectionDivider />
    </MobileSectionWrapper>
  );
};

export default BGradeSection;
