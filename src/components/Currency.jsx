import React from "react";

const Currency = ({ options, selectedCurrency, onChangeCurrency, onChangeAmount, amount, disabled }) => {
  return (
    <div className="d-flex mb-3 ms-4">
      <input className="form-control" type="number" value={`${amount}`} onChange={onChangeAmount} disabled={disabled} />
      <select className="form-select ms-2" value={selectedCurrency} onChange={onChangeCurrency}>
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Currency;
