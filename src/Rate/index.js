const Rate = ({rate, currency}) => {
  return (
    <p>
      <span className="form__text">{currency}/PLN</span>
      <strong className="form__strongElement">
       {rate.toFixed(2)}
      </strong>
    </p>
  );
};

export default Rate;