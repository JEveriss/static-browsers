import styled from "styled-components";

export const NavWrapper = styled.nav`
  align-items: center;
  background-color: var(--secondary-blue);
  column-gap: 10%;
  display: flex;
  height: 5rem;
  justify-content: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 6;
  @media screen and (max-width: 630px) {
    display: none;
  }
  .navIcon {
    max-height: 3rem;
    max-width: 3rem;
  }
  a {
    color: var(--primary-white);
    cursor: pointer;
    text-decoration: none;
  }
  img {
    width: 3rem;
  }
  .hide {
    display: flex;
    position: relative;
    z-index: 6;
    a {
      overflow: hidden;
    }
  }
`;
