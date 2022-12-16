import { StyledResult } from "../styled";

const Result = ({currency, amount, result}) => (
  <p>
    {result !== "N/A" && (
      <StyledResult>
        {`${amount} ${currency} = ${result.toFixed(2)} PLN`}
      </StyledResult>
    )}
  </p>
);

export default Result;