import React, {useState} from "react";
import "./style.css";

const Form = ({exchange, result, outputBox, currencies, getIndex, getAmount, getResult}) => {
  
  const onInputChange = ({target}) => {
    getAmount(target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    getResult();
  }

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency calculator</legend>
        <p>
          <label>
            <span className="form__text">Value in:</span>

            <select
              className="form__field"
              name="whichCurrency"
              onChange={({target}) => getIndex(target.value.toLowerCase())}
            >
                {currencies.map(({name}) => <option>{name.toUpperCase()}</option>)}
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
              onChange={onInputChange}
            />
          </label>
        </p>
        {exchange}
        {result}
      </fieldset>
      <p>
        <button className="form__submitButton">Calculate</button>
      </p>
      {outputBox}
    </form>
  );
};

export default Form;
