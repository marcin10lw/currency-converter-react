import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
  const [ratesData, setRatesData] = useState({ status: "pending" });
  const [rate, setRate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN"
          );

          setRatesData({
            status: "success",
            rates: data.rates,
            date: data.date,
          });
          setRate(data.rates.AED);
        } catch (error) {
          setRatesData({
            status: "error",
          });
        }
      })();
    }, 1400);
  }, []);

  return [ratesData, rate, setRate];
};
