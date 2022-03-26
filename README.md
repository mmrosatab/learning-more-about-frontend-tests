# Learning-more-about-frontend-tests

This repository has the purpose to explore more about how to test things in front-end with ReactJS, how make component contexts and requests mocks to use inside of test.

- [ ] - Write components and function without side effects

```javascript
// wrong way

let counter = 1;

const add = () => {
  counter++;
};

const sub = () => {
  counter--;
};

// right way

let counter = 0;
const add = (num) => num + 1;
const sub = (num) => num - 1;

counter = add(counter);

// It will be more easy to test function this way
```

- [ ] - How to mock axios and fetch requests?
