import styled from "styled-components";

export const GradingSummaryWrapper = styled.div`
  align-items: center;
  background-color: var(--primary-grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10rem 0 15rem 0;
  h2 {
    margin: 0 0 5rem 0;
  }
`;

export const BreakdownChart = styled.div`
  align-items: end;
  color: var(--primary-white);
  display: flex;
  height: 35rem;
  justify-content: center;
  position: relative;
  width: 100%;
  .centerColumn {
    margin: 0 2rem;
  }
  .leftColumn,
  .centerColumn,
  .rightColumn {
    align-items: center;
    background-color: var(--primary-purple);
    display: flex;
    font-size: 2rem;
    justify-content: center;
    position: relative;
    width: 10rem;
    p {
      color: var(--primary-purple);
      font-family: var(--secondary-font-family);
      font-size: 6rem;
      position: absolute;
      top: -5.7rem;
    }
    .chartTitle {
      bottom: -4.5rem;
      color: var(--primary-black);
      font-family: var(--secondary-font-family);
      font-size: 3rem;
      position: absolute;
    }
  }
`;
