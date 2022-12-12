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
