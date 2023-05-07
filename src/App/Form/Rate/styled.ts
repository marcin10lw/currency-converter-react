import styled from "styled-components";

export const StyledRate = styled.strong`
  display: inline-block;
  width: 100%;
  max-width: 400px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-weight: 500;
`;

export const Text = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  margin-left: 15px;
  text-align: start;

  @media (max-width: 767px) {
    max-width: 400px;
    margin-bottom: 5px;
  }
`;
