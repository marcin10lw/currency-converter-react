import styled from "styled-components";

export const StyledDate = styled.p`
  margin: 0 20px 40px;
  text-align: end;
  color: rgb(131, 130, 130);
  font-family: "Roboto Condensed", sans-serif;
  letter-spacing: 1px;

  @media (max-width: 767px) {
    text-align: center;
    margin: 0 0 40px;
    letter-spacing: 0.5px;
  }
`;