import "./style.css";

const Form = ({exchange, result}) => {
  return (
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
            <input className="form__field" type="number" required step="0.01" />
          </label>
        </p>
        {exchange}
        {result}
      </fieldset>
      <p>
        <button className="form__submitButton">Calculate</button>
      </p>
    </form>
  );
};

export default Form;
