import styled from "styled-components";

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

export const Field = styled.input`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};

  &:invalid {
    background-color: #f0e6eb;
  }
`;
