import { StyledResult } from "../styled";

type ResultProps = {
  displayData: {
    displayAmount: string;
    displayFirstCurrency: string;
    displaySecondCurrency: string;
  };
  result: number;
};

const Result = ({ displayData, result }: ResultProps) => (
  <p>
    {result && (
      <StyledResult>
        {`${displayData.displayAmount.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${
          displayData.displayFirstCurrency
        } = ${result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${
          displayData.displaySecondCurrency
        } `}
      </StyledResult>
    )}
  </p>
);

export default Result;
