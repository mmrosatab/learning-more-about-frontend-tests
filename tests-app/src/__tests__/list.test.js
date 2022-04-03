import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../components/List";

describe("List tests", () => {
  test("Check list component is visible", () => {
    render(<List />);
    const listEl = screen.getByTestId("list-testid");
    expect(listEl).toBeVisible();
    expect(listEl).toBeInTheDocument();
  });

  test("Check ul is not visible", () => {
    render(<List />);
    const ul = screen.queryByTestId("list-ul-testid");
    expect(ul).toBe(null);
  });

  test("Check list is visible with initial data", () => {
    const items = ["text1", "text2", "text3"];
    render(<List items={items} />);
    const lis = screen.getAllByTestId("list-item-testid");
    expect(lis.length).toBe(items.length);
    const map = lis.map((item) => item.textContent);
    expect(map).toEqual(items);
  });

  test("Check list add item", () => {
    const items = ["text1", "text2", "text3"];

    render(<List items={items} />);

    const initialItems = screen.getAllByTestId("list-item-testid");
    const initialMap = initialItems.map((item) => item.textContent);
    expect(initialMap).toEqual(items);

    const input = screen.getByTestId("list-input-testid");
    fireEvent.change(input, { target: { value: "text4" } });
    const button = screen.getByTestId("list-btn-testid");
    fireEvent.click(button);

    const allItems = screen.getAllByTestId("list-item-testid");
    const updateMap = allItems.map((item) => item.textContent);
    const updateItems = ["text1", "text2", "text3", "text4"];
    expect(updateMap).toEqual(updateItems);
  });

  test("Check list delete item", () => {
    const items = ["text1", "text2", "text3"];

    render(<List items={items} />);

    const initialItems = screen.getAllByTestId("list-item-testid");
    const initialMap = initialItems.map((item) => item.textContent);
    expect(initialMap).toEqual(items);

    const lis = screen.getAllByTestId("list-li-testid");
    lis.forEach((li) => {
      if (li.childNodes[0].textContent === "text2") {
        const button = li.childNodes[1];
        fireEvent.click(button);
      }
    });

    const allItems = screen.getAllByTestId("list-item-testid");
    const updateMap = allItems.map((item) => item.textContent);
    const updateItems = ["text1", "text3"];
    expect(updateMap).toEqual(updateItems);
  });
});
