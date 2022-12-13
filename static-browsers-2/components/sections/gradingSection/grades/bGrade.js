import React, { useContext } from "react";
import {
  LeftSide,
  MobileSectionWrapper,
  RightSide,
  SectionWrapper,
} from "./gradeGlobal.style.js";

import ExperienceTextBlock from "../experienceTextBlock";
import GiantLetterGrade from "../giantLetterGrade";
import PercentageCoverage from "../percentageCoverage";
import SectionDivider from "../../../sectionDivider/index";
import SupportTable from "../supportTable";

import DataContext from "../../../../context/DataContext";

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
