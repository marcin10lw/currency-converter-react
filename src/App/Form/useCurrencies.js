import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);

  const [hasLoaded, setHasLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN"
          );
          setCurrencies(response.data);
          setHasLoaded(true);
        } catch (error) {
          console.error(error);
          setError(true);
        }
      })();
    }, 1500);
  }, []);

  return [
    currencies,
    hasLoaded,
    error,
  ];
};
