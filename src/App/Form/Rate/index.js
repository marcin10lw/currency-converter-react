import { Text, StyledRate } from "../styled";
import { Paragraph } from "../Paragraph";

const Rate = ({ getRate, firstCurrency, secondCurrency }) => (
  <Paragraph>
    <Text>
      {firstCurrency}/{secondCurrency}
    </Text>
    <StyledRate>{getRate().toFixed(4)}</StyledRate>
  </Paragraph>
);
export default Rate;
