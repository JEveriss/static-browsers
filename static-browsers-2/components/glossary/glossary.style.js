import styled from "styled-components";

export const GlossaryButton = styled.div`
  position: relative;
`;
export const GlossaryStyle = styled.div`
  background-color: var(--primary-grey);
  border-radius: 2%;
  box-shadow: 0rem 0rem 1.1rem 0.2rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: 3.5rem;
  width: 50rem;
  transform: translateX(-50%);
  h3 {
    color: var(--primary-red);
    font-family: var(--secondary-font-family);
    font-size: 4rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }
  .glossaryTitleBold {
    font-weight: 900;
  }
  p {
    margin: 1rem 0;
  }
  .arrow:before {
    border-bottom: 10px solid var(--primary-grey);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    box-sizing: border-box;
    content: "";
    height: 10px;
    left: 50%;
    position: absolute;
    top: -10px;
    transform: translateX(-50%);
    width: 10px;
  }
`;
