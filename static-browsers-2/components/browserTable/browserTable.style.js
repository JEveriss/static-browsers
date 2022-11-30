import styled from "styled-components";

export const BrowserImg = styled.img`
  max-height: 6rem;
  max-width: 6rem;
`;

export const BrowserBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: var(--primary-font-family);
  justify-content: space-evenly;

  text-align: center;
  .browserCard {
    padding-bottom: 3rem;
    width: 15rem;
  }
  .browserPercentage {
    font-family: var(--secondary-font-family);
    font-size: 2rem;
  }
`;

export const BrowserWrapper = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  text-align: center;
  .sourceLink,
  a {
    font-size: 1.2rem;
    margin-top: 3rem;
  }
  .browserUsageParagraph {
    margin: 6rem auto;
    max-width: 60rem;
  }
`;
