import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

describe("Counter Tests", () => {
  test("Check InputText is visible", () => {
    const handleChange = jest.fn();
    render(
      <Counter
        value="Hello"
        handleChange={handleChange}
        dataTestId="counter-test-id"
      />
    );
    const input = screen.getByTestId("input-test-id");
    expect(input).toBeVisible();
    expect(input).toBeInTheDocument();
  });

  test("Check value", () => {});
});
