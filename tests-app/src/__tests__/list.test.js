import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";

describe("List tests", () => {
  test("Check list component is visible", () => {
    render(<List list={[]} />);
    const listEl = screen.getByTestId("list-testid");
    expect(listEl).toBeVisible();
    expect(listEl).toBeInTheDocument();
  });

  test("Check ul is not visible", () => {
    render(<List list={[]} />);
    const ul = screen.queryByTestId("list-ul-testid");
    expect(ul).toBe(null);
  });

  test("Check list is visible with initial data", () => {
    // render(<List list={["text1", "text2", "text3"]} />);
    // const ul = screen.getByTestId("list-ul-testid");
    // console.log(ul);
    // expect(ul).toHaveTextContent("text1");
  });
});
