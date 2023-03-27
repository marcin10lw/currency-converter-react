import { StyledError } from "./styled";

const Error = () => (
  <StyledError>
    <p>Oops! Something went wrong... Check your internet connection.</p>
    <p>If you're connected to the internet, it's our fault. Try again later.</p>
  </StyledError>
);

export default Error;
