import React, { useState } from "react";

export default function Counter({ value, add, sub }) {
  const [counter, setCounter] = useState(0);

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
    <div data-testid="counter-test-id">
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
}
