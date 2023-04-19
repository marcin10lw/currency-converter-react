import { Text, StyledRate } from "../styled";
import { Paragraph } from "../Paragraph";

type RateProps = {
  getRate: () => number;
  firstCurrency: string;
  secondCurrency: string;
};

const Rate = ({ getRate, firstCurrency, secondCurrency }: RateProps) => (
  <Paragraph>
    <Text>
      {firstCurrency}/{secondCurrency}
    </Text>
    <StyledRate>{getRate().toFixed(4)}</StyledRate>
  </Paragraph>
);
export default Rate;
