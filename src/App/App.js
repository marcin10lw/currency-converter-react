import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import GlobalStyle from "../GlobalStyle";
import { Container } from "./Container/styled";
import Form from "./Form";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;
