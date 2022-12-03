import currencies from "./currencies";
import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Rate from "./Rate";
import Result from "./Result";

function App() {
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");
  
  const getIndex = (index) =>{
    setCurrencyIndex(index);
  }
  
  const getAmount = (inputValue) => {
    setAmount(inputValue);
  }

  const getResult = () => {
    setResult((+amount * currencies[currencyIndex].rate));
  }

  return (
    <Container>
      <Form
        getResult={getResult}
        getAmount={getAmount}
        getIndex={getIndex}
        currencies={currencies}
        exchange={<Rate rate={currencies[currencyIndex].rate} />}
        result={<Result result={result} />}
      />
    </Container>
  );
}

export default App;
