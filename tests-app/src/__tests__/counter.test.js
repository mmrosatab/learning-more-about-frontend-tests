import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../components/Counter";

describe("Counter Tests", () => {
  test("Check Counter is visible", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter-testid");
    expect(counter).toBeVisible();
    expect(counter).toBeInTheDocument();
  });

  test("Check Counter initial state", () => {
    render(<Counter initialValue={0} />);
    const h1 = screen.getByTestId("counter-h1-testid");
    expect(h1).toHaveTextContent(0);
  });

  test("Check Counter add 1", () => {
    render(<Counter initialValue={0} />);
    const button = screen.getByTestId("counter-btn-add-testid");
    fireEvent.click(button);
    const h1 = screen.getByTestId("counter-h1-testid");
    expect(h1).toHaveTextContent(1);
  });

  test("Check Counter subtract one", () => {
    render(<Counter initialValue={2} />);
    const button = screen.getByTestId("counter-btn-sub-testid");
    fireEvent.click(button);
    const h1 = screen.getByTestId("counter-h1-testid");
    expect(h1).toHaveTextContent(1);
  });

  test("Check Counter subtract one when counter value is zero", () => {
    render(<Counter initialValue={0} />);
    const button = screen.getByTestId("counter-btn-sub-testid");
    fireEvent.click(button);
    const h1 = screen.getByTestId("counter-h1-testid");
    expect(h1).toHaveTextContent(0);
  });
});
