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
  Button,
  Wrapper,
  StyledToggleIcon,
  ToggleButton,
} from "./styled";
import { fetchRates } from "./fetchRates";
import { useQuery } from "@tanstack/react-query";
import ExchangeInfo from "./ExchangeInfo";
import FormField from "./FormField";
import useCurrencies from "./useCurrencies";

const Form = () => {
  const { status, data } = useQuery(["ratesData"], fetchRates);
  const [result, setResult] = useState(0);
  const {
    displayData,
    currentData,
    setDisplayData,
    setCurrentData,
    getRate,
    switchCurrencies,
  } = useCurrencies(data);

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setResult(+currentData.currentValue * getRate());
    setDisplayData({
      displayAmount: currentData.currentValue,
      displayFirstCurrency: currentData.firstCurrency,
      displaySecondCurrency: currentData.secondCurrency,
    });
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Currency converter</Legend>
        <Clock />
        {status === "loading" && <LoadScreen />}
        {status === "success" && (
          <>
            <Wrapper>
              <FormField
                value={currentData.currentValue}
                onChange={({ target }) =>
                  setCurrentData((data) => ({
                    ...data,
                    currentValue: target.value,
                  }))
                }
                text="Enter value*"
                asSelect={false}
                required={true}
              />

              <FormField
                value={currentData.firstCurrency}
                onChange={({ target }) =>
                  setCurrentData((data) => ({
                    ...data,
                    firstCurrency: target.value,
                  }))
                }
                text="From:"
                asSelect={true}
                required={false}
              >
                {data.currencies.map(({ short }) => (
                  <option key={short}>{short}</option>
                ))}
              </FormField>

              <ToggleButton type="button" onClick={switchCurrencies}>
                <StyledToggleIcon />
              </ToggleButton>

              <FormField
                value={currentData.secondCurrency}
                onChange={({ target }) =>
                  setCurrentData((data) => ({
                    ...data,
                    secondCurrency: target.value,
                  }))
                }
                text="To:"
                asSelect={true}
                required={false}
              >
                {data.currencies.map(({ short }) => (
                  <option key={short}>{short}</option>
                ))}
              </FormField>

              <Rate
                getRate={getRate}
                firstCurrency={currentData.firstCurrency}
                secondCurrency={currentData.secondCurrency}
              />
            </Wrapper>
            <ExchangeInfo date={data.date} />
          </>
        )}

        {status === "success" && <Button>Calculate</Button>}
        {status === "error" && <Error />}
      </Fieldset>

      <Result displayData={displayData} result={result} />
    </StyledForm>
  );
};

export default Form;
