import GlobalStyle from "../GlobalStyle";
import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form />
      </Container>
    </>
  );
}

export default App;
