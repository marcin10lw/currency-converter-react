import { Paragraph } from "../Paragraph";
import { StyledExchangeInfo } from "./styled";

const ExchangeInfo = ({ date }: { date: string }) => {
  return (
    <StyledExchangeInfo>
      <Paragraph>
        Exchange rates are taken from the European Central Bank
      </Paragraph>
      <Paragraph>
        Current for the day: {date ? <span>{date}</span> : "N/A"}
      </Paragraph>
    </StyledExchangeInfo>
  );
};

export default ExchangeInfo;
