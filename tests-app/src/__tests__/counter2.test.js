const add = (num) => num + 1;
const sub = (num) => num - 1;

describe("Counter tests", () => {
  test("add function test", () => {
    let counter = 0;
    counter = add(counter);
    expect(counter).toBe(1);
  });

  test("sub function test", () => {
    let counter = 0;
    counter = sub(counter);
    expect(counter).toBe(-1);
  });
});

// reference material
// https://medium.com/swlh/decoupling-logic-from-react-components-f6035646c275
// https://levelup.gitconnected.com/javascript-clean-code-function-parameters-and-side-effects-d5d7365e5105
// https://jestjs.io/docs/tutorial-react
// https://avinashadluri.medium.com/a-guide-to-react-testing-with-react-testing-library-623cbbe57a22
