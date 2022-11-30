import React from "react";
import { GradeTable, TableData } from "./gradeTable.style";

const GradeTableTemplate = ({
  color,
  tableHeadingIcon,
  columnHeadingLeft,
  columnDataLeft,
  columnHeadingRight,
  columnDataRight,
}) => {
  return (
    <GradeTable>
      <div className={`${color}TableHeading`}>
        <img src={tableHeadingIcon} />{" "}
      </div>
      <TableData>
        <div className="tableColumn">
          <h3 className={`${color}ColumnTitle`}>{columnHeadingLeft}</h3>
          {columnDataLeft.map((column, index) => {
            return (
              <div className="tableItem" key={`leftColumn${index}`}>
                <img src={column.columnDataIcon} />
                <p>{column.columnDataText}</p>
              </div>
            );
          })}
        </div>
        <div className="tableColumn">
          <h3 className={`${color}ColumnTitle`}>{columnHeadingRight}</h3>
          {columnDataRight.map((column, index) => {
            return (
              <div className="tableItem" key={`rightColumn${index}`}>
                <img src={column.columnDataIcon} />
                <p>{column.columnDataText}</p>
              </div>
            );
          })}
        </div>
      </TableData>
    </GradeTable>
  );
};

export default GradeTableTemplate;
