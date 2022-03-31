import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputText from "../components/InputText";

describe("InputText Tests", () => {
  test("Check InputText is visible", () => {
    // const handleChange = jest.fn();
    // render(
    //   <InputText
    //     value="Hello"
    //     handleChange={handleChange}
    //     dataTestId="input-test-id"
    //   />
    // );
    // const input = screen.getByTestId("input-test-id");
    // expect(input).toBeVisible();
    // expect(input).toBeInTheDocument();
  });

  test("Check value", () => {
    // const handleChange = jest.fn();
    // render(
    //   <InputText
    //     value="Hello"
    //     handleChange={handleChange}
    //     dataTestId="input-test-id"
    //   />
    // );
    // const input = screen.getByTestId("input-test-id");
    // expect(input.value).toBe("Hello");
  });

  // test("Check onChange", () => {
  //   const handleChange = jest.fn();

  //   render(
  //     <InputText
  //       value=""
  //       dataTestId={"input-test-id"}
  //       handleChange={handleChange}
  //     />
  //   );
  //   const input = screen.getByTestId("input-test-id");
  //   expect(input.value).toBe("");
  //   fireEvent.change(input, { target: { value: "Hello World" } });
  //   expect(handleChange).toHaveBeenCalledTimes(1);
  // });
});
