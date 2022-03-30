import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

describe("Form Tests", () => {
  test("verify input text is visible", () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);
    const input = screen.getByTestId("form-input-test-id");
    expect(input).toBeVisible();
  });

  test("verify button is visible", () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);
    const button = screen.getByTestId("form-btn-test-id");
    expect(button).toBeVisible();
  });

  test("verify onSubmit is called", () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);
    const input = screen.getByTestId("form-input-test-id");
    fireEvent.change(input, { target: { value: "Hello World" } });
    const button = screen.getByTestId("form-btn-test-id");
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test("verify onSubmit is called with right values", () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);
    const input = screen.getByTestId("form-input-test-id");
    fireEvent.change(input, { target: { value: "Hello World" } });
    const button = screen.getByTestId("form-btn-test-id");
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalledWith("Hello World");
  });
});
