import React, { useContext } from "react";
import {
  LeftSide,
  MobileSectionWrapper,
  RightSide,
  SectionWrapper,
} from "./gradeSection.style";

import ExperienceTextBlock from "../../sections/gradingSection/experienceTextBlock";
import GiantLetterGrade from "../../sections/gradingSection/giantLetterGrade";
import PercentageCoverage from "../../sections/gradingSection/percentageCoverage";
import SectionDivider from "../sectionDivider";
import SupportTable from "../../sections/gradingSection/supportTable";

import DataContext from "../../context/DataContext";

const GradeSection = () => {
  const { data: letterGradeData } = useContext(DataContext);
  const { acf } = letterGradeData;

  return acf ? (
    <>
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
        <div id="BGrade" />
        <SectionDivider />
      </MobileSectionWrapper>
    </>
  ) : (
    <h1>NOT WORKING YET :(</h1>
  );
};

export default GradeSection;
