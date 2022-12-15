import React, {useState} from "react";
import Rate from "./Rate";
import Result from "./Result";
import Clock from "./Clock";
import { StyledForm, Legend, Fieldset, Text, Field, Button } from "./styled";

const Form = ({currencies}) => {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentValue, setCurrentValue] = useState("");

  const getIndex = (index) =>{
    setIndex(index);
  }
  
  const getAmount = (inputValue) => {
    setAmount(inputValue);
  }

  const getResult = (inputValue, currentRate) => {
    setResult(+inputValue * currentRate);
  }
  
  const onSelectChange = ({target}) => {
    setCurrentIndex(currencies.findIndex(currency => {
      return currency.name === target.value.toLowerCase();
    }))
  }

  const onInputChange = ({target}) => {
    setCurrentValue(target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    getIndex(currentIndex);
    getAmount(currentValue);
    getResult(currentValue, currencies[currentIndex].rate);
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kalkulator walut</Legend>
        <Clock />
        <p>
          <label>
            <Text>Wybierz walutę:</Text>

            <Field
              as="select"
              onChange={onSelectChange}
            >
                {currencies.map(({name, id}) => <option key={id}>{name.toUpperCase()}</option>)}
            </Field>
          </label>
        </p>

        <p>
          <label>
            <Text>Wpisz wartość*:</Text>
            <Field
              type="number"
              required
              step="0.01"
              value={currentValue}
              onChange={onInputChange}
            />
          </label>
        </p>
        <Rate
            rate={currencies[index].rate}
            currency={currencies[index].name.toUpperCase()}
        />
      </Fieldset>
      <p>
        <Button>Oblicz</Button>
      </p>
      <Result
        currency={currencies[index].name.toUpperCase()}
        result={result}
        amount={amount}
      />
    </StyledForm>
  );
};

export default Form;
