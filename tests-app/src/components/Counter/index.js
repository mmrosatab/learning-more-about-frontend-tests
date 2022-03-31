import React, { useState } from "react";

export default function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    const value = counter + 1;
    setCounter(value);
  };

  const handleSub = () => {
    if (counter > 0) {
      const value = counter - 1;
      setCounter(value);
    }
  };

  return (
    <div data-testid="counter-testid">
      <h1 data-testid="counter-h1-testid"> {counter}</h1>
      <button data-testid="counter-btn-add-testid" onClick={handleAdd}>
        +
      </button>
      <button data-testid="counter-btn-sub-testid" onClick={handleSub}>
        -
      </button>
    </div>
  );
}
