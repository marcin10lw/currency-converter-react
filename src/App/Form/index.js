import { useState, useEffect } from "react";
import axios from "axios";
import Rate from "./Rate";
import Result from "./Result";
import Clock from "./Clock";
import { StyledForm, Legend, Fieldset, Text, Field, Button } from "./styled";

const Form = () => {
  const [currencies, setCurrencies] = useState([]);
  const [ratesToMap, setRatesToMap] = useState([]);

  const [currentValue, setCurrentValue] = useState("");
  const [currentRate, setCurrentRate] = useState(0);
  const [currentCurrency, setCurrentCurrency] = useState("AED");

  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(0);
  const [currency, setCurrency] = useState("AED");
  const [result, setResult] = useState("N/A");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );
        setCurrencies(response.data);
        setRatesToMap(Object.keys(response.data.rates));
        setCurrentRate(response.data.rates.AED);
        setRate(response.data.rates.AED);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
              {ratesToMap.map((rate) => (
                <option>{rate}</option>
              ))}
            </Field>
          </label>
        </p>
        <Rate rate={rate} currency={currency} />
      </Fieldset>
      <p>
        <Button>Oblicz</Button>
      </p>
      <Result
        currency={currency}
        result={result}
        amount={amount}
      />
    </StyledForm>
  );
};

export default Form;
