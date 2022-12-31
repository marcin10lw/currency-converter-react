import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState(0);

  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN"
          );
          setCurrencies(data);
          setRate(data.rates.AED);
          setHasLoaded(true);
        } catch (error) {
          console.error(error);
          setError(true);
        }
      })();
    }, 1400);
  }, []);

  return [currencies, rate, setRate, hasLoaded, error];
};
