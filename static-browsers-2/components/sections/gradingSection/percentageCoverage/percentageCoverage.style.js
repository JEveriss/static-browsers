import styled from "styled-components";

export const PercentageCoverageStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  line-height: 0.8;
  @media screen and (max-width: 660px) {
    padding: 4rem 0 2rem 0;
  }
  .heading {
    font-family: var(--secondary-font-family);
    font-size: 3.3rem;
    padding: 1rem 0;
    text-transform: uppercase;
  }
  .percentage {
    color: var(--primary-red);
    font-family: var(--secondary-font-family);
    font-size: 7rem;
    font-weight: 900;
    padding: 1rem 0;
  }
  .subtitle {
    font-size: 2rem;
    padding-top: 1rem;
  }
  .percentageFooter {
    color: var(--secondary-grey);
    font-size: 1rem;
    padding-top: 0.5rem;
  }
`;
