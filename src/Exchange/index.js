const Exchange = ({rate}) => {
  return (
    <p>
      <span className="form__text">Current exchange:</span>
      <strong className="form__strongElement">{rate}</strong>
    </p>
  );
};

export default Exchange;