import React from "react";
import { PercentageCoverageStyle } from "./percentageCoverage.style";

const PercentageCoverage = ({
  coverageHeading,
  percentageActual,
  coverageSubtitle,
  coverageFooter,
}) => {
  return (
    <PercentageCoverageStyle>
      <p className="heading">{coverageHeading}</p>
      <p className="percentage">{percentageActual}</p>
      <p className="subtitle">{coverageSubtitle}</p>
      <p className="percentageFooter">{coverageFooter}</p>
    </PercentageCoverageStyle>
  );
};

export default PercentageCoverage;
