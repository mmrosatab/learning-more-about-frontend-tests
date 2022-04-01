const increment = (num) => num + 1;
const decrement = (num) => num - 1;
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;

describe("Math tests", () => {
  test("increment function test", () => {
    let number = 0;
    number = increment(number);
    expect(number).toBe(1);
  });

  test("decrement function test", () => {
    let number = 0;
    number = decrement(number);
    expect(number).toBe(-1);
  });

  test("sum function test", () => {
    let number = sum(3, 2);
    expect(number).toBe(5);
  });

  test("subtract function test", () => {
    let number = subtract(3, 2);
    expect(number).toBe(1);
  });

  test("multiply function test", () => {
    let number = multiply(3, 2);
    expect(number).toBe(6);
  });

  test("divide function test", () => {
    let number = divide(10, 2);
    expect(number).toBe(5);
  });

  test("divide function test with 0", () => {
    let number = divide(10, 0);
    expect(number).toBe(Infinity);
  });
});

// reference material
// https://medium.com/swlh/decoupling-logic-from-react-components-f6035646c275
// https://levelup.gitconnected.com/javascript-clean-code-function-parameters-and-side-effects-d5d7365e5105
// https://jestjs.io/docs/tutorial-react
// https://avinashadluri.medium.com/a-guide-to-react-testing-with-react-testing-library-623cbbe57a22
