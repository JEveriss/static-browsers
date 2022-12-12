import styled from "styled-components";

export const SupportTableStyle = styled.div`
  background-color: var(--primary-white);
  column-gap: 1rem;
  display: flex;
  @media screen and (max-width: 960px) {
    column-gap: 0;
    flex-direction: column;
    row-gap: 1rem;
  }
`;
