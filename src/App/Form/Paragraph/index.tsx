import styled from "styled-components";

export const Paragraph = styled.p`
  grid-column: 1/2;
  margin: 10px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    margin: 6px;
  }
`;
