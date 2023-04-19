import { StyledResult } from "../styled";

type ResultProps = {
  firstCurrency: string;
  secondCurrency: string;
  amount: string;
  result: number;
};

const Result = ({
  firstCurrency,
  secondCurrency,
  amount,
  result,
}: ResultProps) => (
  <p>
    {result && (
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
