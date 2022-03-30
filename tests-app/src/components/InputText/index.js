import React from "react";

export default function InputText({ value, handleChange, dataTestId }) {
  return (
    <input
      type="text"
      value={value}
      onChance={(event) => handleChange(event.target.value)}
      data-testid={dataTestId}
    />
  );
}
