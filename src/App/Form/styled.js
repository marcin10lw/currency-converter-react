import styled from "styled-components";

export const StyledForm = styled.form`
  opacity: 95%;
`;

export const Legend = styled.legend`
  background-color: #5a7b96;
  color: white;
  padding: 15px;
  border-radius: 10px;
`;

export const Fieldset = styled.fieldset`
  border: 1px solid rgb(216, 233, 214);
  border-radius: 10px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.913);
  box-shadow: 2px 2px 8px 4px #464946;
`;

export const Text = styled.span`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  margin-left: 15px;
`;

export const Field = styled.input`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid grey;

  &:invalid {
    background-color: #f0e6eb;
  }
`;

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

export const Button = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  background-color: #5a7b96;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 2px 2px 8px 4px #464946;
  transition: opacity, 100ms;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const StyledResult = styled.div`
  text-align: center;
  font-size: 20px;
  color: rgb(10, 77, 77);
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  background-color: #5a7b96;
  color: white;
  font-size: 24px;
  box-shadow: 2px 2px 8px 4px #464946;
`;