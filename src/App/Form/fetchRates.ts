import axios from "axios";
import { RatesData } from "./types";
import { getCurrencies } from "./getCurrencies";

const randomNumber = Math.floor(Math.random() * 1000000);

const wait = (exampleDelay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, exampleDelay);
  });

export const fetchRates = async () => {
  await wait(1000);
  const { data } = await axios.get(
    `https://api.exchangerate.host/latest?base=PLN&rand=${randomNumber}`
  );
  return {
    currencies: getCurrencies(data.rates),
    date: data.date,
  } as RatesData;
};
