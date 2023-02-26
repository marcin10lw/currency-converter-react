import { StyledResult } from "../styled";

const Result = ({ firstCurrency, secondCurrency, amount, result }) => (
  <p>
    {result !== "N/A" && (
      <StyledResult>
        {`${amount} ${firstCurrency} = ${result.toFixed(2)} ${secondCurrency} `}
      </StyledResult>
    )}
  </p>
);

export default Result;
