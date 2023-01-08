import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState(0);
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            "https://api.exchangerate.host/latest?base=PLN"
          );

          setCurrencies(data);
          setRate(data.rates.AED);
          setStatus("success");
        } catch (error) {
          console.error(error);
          setStatus("error");
        }
      })();
    }, 1400);
  }, []);

  return [currencies, rate, setRate, status];
};
