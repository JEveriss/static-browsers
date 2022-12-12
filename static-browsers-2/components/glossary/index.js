import React, { useState, useContext } from "react";
import { css } from "styled-components";
import { GlossaryStyle, GlossaryButton } from "./glossary.style.js";

import DataContext from "../../context/DataContext";

export function ShowGlossary({ children }) {
  const [showGlossary, setShowGlossary] = useState();

  function toggle() {
    setShowGlossary(!showGlossary);
  }

  var buttonText = showGlossary ? (
    <p
      css={css`
        text-decoration: underline;
      `}>
      Glossary
    </p>
  ) : (
    <p>Glossary</p>
  );

  return (
    <GlossaryButton>
      {showGlossary && children}
      <a onClick={toggle}>{buttonText}</a>
    </GlossaryButton>
  );
}

const Glossary = () => {
  const { data: glossaryData } = useContext(DataContext);
  const { acf } = glossaryData;

  return acf ? (
    <ShowGlossary>
      <GlossaryStyle>
        <div className="arrow" />
        <h3>{acf.glossaryTitle}</h3>
        <p className="glossaryTitleBold">{acf.glossaryParagraph}</p>

        {acf.glossary.map((item, index) => {
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
  ) : null;
};

export default Glossary;
