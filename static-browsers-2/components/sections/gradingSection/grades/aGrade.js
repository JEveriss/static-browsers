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

const AGradeSection = () => {
  const { data: tableData } = useContext(DataContext);
  const { acf } = tableData;

  return acf ? (
    <MobileSectionWrapper>
      <SectionWrapper>
        <LeftSide>
          <GiantLetterGrade
            letterGrade={acf.aGradeSupportDetails.giantLetterGrade.letterGrade}
            gradeSubtitle={
              acf.aGradeSupportDetails.giantLetterGrade.gradeSubtitle
            }
            gradeFooter={acf.aGradeSupportDetails.giantLetterGrade.gradeFooter}
          />

          <PercentageCoverage
            coverageHeading={
              acf.aGradeSupportDetails.percentageCoverage.coverageHeading
            }
            percentageActual={
              acf.aGradeSupportDetails.percentageCoverage.percentageCoverage
            }
            coverageSubtitle={
              acf.aGradeSupportDetails.percentageCoverage.coverageSubtitle
            }
            coverageFooter={
              acf.aGradeSupportDetails.percentageCoverage.coverageFooter
            }
          />
        </LeftSide>

        <RightSide>
          <ExperienceTextBlock
            experienceBulletPoints={
              acf.aGradeSupportDetails.experienceParagraph
                .experienceBulletPoints
            }
            experienceDescription={
              acf.aGradeSupportDetails.experienceParagraph.experienceDescription
            }
          />
        </RightSide>
      </SectionWrapper>

      <SupportTable
        desktopData={acf.aGradeSupportTableDesktop}
        mobileData={acf.aGradeSupportTableMobile}
      />
      <div id="BGrade" />
      <SectionDivider />
    </MobileSectionWrapper>
  ) : null;
};

export default AGradeSection;
