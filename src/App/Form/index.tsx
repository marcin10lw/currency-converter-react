import { useState } from "react";
import Rate from "./Rate";
import Result from "./Result";
import Clock from "./Clock";
import LoadScreen from "./LoadScreen";
import Error from "./Error";
import {
  StyledForm,
  Legend,
  Fieldset,
  Text,
  Field,
  Button,
  Info,
  Wrapper,
  StyledToggleIcon,
  ToggleButton,
} from "./styled";
import { Paragraph } from "./Paragraph";
import { useCurrencies } from "./useCurrencies";

const Form = () => {
  const { ratesData } = useCurrencies();
  const { currencies, date, status } = ratesData;

  const [currentValue, setCurrentValue] = useState("");
  const [amountToShow, setAmountToShow] = useState("");

  const [firstCurrency, setFirstCurrency] = useState("PLN");
  const [secondCurrency, setSecondCurrency] = useState("EUR");

  const [firstCurrencyShow, setFirstCurrencyShow] = useState("PLN");
  const [secondCurrencyShow, setSecondCurrencyShow] = useState("EUR");

  const [result, setResult] = useState(0);

  const getRate = () => {
    const firstRate = currencies.find(
      ({ short }) => short === firstCurrency
    )?.rate;
    const secondRate = currencies.find(
      ({ short }) => short === secondCurrency
    )?.rate;

    return secondRate! / firstRate!;
  };

  const switchCurrencies = () => {
    setFirstCurrency(secondCurrency);
    setSecondCurrency(firstCurrency);
  };

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setResult(+currentValue * getRate());
    setAmountToShow(currentValue);
    setFirstCurrencyShow(firstCurrency);
    setSecondCurrencyShow(secondCurrency);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Currency converter</Legend>
        <Clock />
        {status === "pending" && <LoadScreen />}
        {status === "success" && (
          <>
            <Wrapper>
              <Paragraph>
                <label>
                  <Text>Enter value*:</Text>
                  <Field
                    type="number"
                    required
                    step="0.01"
                    value={currentValue}
                    onChange={({ target }) => setCurrentValue(target.value)}
                  />
                </label>
              </Paragraph>

              <Paragraph>
                <label>
                  <Text>From:</Text>

                  <Field
                    as="select"
                    value={firstCurrency}
                    onChange={({ target }) => setFirstCurrency(target.value)}
                  >
                    {currencies.map(({ short }) => (
                      <option key={short}>{short}</option>
                    ))}
                  </Field>
                </label>
              </Paragraph>

              <ToggleButton type="button" onClick={switchCurrencies}>
                <StyledToggleIcon />
              </ToggleButton>

              <Paragraph>
                <label>
                  <Text>To:</Text>

                  <Field
                    as="select"
                    value={secondCurrency}
                    onChange={({ target }) => setSecondCurrency(target.value)}
                  >
                    {currencies.map(({ short }) => (
                      <option key={short}>{short}</option>
                    ))}
                  </Field>
                </label>
              </Paragraph>

              <Rate
                getRate={getRate}
                firstCurrency={firstCurrency}
                secondCurrency={secondCurrency}
              />
            </Wrapper>

            <Info>
              <Paragraph>
                Exchange rates are taken from the European Central Bank
              </Paragraph>
              <Paragraph>
                Current for the day: {date ? <span>{date}</span> : "N/A"}
              </Paragraph>
            </Info>
          </>
        )}

        {status === "success" && <Button>Calculate</Button>}
        {status === "error" && <Error />}
      </Fieldset>

      <Result
        firstCurrency={firstCurrencyShow}
        secondCurrency={secondCurrencyShow}
        amount={amountToShow}
        result={result}
      />
    </StyledForm>
  );
};

export default Form;
