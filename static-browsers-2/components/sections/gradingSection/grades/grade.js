import React from "react";
import {
  LeftSide,
  MobileSectionWrapper,
  RightSide,
  SectionWrapper,
  SubTextBox,
} from "./gradeGlobal.style.js";

import ExperienceTextBlock from "../experienceTextBlock";
import GiantLetterGrade from "../giantLetterGrade";
import PercentageCoverage from "../percentageCoverage";
import SectionDivider from "../../../sectionDivider/index";
import SupportTable from "../supportTable";

const GradeSection = ({
  gradeSupportDetails,
  gradeSupportTableDesktop,
  gradeSupportTableMobile,
  letter,
}) => {
  return (
    <MobileSectionWrapper>
      <div id={`${letter}Grade`} />
      <SectionWrapper>
        <LeftSide>
          <GiantLetterGrade
            letterGrade={gradeSupportDetails.giantLetterGrade.letterGrade}
            gradeSubtitle={gradeSupportDetails.giantLetterGrade.gradeSubtitle}
            gradeFooter={gradeSupportDetails.giantLetterGrade.gradeFooter}
          />

          <PercentageCoverage
            coverageHeading={
              gradeSupportDetails.percentageCoverage.coverageHeading
            }
            percentageActual={
              gradeSupportDetails.percentageCoverage.percentageCoverage
            }
            coverageSubtitle={
              gradeSupportDetails.percentageCoverage.coverageSubtitle
            }
            coverageFooter={
              gradeSupportDetails.percentageCoverage.coverageFooter
            }
          />
        </LeftSide>

        <RightSide>
          <ExperienceTextBlock
            experienceBulletPoints={
              gradeSupportDetails.experienceParagraph.experienceBulletPoints
            }
            experienceDescription={
              gradeSupportDetails.experienceParagraph.experienceDescription
            }
          />
        </RightSide>
      </SectionWrapper>

      <SupportTable
        desktopData={gradeSupportTableDesktop}
        mobileData={gradeSupportTableMobile}
      />
      <SubTextBox className="greyText">
        {gradeSupportDetails.additionalText}
      </SubTextBox>

      <SectionDivider />
    </MobileSectionWrapper>
  );
};

export default GradeSection;
