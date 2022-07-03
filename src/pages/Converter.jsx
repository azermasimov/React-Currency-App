import React, { useEffect, useState } from "react";
import Currency from "../components/Currency";

const Converter = () => {
  const [options, setOptions] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AZN");
  const [exchange, setExchange] = useState();
  const [amount, setAmount] = useState(1);

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
      .then((result) => {
        setOptions(Object.keys(result.symbols));
      })
      .catch((error) => console.log("error", error));
  }, []);

  //  Fetch data rates
  useEffect(() => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setExchange(data.result))
      .catch((error) => console.log("error", error));
  }, [amount, fromCurrency, toCurrency]);

  function changeSymbols() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <div className="container">
      <h1 className="mt-3">Converter</h1>
      <div className="row d-flex justify-content-center m-5">
        <div className="col mt-3">
          <p className="fs-5">From</p>
          <Currency
            options={options}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={(e) => setAmount(e.target.value)}
            amount={amount}
            disabled={false}
          />
        </div>
        <div className="col rounded-circle m-3">
          <i
            className="fs-4 bi bi-arrow-left-right p-2"
            onClick={changeSymbols}
          ></i>
        </div>
        <div className="col mt-3">
          <p className="fs-5">To</p>
          <Currency
            options={options}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={(e) => setAmount(e.target.value)}
            amount={exchange}
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
