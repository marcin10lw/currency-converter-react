import styled from "styled-components";

export const StyledLoadScreen = styled.div`
  text-align: center;

  p {
    font-size: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.chambray};
    margin: 60px 0;
  }
`;
