import React, { useContext } from "react";
import { BrowserImg, BrowserBox, BrowserWrapper } from "./browserTable.style";

import DataContext from "../../context/DataContext";

const BrowserTable = () => {
  const { data: browserData } = useContext(DataContext);
  const { acf } = browserData;

  return acf ? (
    <BrowserWrapper>
      <h2 className="redDot">{acf.browserUsageTitle}</h2>
      <p className="browserUsageParagraph">{acf.browserUsageParagraph1}</p>
      <BrowserBox>
        {acf.browserUsageTable?.map((browser, index) => {
          return (
            <div className="browserCard" key={`browser${index}`}>
              {" "}
              <BrowserImg src={browser.browserIcon} />
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
        {acf.browserUsageSourceInfo} <br />
        <a href={acf.browserUsageSourceLink.url}>
          {acf.browserUsageSourceLink.url}
        </a>
      </p>
    </BrowserWrapper>
  ) : null;
};

export default BrowserTable;
