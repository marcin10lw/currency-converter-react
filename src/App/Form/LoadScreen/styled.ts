import styled from "styled-components";

export const StyledLoadScreen = styled.div`
  text-align: center;

  p {
    padding: 0 30px;
    font-size: 26px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.chambray};
    margin: 60px 0;
  }
`;
