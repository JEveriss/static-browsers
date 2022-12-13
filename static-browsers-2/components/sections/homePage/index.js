import React, { useContext } from "react";
import { ChartWrapper, HomeWrapper } from "./homePage.style";

import BrowserTable from "../../../components/browserTable";
import BarChart from "../../../components/barChart";

import DataContext from "../../../context/DataContext";

const HomePage = () => {
  const { data: chartData } = useContext(DataContext);
  const { acf } = chartData;

  return acf ? (
    <HomeWrapper>
      <BrowserTable />
      <ChartWrapper>
        <h2 className="redDot">{acf.desktopVsMobileTitle}</h2>
        <p className="desktopVsMobileParagraph1">
          {acf.desktopVsMobileParagraph1}
        </p>
        <BarChart
          column1={{
            percentage: acf.desktopVsMobileTable[0].column1Percentage,
            title: acf.desktopVsMobileTable[0].column1Title,
          }}
          column2={{
            percentage: acf.desktopVsMobileTable[0].column2Percentage,
            title: acf.desktopVsMobileTable[0].column2Title,
          }}
        />
        <p className="desktopVsMobileSourceDetail greyText">
          {acf.desktopVsMobileSourceDetail}
        </p>
      </ChartWrapper>
    </HomeWrapper>
  ) : null;
};

export default HomePage;
