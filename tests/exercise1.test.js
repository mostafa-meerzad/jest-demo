const exercise = require("../exercise/exercise1");

// test("exercise1 - should return fizz", () => {
//     const result = fizzBuzz(5);
//     expect(result).toBe("fizz");
// })

describe("fizzBuzz", () => {
  //   it("should throw if the input is not a number", () => {
  //     // testing for none number value should include all none number values (the general patters)
  //     expect(() => {
  //       exercise.fizzBuzz("hello");
  //     }).toThrow();
  //   });

  it.each(["", "some text", null, {}, false])(
    "should throw if the input is not a number %s",
    (value) => {
      expect(() => {
        exercise.fizzBuzz(value);
      }).toThrow();
    }
  );

  it("should return fizzBuzz if the number is divisible by both 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("fizzBuzz");
  });

  it("should return fizz if the number is divisible by 3", () => {
    const result = exercise.fizzBuzz(9);
    expect(result).toBe("fizz");
  });

  it("should return buzz if the number is only divisible by 5", () => {
    const result = exercise.fizzBuzz(10);
    expect(result).toBe("buzz");
  });

  it("should return the passed number if the passed number is neither divisible by 3 nor 5", () => {
    const inputNumber = 23;
    const result = exercise.fizzBuzz(inputNumber);
    expect(result).toBe(inputNumber);
  });
});
