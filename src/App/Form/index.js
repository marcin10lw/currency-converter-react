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
} from "./styled";
import { useCurrencies } from "./useCurrencies";

const Form = () => {
  const [
    currencies,
    rate,
    setRate,
    currentRate,
    setCurrentRate,
    hasLoaded,
    error,
  ] = useCurrencies();

  const [currentValue, setCurrentValue] = useState("");
  const [currentCurrency, setCurrentCurrency] = useState("AED");

  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("AED");

  const [result, setResult] = useState("N/A");

  const onSelectChange = ({ target }) => {
    setCurrentRate(currencies.rates[`${target.value}`]);
    setCurrentCurrency(target.value);
  };

  const onInputChange = ({ target }) => {
    setCurrentValue(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setResult(+currentValue * currentRate);
    setRate(currentRate);
    setAmount(currentValue);
    setCurrency(currentCurrency);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <Clock />
        {!hasLoaded && !error && <LoadScreen />}
        {hasLoaded && !error && (
          <div>
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
                  {Object.keys(currencies.rates).map((rate) => (
                    <option>{rate}</option>
                  ))}
                </Field>
              </label>
            </p>
            <Rate rate={rate} currency={currency} />

            <Info>
              <p>Kursy walut pobierane są z Europejskiego Banku Centralnego</p>
              <p>
                Aktualne na dzień: <span>{currencies.date}</span>
              </p>
            </Info>
          </div>
        )}
        {error && <Error />}
      </Fieldset>
      {hasLoaded && !error && (
        <p>
          <Button>Oblicz</Button>
        </p>
      )}
      <Result currency={currency} result={result} amount={amount} />
    </StyledForm>
  );
};

export default Form;
