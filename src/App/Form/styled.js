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
  box-shadow: 0px 0px 18px 9px #6a6a6a;
`;

export const Wrapper = styled.div`
  text-align: center;
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
  margin-top: 25px;
  border-radius: 10px;
  border: none;
  background-color: #5a7b96;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 0px 10px 0px #565656;
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
  box-shadow: 0px 0px 13px 5px #7a7a7a;
`;

export const Info = styled.div`
  text-align: center;
  margin: 25px 0 0;

  p {
    margin: 10px 0 0;
    color: rgb(131, 130, 130);
    font-family: "Roboto Condensed", sans-serif;
  }

  span {
    font-weight: 700;
    color: #493f3f;
  }
`;
