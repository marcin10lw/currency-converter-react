import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [ratesToMap, setRatesToMap] = useState([]);
  const [currentRate, setCurrentRate] = useState(0);
  const [rate, setRate] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN"
          );
          setCurrencies(response.data);
          setRatesToMap(Object.keys(response.data.rates));
          setCurrentRate(response.data.rates.AED);
          setRate(response.data.rates.AED);
          setHasLoaded(true);
        } catch (error) {
          console.error(error);
        }
      })();
    }, 2000);
  }, []);

  return [currencies, ratesToMap, currentRate, setCurrentRate, rate, setRate, hasLoaded];
};
