import React, { useState } from "react";

const CurrentRateList = ({ rate, selectedCurrency, option }) => {
  const table = rate.map((x, i) => {
    return [x, option[i]];
  });

  return (
    <>
      <h2 className="mb-3">1 {selectedCurrency} = </h2>{" "}
      {table.map((el, i) => (
        <ul className="list-group" key={i}>
          <li className="list-group-item">
            <h3>{el[0]}</h3>
            <p>{el[1]}</p>
          </li>
        </ul>
      ))}
    </>
  );
};

export default CurrentRateList;
