import { Currencies, Rates } from "./types";

export const getCurrencies = (rates: Rates) => {
  return Object.keys(rates).map((key) => {
    return {
      short: key,
      rate: rates[key],
    };
  }) as Currencies[];
};
