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
  
  const getIndex = (currencyName) =>{
    setCurrencyIndex(currencies.findIndex(currency => currency.name === currencyName));
  }
  
  return (
    <Container>
      <Form
        getIndex={getIndex}
        currencies={currencies}
        exchange={<Exchange rate={currencies[currencyIndex].rate} />}
        result={<Result />}
        outputBox={<OutputBox />}
      />
    </Container>
  );
}

export default App;
