const Rate = ({rate}) => {
  return (
    <p>
      <span className="form__text">Current exchange:</span>
      <strong className="form__strongElement">{rate.toFixed(2)}</strong>
    </p>
  );
};

export default Rate;