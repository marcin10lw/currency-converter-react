export type Rates = {
  [key: string]: number;
};

export type Currencies = {
  short: string;
  rate: number;
};

export type RatesData = {
  currencies: Currencies[];
  date: string;
};
