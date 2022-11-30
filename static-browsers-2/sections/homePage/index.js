import React from "react";
import BrowserTable from "../../components/browserTable/index.js";
import { ChartWrapper, HomeWrapper } from "./homePage.style.js";
import BarChart from "../../components/barChart";
import data from "../../data/data.json";

const data2 = data[0].acf;
const chartData = data[0].acf.desktopVsMobileTable[0];

const HomePage = () => {
  return (
    <HomeWrapper>
      <BrowserTable />
      <ChartWrapper>
        <h2 className="redDot">{data2.desktopVsMobileTitle}</h2>
        <p className="desktopVsMobileParagraph1">
          {data2.desktopVsMobileParagraph1}
        </p>
        <BarChart
          column1={{
            percentage: chartData.column1Percentage,
            title: chartData.column1Title,
          }}
          column2={{
            percentage: chartData.column2Percentage,
            title: chartData.column2Title,
          }}
        />
        <p className="desktopVsMobileSourceDetail greyText">
          {data2.desktopVsMobileSourceDetail}
        </p>
      </ChartWrapper>
    </HomeWrapper>
  );
};

export default HomePage;
