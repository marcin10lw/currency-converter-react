import { Text, StyledRate } from "../styled";

const Rate = ({ rate, currency }) => (
    <p>
      <Text>{currency}/PLN</Text>
      <StyledRate>{rate.toFixed(2)}</StyledRate>
    </p>
);

export default Rate;
