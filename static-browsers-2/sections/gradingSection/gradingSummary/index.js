import React from "react";
import { css } from "styled-components";
import { BreakdownChart, GradingSummaryWrapper } from "./gradingSummary.style";
import { ChartBase } from "../../../components/barChart/barChart.style";
import data from "../../../data/data.json";

const gradingData = data[0].acf.gradingSummaryTable[0];
const data2 = data[0].acf;

const GradingChartColumn = ({ label, percentage, className }) => {
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
  return (
    <GradingSummaryWrapper>
      <h2 className="redDot">{data2.gradingSummaryTitle}</h2>

      <BreakdownChart>
        {gradingData && (
          <>
            <GradingChartColumn
              className="leftColumn"
              percentage={Number(gradingData.gradeAPercentage)}
              label={gradingData.gradeA}
            />
            <GradingChartColumn
              className="centerColumn"
              percentage={Number(gradingData.gradeBPercentage)}
              label={gradingData.gradeB}
            />
            <GradingChartColumn
              className="rightColumn"
              percentage={Number(gradingData.gradeCPercentage)}
              label={gradingData.gradeC}
            />
          </>
        )}
        <ChartBase width={"40rem"} />
      </BreakdownChart>
    </GradingSummaryWrapper>
  );
};

export default GradingSummary;
