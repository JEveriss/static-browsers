import styled from "styled-components";

export const GradeTable = styled.div`
  background-color: var(--primary-grey);
  width: 50%;
  min-height: 25.5rem;
  margin: 0 auto;
  .redTableHeading,
  .blueTableHeading {
    min-height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-height: 4rem;
    }
  }
  .redTableHeading {
    background-color: var(--primary-red);
  }
  .blueTableHeading {
    background-color: var(--primary-blue);
  }
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
    font-family: var(--secondary-font-family);
  }
  @media screen and (max-width: 860px) {
    justify-content: center;
    width: 100%;
    min-height: initial;
  }
`;

export const TableData = styled.div`
  column-gap: 1rem;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  div {
    width: 50%;
  }
  .tableItem:last-child {
    padding-bottom: 4rem;
  }
  img {
    max-height: 2rem;
    padding-right: 1.5rem;
  }
  .tableItem {
    align-items: center;
    display: flex;
    padding: 1.5rem 0;
    width: 100%;
  }
  .tableColumn {
    margin-left: 1rem;
  }
  h3 {
    font-size: 3rem;
    line-height: 1;
  }
  .redColumnTitle {
    color: var(--primary-red);
    padding: 1.5rem 0;
  }
  .blueColumnTitle {
    color: var(--primary-blue);
    padding: 1.5rem 0;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 2rem;
    h3 {
      font-size: 3.5rem;
    }
    div {
      width: 100%;
    }
  }
`;
