import React, { useContext } from "react";
import {
  SectionWrapper,
  LeftSide,
  RightSide,
  MobileSectionWrapper,
  SubTextBox,
} from "./gradeGlobal.style.js";

import GiantLetterGrade from "../giantLetterGrade";
import PercentageCoverage from "../percentageCoverage";
import ExperienceTextBlock from "../experienceTextBlock";
import SupportTable from "../supportTable";
import SectionDivider from "../../../sectionDivider/index.js";
import DataContext from "../../../../context/DataContext.js";

const CGradeSection = () => {
  const { data: tableData } = useContext(DataContext);
  const { acf } = tableData;

  return acf ? (
    <MobileSectionWrapper>
      <SectionWrapper>
        <LeftSide>
          <GiantLetterGrade
            letterGrade={acf.cGradeSupportDetails.giantLetterGrade.letterGrade}
            gradeSubtitle={
              acf.cGradeSupportDetails.giantLetterGrade.gradeSubtitle
            }
            gradeFooter={acf.cGradeSupportDetails.giantLetterGrade.gradeFooter}
          />

          <PercentageCoverage
            coverageHeading={
              acf.cGradeSupportDetails.percentageCoverage.coverageHeading
            }
            percentageActual={
              acf.cGradeSupportDetails.percentageCoverage.percentageCoverage
            }
            coverageSubtitle={
              acf.cGradeSupportDetails.percentageCoverage.coverageSubtitle
            }
            coverageFooter={
              acf.cGradeSupportDetails.percentageCoverage.coverageFooter
            }
          />
        </LeftSide>

        <RightSide>
          <ExperienceTextBlock
            experienceBulletPoints={
              acf.cGradeSupportDetails.experienceParagraph
                .experienceBulletPoints
            }
            experienceDescription={
              acf.cGradeSupportDetails.experienceParagraph.experienceDescription
            }
          />
        </RightSide>
      </SectionWrapper>
      <SupportTable
        desktopData={acf.cGradeSupportTableDesktop}
        mobileData={acf.cGradeSupportTableMobile}
      />
      <SubTextBox className="greyText">
        {acf.cGradeSupportDetails.additionalText}
      </SubTextBox>
      <div id="MinimalSupport" />
      <SectionDivider />
    </MobileSectionWrapper>
  ) : null;
};

export default CGradeSection;
