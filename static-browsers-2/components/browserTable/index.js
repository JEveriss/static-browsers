import React from "react";
import { BrowserImg, BrowserBox, BrowserWrapper } from "./browserTable.style";
import data from "../../data/data.json";

const browserData = data[0].acf;

const BrowserTable = () => {
  return (
    <BrowserWrapper>
      <h2 className="redDot">{browserData.browserUsageTitle}</h2>
      <p className="browserUsageParagraph">
        {browserData.browserUsageParagraph1}
      </p>
      <BrowserBox>
        {browserData.browserUsageTable?.map((browser, index) => {
          return (
            <div className="browserCard" key={`browser${index}`}>
              {" "}
              {/* <BrowserImg src={browser.browserIcon} /> */}
              <p>{browser.browserName}</p>
              {browser.percentageBreakdown && (
                <p className="browserPercentage">
                  {browser.percentageBreakdown}%
                </p>
              )}
            </div>
          );
        })}
      </BrowserBox>
      <p className="sourceLink greyText">
        {browserData.browserUsageSourceInfo} <br />
        <a href={browserData.browserUsageSourceLink.url}>
          {browserData.browserUsageSourceLink.url}
        </a>
      </p>
    </BrowserWrapper>
  );
};

export default BrowserTable;
