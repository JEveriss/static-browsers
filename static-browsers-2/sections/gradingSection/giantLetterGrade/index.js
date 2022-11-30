import React from "react";
import { GiantLetterGradeStyle } from "./giantLetterGrade.style";

const GiantLetterGrade = ({ letterGrade, gradeSubtitle, gradeFooter }) => {
  return (
    <GiantLetterGradeStyle>
      {letterGrade && <p className="grade">{letterGrade}</p>}
      <div>
        <p className="subtitle">{gradeSubtitle}</p>
        <p className="footer">{gradeFooter}</p>
      </div>
    </GiantLetterGradeStyle>
  );
};

export default GiantLetterGrade;
