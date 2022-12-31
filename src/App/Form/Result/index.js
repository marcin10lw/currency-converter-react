import { StyledResult } from "../styled";

const Result = ({currencyToShow, amount, result}) => (
  <p>
    {result !== "N/A" && (
      <StyledResult>
        {`${amount} PLN = ${result.toFixed(2)} ${currencyToShow} `}
      </StyledResult>
    )}
  </p>
);

export default Result;