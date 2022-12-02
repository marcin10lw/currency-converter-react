import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Exchange from "./Exchange";
import Result from "./Result";

function App() {
  const currencies = [
    {id: 1, name: "usd", rate: 4.45},
    {id: 2, name: "eur", rate: 4.69},
    {id: 3, name: "gbp", rate: 5.46},
    {id: 4, name: "nok", rate: 0.46},
    {id: 5, name: "chf", rate: 4.76},
    {id: 6, name: "jpy", rate: 0.033},
    {id: 7, name: "sek", rate: 0.43},
  ];
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
