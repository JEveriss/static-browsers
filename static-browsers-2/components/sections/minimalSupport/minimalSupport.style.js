import styled from "styled-components";

export const SupportWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  .minSupportLeftSide {
    align-items: center;
  }
  .minSupportTitle {
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    h3 {
      display: flex;
      flex-direction: column;
    }
    span {
      font-size: 5rem;
    }
  }
  @media screen and (max-width: 660px) {
    .minSupportLeftSide {
      flex-direction: column;
    }
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin: 0 auto;
    padding: 0;
    text-align: center;
    width: 85%;
  }
div {
    display: flex;
    margin: 0 auto;
    width: 85%;
  }
  p.footer {
    font-size: 5rem;
  }
  ul {
    margin: 0 auto;
  }
`;
