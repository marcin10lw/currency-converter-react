import { useState, useEffect } from "react";
import axios from "axios";

type Currencies = {
  short: string;
  rate: number;
};

type RatesData = {
  status: string;
  currencies: Currencies[];
  date: string | undefined;
};

export const useCurrencies = () => {
  const [ratesData, setRatesData] = useState<RatesData>({
    status: "pending",
    currencies: [],
    date: "",
  });

  const randomNumber = Math.floor(Math.random() * 1000000);

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://api.exchangerate.host/latest?base=PLN&rand=${randomNumber}`
          );

          const currencies = <Currencies[]>Object.keys(data.rates).map(
            (key) => {
              return {
                short: key,
                rate: data.rates[key],
              };
            }
          );

          setRatesData({
            status: "success",
            currencies,
            date: data.date,
          });
        } catch (error) {
          setRatesData({
            currencies: [],
            status: "error",
            date: "",
          });
        }
      })();
    }, 1400);
  }, []);

  return { ratesData };
};
