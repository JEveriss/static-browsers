import styled from "styled-components";

export const ExperienceTextBlockStyle = styled.div`
  flex-direction: column;
  ul {
    margin-left: 1rem;
    margin: 0 auto;
    text-align: left;
  }
  li {
    margin: 0 auto 0 1rem;
    padding-top: 0.5rem;
    text-align: left;
    :nth-of-type(1) {
      padding-top: 0;
    }
  }
  h3 {
    margin: 3rem 0;
  }
  @media screen and (max-width: 1200px) {
    margin: 0;
    padding-bottom: 3rem;
  }
  @media screen and (max-width: 860px) {
    h3 {
      margin: 2rem 0;
    }
    li {
      list-style: none;
      margin: 0 auto;
      padding-top: 2rem;
      text-align: center;
    }
  }
`;
