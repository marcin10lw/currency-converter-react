import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
  const [ratesData, setRatesData] = useState({
    status: "pending",
    currencies: [],
  });

  const randomNumber = Math.floor(Math.random() * 1000000);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://api.exchangerate.host/latest?base=PLN&rand=${randomNumber}`
          );

          const currencies = Object.keys(data.rates).map((key) => {
            return {
              short: key,
              rate: data.rates[key],
            };
          });

          setRatesData({
            status: "success",
            currencies,
            date: data.date,
          });
        } catch (error) {
          setRatesData({
            status: "error",
          });
        }
      })();
    }, 1400);
  }, []);

  return { ratesData };
};
