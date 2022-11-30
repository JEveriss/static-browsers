import React from "react";
import { GlossaryStyle } from "./glossary.style.js";
import data from "../../data/data.json"

const data2 = data;

const Glossary = () => {

  return (
    <GlossaryStyle>
      <div className="arrow" />
      <h3>{data2.glossaryTitle}</h3>
      <p className="glossaryTitleBold">{data2.glossaryParagraph}</p>

      {data2.glossary.map((item, index) => {
        return (
          <div key={`glossaryItem${index}`}>
            <p>
              <span className="glossaryTitleBold">
                {item.glossaryArticleTitle}
              </span>
              {item.glossaryArticle}
            </p>
          </div>
        );
      })}
    </GlossaryStyle>
  );
};

export default Glossary;
