import React from "react";
import { SupportTableStyle } from "./supportTable.style";

import GradeTableTemplate from "../gradeTable";

const SupportTable = ({ desktopData, mobileData }) => {
  return (
    <>
      <SupportTableStyle>
        <GradeTableTemplate
          color={"red"}
          tableHeadingIcon={desktopData.tableHeadingIcon}
          columnHeadingLeft={desktopData.columnHeadingLeft}
          columnHeadingRight={desktopData.columnHeadingRight}
          columnDataLeft={desktopData.columnDataLeft}
          columnDataRight={desktopData.columnDataRight}
        />

        <GradeTableTemplate
          color={"blue"}
          tableHeadingIcon={mobileData.tableHeadingIcon}
          columnHeadingLeft={mobileData.columnHeadingLeft}
          columnHeadingRight={mobileData.columnHeadingRight}
          columnDataLeft={mobileData.columnDataLeft}
          columnDataRight={mobileData.columnDataRight}
        />
      </SupportTableStyle>
    </>
  );
};

export default SupportTable;
