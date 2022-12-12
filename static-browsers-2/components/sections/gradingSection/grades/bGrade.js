import React, { useContext } from "react";
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
import SectionDivider from "../../../sectionDivider/index.js";
import DataContext from "../../../../context/DataContext.js";

const BGradeSection = () => {
  const { data: tableData } = useContext(DataContext);
  const { acf } = tableData;

  return acf ? (
    <MobileSectionWrapper>
      <SectionWrapper>
        <LeftSide>
          <GiantLetterGrade
            letterGrade={acf.bGradeSupportDetails.giantLetterGrade.letterGrade}
            gradeSubtitle={
              acf.bGradeSupportDetails.giantLetterGrade.gradeSubtitle
            }
            gradeFooter={acf.bGradeSupportDetails.giantLetterGrade.gradeFooter}
          />

          <PercentageCoverage
            coverageHeading={
              acf.bGradeSupportDetails.percentageCoverage.coverageHeading
            }
            percentageActual={
              acf.bGradeSupportDetails.percentageCoverage.percentageCoverage
            }
            coverageSubtitle={
              acf.bGradeSupportDetails.percentageCoverage.coverageSubtitle
            }
            coverageFooter={
              acf.bGradeSupportDetails.percentageCoverage.coverageFooter
            }
          />
        </LeftSide>

        <RightSide>
          <ExperienceTextBlock
            experienceBulletPoints={
              acf.bGradeSupportDetails.experienceParagraph
                .experienceBulletPoints
            }
            experienceDescription={
              acf.bGradeSupportDetails.experienceParagraph.experienceDescription
            }
          />
        </RightSide>
      </SectionWrapper>

      <SupportTable
        desktopData={acf.bGradeSupportTableDesktop}
        mobileData={acf.bGradeSupportTableMobile}
      />
      <div id="CGrade" />
      <SectionDivider />
    </MobileSectionWrapper>
  ) : null;
};

export default BGradeSection;
