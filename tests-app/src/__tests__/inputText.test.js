import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputText from "../components/InputText";

describe("InputText Tests", () => {
  test("Check InputText is visible", () => {
    const handleChange = jest.fn();
    render(<InputText value="" handleChange={handleChange} />);
    const input = screen.getByTestId("input-text-testid");
    expect(input.value).toBe("");
    expect(input).toBeVisible();
    expect(input).toBeInTheDocument();
  });

  test("Check handleChange is called", () => {
    const handleChange = jest.fn();
    render(<InputText value="Hello" handleChange={handleChange} />);
    const input = screen.getByTestId("input-text-testid");
    fireEvent.change(input, { target: { value: "Hello World" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
