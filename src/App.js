import currencies from "./currencies";
import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Exchange from "./Exchange";
import Result from "./Result";

function App() {
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("N/A");
  
  const getIndex = (currencyName) =>{
    setCurrencyIndex(currencies.findIndex(currency => currency.name === currencyName));
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
        exchange={<Exchange rate={currencies[currencyIndex].rate} />}
        result={<Result result={result} />}
      />
    </Container>
  );
}

export default App;
