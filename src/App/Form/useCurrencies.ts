import { useState } from "react";
import { RatesData } from "./types";

const useCurrencies = (data: RatesData | undefined) => {
  const [displayData, setDisplayData] = useState({
    displayAmount: "",
    displayFirstCurrency: "PLN",
    displaySecondCurrency: "EUR",
  });
  const [currentData, setCurrentData] = useState({
    currentValue: "",
    firstCurrency: "PLN",
    secondCurrency: "EUR",
  });

  const getRate = () => {
    const firstRate = data?.currencies.find(
      ({ short }) => short === currentData.firstCurrency
    )?.rate;
    const secondRate = data?.currencies.find(
      ({ short }) => short === currentData.secondCurrency
    )?.rate;

    return secondRate! / firstRate!;
  };

  const switchCurrencies = () => {
    setCurrentData((data) => ({
      ...data,
      firstCurrency: data.secondCurrency,
      secondCurrency: data.firstCurrency,
    }));
  };

  return {
    displayData,
    currentData,
    setDisplayData,
    setCurrentData,
    getRate,
    switchCurrencies,
  };
};

export default useCurrencies;
