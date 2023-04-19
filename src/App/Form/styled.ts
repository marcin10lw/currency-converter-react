import styled from "styled-components";
import { ReactComponent as ToggleIcon } from "./images/toggleIcon.svg";

export const StyledForm = styled.form`
  opacity: 95%;
`;

export const Legend = styled.legend`
  background-color: ${({ theme }) => theme.colors.horizon};
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
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
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
  border: 1px solid ${({ theme }) => theme.colors.grey};

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
  background-color: ${({ theme }) => theme.colors.horizon};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: block;
    padding: 18px;
    max-width: 400px;
    width: 100%;
    margin: 15px auto 0;
  }
`;

export const ToggleButton = styled.button`
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 0 10px 0 -42px;
  grid-area: 1 / 2 / 5 / 3;
  transition: color 80ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.horizon};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-area: auto;
    margin: 0 0 -20px;
  }
`;

export const StyledToggleIcon = styled(ToggleIcon)`
  transform: rotate(90deg);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 35px;
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
  background-color: ${({ theme }) => theme.colors.horizon};
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      font-size: 14px;
    }
  }

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.tundora};
  }
`;
