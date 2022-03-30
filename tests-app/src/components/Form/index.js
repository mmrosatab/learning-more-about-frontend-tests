import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <form data-testid="form-test-id" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        data-testid="form-input-test-id"
      />
      <button data-testid="form-btn-test-id" type="submit">
        Submit
      </button>
    </form>
  );
}
