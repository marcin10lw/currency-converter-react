import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Exchange from "./Exchange";
import Result from "./Result";
import OutputBox from "./OutputBox";

function App() {
  return (
    <Container>
      <Form
        exchange={<Exchange />}
        result={<Result />}
        outputBox={<OutputBox />}
      />
    </Container>
  );
}

export default App;
