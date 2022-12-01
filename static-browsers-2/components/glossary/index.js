import React, {useState} from "react";
import { GlossaryStyle } from "./glossary.style.js";
import data from "../../data/data.json";

const glossaryData = data[0].acf;

export function ShowGlossary({ children }) {
  const [showGlossary, setShowGlossary] = useState();

  function toggle() {
    setShowGlossary(!showGlossary);
  }

  var buttonText = showGlossary ? "Hide Glossary" : "Glossary";

  return (
    <div className="glossaryButton">
      {showGlossary && children}
      <a onClick={toggle}>{buttonText}</a>
    </div>
  );
}

const Glossary = () => {
  return (
    <ShowGlossary>
      <GlossaryStyle>
        <div className="arrow" />
        <h3>{glossaryData.glossaryTitle}</h3>
        <p className="glossaryTitleBold">{glossaryData.glossaryParagraph}</p>

        {glossaryData.glossary.map((item, index) => {
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
    </ShowGlossary>
  );
};

export default Glossary;
