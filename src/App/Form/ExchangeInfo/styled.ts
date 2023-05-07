import styled from "styled-components";

export const StyledExchangeInfo = styled.div`
  text-align: center;
  margin: 25px 0 0;

  p {
    margin: 10px 0 0;
    color: rgb(131, 130, 130);
    font-family: "Roboto Condensed", sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 14px;
    }
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.tundora};
  }
`;
