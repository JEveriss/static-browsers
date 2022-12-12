import styled from "styled-components";

export const GiantLetterGradeStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: var(--secondary-font-family);
  justify-content: center;
  line-height: 0.8;
  text-transform: uppercase;
  .grade {
    color: var(--primary-red);
    font-size: 25rem;
    font-weight: 100;
    @media screen and (max-width: 1060px) {
      font-size: 22rem;
    }
  }
  .subtitle {
    font-size: 5rem;
  }
  .footer {
    font-size: 3.7rem;
  }
`;
