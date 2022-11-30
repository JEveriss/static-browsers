import React from "react";
import {
  SectionWrapper,
  LeftSide,
  RightSide,
  MobileSectionWrapper,
} from "./gradeSection.style";

import GiantLetterGrade from "../../templates/giantLetterGradeTemplate/giantLetterGrade";
import PercentageCoverage from "../../templates/percentageCoverageTemplate/percentageCoverage";
import ExperienceTextBlock from "../../templates/experienceTextBlockTemplate/experienceTextBlock";
import SupportTable from "../../templates/browserDesktopTable/supportTableTemplate";
import SectionDivider from "../../utils/sectionDivider";
import data from "../../data/data.json";

const aGradeData = data[0].acf;

aGradeSupportDetails
aGradeSupportTableDesktop


const AGradeSection = () => {

  const desktopTableData = data.aGradeSupportTableDesktop;
  const mobileTableData = data.aGradeSupportTableMobile;
  const gradeData = data.aGradeSupportDetails;

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
      <div id="BGrade" />
      <SectionDivider />
    </MobileSectionWrapper>
  );
};

export default AGradeSection;
