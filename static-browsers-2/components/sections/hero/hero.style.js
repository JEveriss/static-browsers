import styled from "styled-components";

export const HeroSection = styled.div`
  background-image: url(${(props) => props.img});
  background-color: var(--primary-blue);
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--primary-white);
  margin-top: -5rem;
  padding: 0 4rem;
  /* .heroTitle {
    font-size: 9rem;
  }

  @media screen and (max-width: 1060px) {
    .heroTitle {
      font-size: 8rem;
    }
  }

  @media screen and (max-width: 960px) {
    .heroTitle {
      font-size: 6rem;
    }
  } */

  @media screen and (max-width: 420px) {
    padding: 0 2rem;
    .heroTitle {
      font-size: 5rem;
    }
  }

  p {
    font-size: 2rem;
  }
  .hero383Logo,
  .heroIcon,
  .heroContent {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 70rem;
    text-align: center;
  }
  .hero383Logo {
    margin-top: 10rem;
    max-width: 6rem;
    max-height: 6rem;
  }
  .heroIcon {
    margin-top: 6rem;
    max-height: 8rem;
    max-width: 10rem;
  }
  .heroSuptitle {
    font-style: italic;
    margin: 3rem 0 2rem 0;
  }
  .topParagraph {
    padding: 6rem 0 2rem 0;
  }
  .bottomParagraph {
    padding: 2rem 0 12rem 0;
  }
`;
