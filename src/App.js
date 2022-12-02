import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Exchange from "./Exchange";

function App() {
  return (
    <Container>
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Currency calculator</legend>
          <p>
            <label>
              <span className="form__text">Value in:</span>

              <select className="form__field" name="whichCurrency">
                <option value="eur">EUR</option>
                <option value="usd">USD</option>
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
              />
            </label>
          </p>

          <p>
            <span className="form__text">Current exchange:</span>
            <strong className="form__strongElement">4.72</strong>
          </p>

          <p>
            <span className="form__text">Value in PLN</span>
            <strong className="form__strongElement">N/A</strong>
          </p>
        </fieldset>

        <p>
          <button className="form__submitButton">Calculate</button>
        </p>

        <p>
          <div></div>
        </p>
      </form>
    </Container>
  );
}

export default App;
