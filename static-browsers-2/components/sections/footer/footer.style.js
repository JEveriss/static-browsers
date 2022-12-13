import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: var(--primary-black);
  display: flex;
  height: 6rem;
  width: 100vw;
  button {
    background-color: var(--secondary-black);
    border-radius: 0.5rem;
    border: none;
    color: var(--primary-white);
    cursor: pointer;
    font-family: var(--primary-font-family);
    padding: 1rem 2rem;
    text-decoration: none;
    :hover {
      background-color: var(--primary-black);
      border: solid 2px var(--secondary-black);
      box-sizing: content-box;
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
