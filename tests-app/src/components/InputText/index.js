import React from "react";

export default function InputText({ value, handleChange }) {
  return (
    <input
      type="text"
      placeholder="..."
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      data-testid="input-text-testid"
    />
  );
}
