import { StyledResult } from "../styled";

const Result = ({ firstCurrency, secondCurrency, amount, result }) => (
  <p>
    {result !== "N/A" && (
      <StyledResult>
        {`${amount.replace(
          /\B(?=(\d{3})+(?!\d))/g,
          " "
        )} ${firstCurrency} = ${result
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${secondCurrency} `}
      </StyledResult>
    )}
  </p>
);

export default Result;
