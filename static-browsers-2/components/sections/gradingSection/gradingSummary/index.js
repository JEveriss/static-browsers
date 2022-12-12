import React, { useContext } from "react";
import { css } from "styled-components";
import { BreakdownChart, GradingSummaryWrapper } from "./gradingSummary.style";
import { ChartBase } from "../../../barChart";

import DataContext from "../../../../context/DataContext";

export const GradingChartColumn = ({ label, percentage, className }) => {
  return (
    <div
      className={className}
      size={percentage}
      css={css`
        height: calc(${percentage}px * 3);
      `}>
      <p>{percentage}%</p>
      <span className="chartTitle">{label}</span>
    </div>
  );
};

const GradingSummary = () => {
  const { data: gradingData } = useContext(DataContext);
  const { acf } = gradingData;

  return acf ? (
    <>
      {acf && (
        <GradingSummaryWrapper>
          <h2 className="redDot">{acf.gradingSummaryTitle}</h2>

          <BreakdownChart>
            <GradingChartColumn
              className="leftColumn"
              percentage={Number(acf.gradingSummaryTable[0].gradeAPercentage)}
              label={acf.gradingSummaryTable[0].gradeA}
            />
            <GradingChartColumn
              className="centerColumn"
              percentage={Number(acf.gradingSummaryTable[0].gradeBPercentage)}
              label={acf.gradingSummaryTable[0].gradeB}
            />
            <GradingChartColumn
              className="rightColumn"
              percentage={Number(acf.gradingSummaryTable[0].gradeCPercentage)}
              label={acf.gradingSummaryTable[0].gradeC}
            />

            <ChartBase width={"38rem"} />
          </BreakdownChart>
        </GradingSummaryWrapper>
      )}
    </>
  ) : null;
};

export default GradingSummary;
