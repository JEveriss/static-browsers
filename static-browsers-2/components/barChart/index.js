import React from "react";
import { css } from "styled-components";
import { Chart, ChartBase } from "./barChart.style";

const ChartColumn = ({ label, percentage, className }) => {
  return (
    <div
      className={className}
      size={percentage}
      css={css`
        height: calc(${percentage}px * 8);
      `}>
      <p>{percentage}%</p>
      <p className="chartTitle">{label}</p>
    </div>
  );
};

const BarChart = ({ column1, column2 }) => {
  return (
    <Chart>
      {column1 && (
        <ChartColumn
          className="leftSide"
          percentage={column1.percentage}
          label={column1.title}
        />
      )}
      {column2 && (
        <ChartColumn
          className="rightSide"
          percentage={column2.percentage}
          label={column2.title}
        />
      )}
      <ChartBase width={"30rem"} />
    </Chart>
  );
};

export default BarChart;
