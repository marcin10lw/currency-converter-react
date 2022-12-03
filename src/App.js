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

  const getResult = (inputValue, currentRate) => {
    setResult(+inputValue * currentRate);
  }

  return (
    <Container>
      <Form
        getResult={getResult}
        getAmount={getAmount}
        getIndex={getIndex}
        currencies={currencies}
        rate={
          <Rate
            rate={currencies[currencyIndex].rate}
            currency={currencies[currencyIndex].name.toUpperCase()}
          />
        }
        result={
          <Result
            currency={currencies[currencyIndex].name.toUpperCase()}
            result={result}
            amount={amount}
          />
        }
      />
    </Container>
  );
}

export default App;
