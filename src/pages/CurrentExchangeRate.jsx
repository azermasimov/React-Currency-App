import React, { useEffect, useState } from "react";
import CurrentRateList from "../components/CurrentRateList";

const CurrentExchangeRate = () => {
  const [rates, setRates] = useState();
  const [options, setOptions] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const myHeaders = new Headers();
  myHeaders.append("apikey", `${process.env.REACT_APP_EXCHANGE_API_KEY}`);

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  // Fetch Symbols
  useEffect(() => {
    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
      .then((response) => response.json())
      .then((result) => setOptions(Object.keys(result.symbols)))
      .catch((error) => console.log("error", error));
  }, []);

  //  Fetch data rates
  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=${options}&base=${selectedCurrency}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setRates(data.rates))
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, selectedCurrency]);

  return (
    <div className="container">
      <h2 className="mt-3">Fresh Rate</h2>
      <div className="row d-flex justify-content-center m-5">
        <select
          className="form-select"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {options &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
        <div>
          {rates &&
            [rates].map((rate) => (
              <CurrentRateList
                key={Object.keys(rate)}
                selectedCurrency={selectedCurrency}
                option={Object.keys(rate)}
                rate={Object.values(rate)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentExchangeRate;
