import styled from "styled-components";

export const Chart = styled.div`
  align-items: end;
  color: var(--primary-white);
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  .leftSide {
    background-color: var(--primary-red);
    margin-right: 1rem;
  }
  .rightSide {
    background-color: var(--primary-blue);
    margin-left: 1rem;
  }
  .rightSide,
  .leftSide {
    align-items: center;
    box-shadow: 5px -3px 0px 3px var(--quaternary-grey);
    display: flex;
    font-size: 2rem;
    justify-content: center;
    position: relative;
    width: 10rem;
    p {
      font-family: var(--secondary-font-family);
      font-size: 6rem;
      transform: rotate(270deg);
    }
    .chartTitle {
      bottom: 0;
      font-size: 3rem;
      padding-bottom: 1rem;
      position: absolute;
      transform: rotate(0deg);
    }
  }
`;
export const ChartBase = styled.div`
  background-color: var(--tertiary-grey);
  bottom: -1rem;
  height: 1rem;
  margin: 0 auto;
  position: absolute;
  width: ${(props) => (props.width ? props.width : "auto")};
  @media screen and (max-width: 440px) {
    width: initial;
  }
`;
