# Testing with Jest


` test("name for the test", cb where you define tests)`

 the number of tests should be equal or greater than the execution paths

```js

test("absolute - should return a positive number if input is positive", () => {
  // use a simple value doesn't matter what but should not be a confusing value

  const result = lib.absolute(1);
  expect(result).toBe(1);
});

```

**tests are first-class-citizens in your source code** meaning you should pay as much attention as the actual code to the tests 


instead of writing individual test functions you can group them

```js
    test("absolute - should return a positive number if input is positive", () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    
    test("absolute - should return a positive number if input is negative", () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    
    test("absolute - should return 0 if input is 0", () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

```

like so

describe is the function provided by jest to group related tests

takes a name for the group and a callback to put all your tests
```js

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

```

by these tests you can confidently refactor (changing the code structure without changing it's behavior) your code.

```js

test("greet - should return the greeting message", () => {
  const result = lib.greet("Mostafa")
  expect(result).toBe("Welcome Mostafa");
})
```

this test is very specific and can break by a slight change

this slight change in the code breaks the test

```js
module.exports.greet = (name) => {
  return "Welcome " + name + "!";
};

```
