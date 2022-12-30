import { StyledError } from "./styled";

const Error = () => (
  <StyledError>
    <p>Ups! Coś poszło nie tak... Sprawdź, czy masz połączenie z internetem.</p>
    <p>Jeżeli masz, to wina jest po naszej stronie. Spróbuj później.</p>
  </StyledError>
);

export default Error;
