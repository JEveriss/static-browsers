import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-bottom: 7rem;
  align-items: center;
  @media screen and (max-width: 860px) {
    flex-direction: column;
    margin: auto;
    text-align: center;
    width: 85%;
  }
`;

export const LeftSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
  @media screen and (max-width: 860px) {
    width: 100%;
  }
  @media screen and (max-width: 470px) {
    justify-content: space-between;
  }
`;

export const RightSide = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 50%;
  @media screen and (max-width: 860px) {
    justify-content: center;
    width: 100%;
  }
`;

export const SubTextBox = styled.div`
 margin: 8rem auto 0 auto;
  text-align: center;
  max-width: 60rem;
`;

export const MobileSectionWrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  @media screen and (max-width: 1225px) {
    max-width: 90%;
  }
  @media screen and (max-width: 700px) {
    max-width: 95%;
  }
`;
