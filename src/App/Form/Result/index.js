import { StyledResult } from "../styled";

const Result = ({currency, amount, result}) => (
  <p>
    {result !== "N/A" && (
      <StyledResult>
        {`${amount} PLN = ${result.toFixed(2)} ${currency} `}
      </StyledResult>
    )}
  </p>
);

export default Result;