import "./style.css";
import React, {useState, useEffect} from "react";
import Rate from "./Rate";
import Result from "./Result";
import Clock from "./Clock";

const Form = ({currencies}) => {
  const [index, setIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentValue, setCurrentValue] = useState("");

  const [date, setDate] = useState(new Date());

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

  useEffect(() => {
    const dateIntervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(dateIntervalId);
    }
  });

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency calculator</legend>
        <Clock />
        <p>
          <label>
            <span className="form__text">Value in:</span>

            <select
              className="form__field"
              name="whichCurrency"
              onChange={onSelectChange}
            >
                {currencies.map(({name, id}) => <option key={id}>{name.toUpperCase()}</option>)}
            </select>
          </label>
        </p>

        <p>
          <label>
            <span className="form__text">Enter value*:</span>
            <input
              className="form__field"
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
      </fieldset>
      <p>
        <button className="form__submitButton">Calculate</button>
      </p>
      <Result
        currency={currencies[index].name.toUpperCase()}
        result={result}
        amount={amount}
      />
    </form>
  );
};

export default Form;
