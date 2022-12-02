const Result = ({result}) => {
  return (
    <p>
      <span className="form__text">Value in PLN</span>
      <strong className="form__strongElement">
        {typeof result === "number" ? result.toFixed(2) : result}
      </strong>
    </p>
  );
};

export default Result;