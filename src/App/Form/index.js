import { useState } from "react";
import Rate from "./Rate";
import Result from "./Result";
import Clock from "./Clock";
import LoadScreen from "./LoadScreen";
import Error from "./Error";
import {
  StyledForm,
  Legend,
  Fieldset,
  Text,
  Field,
  Button,
  Info,
  Wrapper,
} from "./styled";
import { useCurrencies } from "./useCurrencies";

const Form = () => {
  const [ratesData, rate, setRate] = useCurrencies();
  const { rates, date, status } = ratesData;

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");
  const [currentValue, setCurrentValue] = useState("");
  const [currency, setCurrency] = useState("AED");
  const [currencyToShow, setCurrencyToShow] = useState("AED");

  const onSelectChange = ({ target }) => {
    setRate(rates[`${target.value}`]);
    setCurrency(target.value);
  };

  const onInputChange = ({ target }) => {
    setCurrentValue(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setResult(+currentValue * rate);
    setAmount(currentValue);
    setCurrencyToShow(currency);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <Clock />
        {status === "pending" && <LoadScreen />}
        {status === "success" && (
          <Wrapper>
            <p>
              <label>
                <Text>Wpisz wartość w PLN*:</Text>
                <Field
                  type="number"
                  required
                  step="0.01"
                  value={currentValue}
                  onChange={onInputChange}
                />
              </label>
            </p>

            <p>
              <label>
                <Text>Wybierz walutę:</Text>

                <Field as="select" onChange={onSelectChange}>
                  {Object.keys(rates).map((currency) => (
                    <option>{currency}</option>
                  ))}
                </Field>
              </label>
            </p>
            <Rate rate={rate} currency={currency} />

            <Info>
              <p>Kursy walut pobierane są z Europejskiego Banku Centralnego</p>
              <p>
                Aktualne na dzień: <span>{date}</span>
              </p>
            </Info>
          </Wrapper>
        )}
        {status === "success" && <Button>Oblicz</Button>}
        {status === "error" && <Error />}
      </Fieldset>

      <Result currencyToShow={currencyToShow} result={result} amount={amount} />
    </StyledForm>
  );
};

export default Form;
