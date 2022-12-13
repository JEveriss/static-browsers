import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: var(--primary-black);
  display: flex;
  height: 6rem;
  width: 100vw;
  button {
    background-color: var(--secondary-black);
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    a {
      color: var(--primary-white);
      font-family: var(--primary-font-family);
      text-decoration: none;
    }
    @media screen and (max-width: 630px) {
      display: none;
    }
  }
  .footerIcon {
    max-height: 4rem;
    max-width: 4rem;
  }
  .parent {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 100%;
  }
  .child {
    min-width: 33%;
  }
`;
