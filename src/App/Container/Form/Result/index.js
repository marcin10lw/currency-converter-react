const Result = ({currency, amount, result}) => (
  <p>
    {result !== "N/A" && (
      <div className="form__output">
        {`${amount} ${currency} = ${result.toFixed(2)} PLN`}
      </div>
    )}
  </p>
);

export default Result;