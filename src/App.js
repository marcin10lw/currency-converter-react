import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Exchange from "./Exchange";
import Result from "./Result";
import OutputBox from "./OutputBox";

function App() {
  const currencies = [
    {name: "usd", rate: 4.45},
    {name: "eur", rate: 4.69},
    {name: "gbp", rate: 5.46},
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
        outputBox={
          <OutputBox
            amount={amount}
            result={result}
            currencies={currencies}
            currencyIndex={currencyIndex}
          />
        }
      />
    </Container>
  );
}

export default App;
