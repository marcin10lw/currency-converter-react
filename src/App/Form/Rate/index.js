import { Text, StyledRate } from "../styled";

const Rate = ({ rate, currency }) => (
    <p>
      <Text>PLN/{currency}</Text>
      <StyledRate>{rate.toFixed(4)}</StyledRate>
    </p>
);

export default Rate;
