import currencies from "./currencies";
import React, { useState } from "react";
import Container from "./Container";
import Form from "./Container/Form";

function App() {
  return (
    <Container>
      <Form currencies={currencies} />
    </Container>
  );
}

export default App;