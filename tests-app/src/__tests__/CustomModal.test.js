import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomModal from "../components/CustomModal";

describe("Custom Modal Tests", () => {
  test("verify if modal is visible", () => {
    render(<CustomModal open={true} dataTestId={"modal-test-id"} />);
    const modal = screen.getByTestId("modal-test-id");
    expect(modal).toBeVisible();
  });

  test("verify if modal show text correctly", () => {
    render(
      <CustomModal open={true} dataTestId={"modal-test-id"}>
        <h1>Hello</h1>
      </CustomModal>
    );
    const modal = screen.getByTestId("modal-test-id");
    expect(modal).toHaveTextContent("Hello");
  });

  test("verify if modal is not on DOM", () => {
    render(<CustomModal open={false} dataTestId={"modal-test-id"} />);
    const modal = screen.queryByTestId("modal-test-id");
    expect(modal).toBe(null);
  });
});

// https://avinashadluri.medium.com/a-guide-to-react-testing-with-react-testing-library-623cbbe57a22
