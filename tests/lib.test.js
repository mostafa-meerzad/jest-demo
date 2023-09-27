const lib = require("../lib");
const db = require("../db");

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

// too specific

// test("greet - should return the greeting message", () => {
//   const result = lib.greet("Mostafa");
//   expect(result).toBe("Welcome Mostafa");
// });

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Mostafa");
    // expect(result).toContain("Mostafa")
    expect(result).toContain("Welcome");
    expect(result).toMatch(/Mostafa/);
  });
});

describe("getCurrency", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    // too general
    // expect(result).toBeDefined()
    // expect(result).not.toBeNull()

    // too specific
    // expect(result.length).toBe(3)
    // expect(result[0]).toBe("USD")
    // expect(result[1]).toBe("EUR")
    // expect(result[2]).toBe("AUD")

    // proper way
    // expect(result).toContain("AUD")
    // expect(result).toContain("USD")
    // expect(result).toContain("EUR")

    // ideal way
    expect(result).toEqual(expect.arrayContaining(["AUD", "USD", "EUR"]));
  });
});

describe("getProduct", () => {
  it("should return product with the given id", () => {
    const result = lib.getProduct(1);
    // bad test
    // expect(result).toBe({id:1, price:10}) // compares two identical objects that are located on different locations of memory

    // too specific
    // expect(result).toEqual({id:1, price:10, rank:100}) // requires two objects succeeds if identical otherwise fails

    // proper way
    // expect(result).toMatchObject({id:1, price:10, rank:100}) // takes an object with some properties that you are interested in

    expect(result).toHaveProperty("id", 1); // takes the expected property with the value
  });
});

describe("registerUser", () => {
  // it("should throw if userName is falsy", () => {
  //   expect(() => {
  //     lib.registerUser("");
  //   }).toThrow();
  // });

  // test registerUser with multiple falsy values (parameterized test)
  it.each([null, undefined, NaN, 0, "", false])(
    "throws an exception for a falsy value %s",
    (value) => {
      expect(() => {
        lib.registerUser(value);
      }).toThrow();
      // }).toThrowError("userName is required")
    }
  );
  it("should return the user object if a valid userName is passed", () => {
    const result = lib.registerUser("Mostafa");
    expect(result).toMatchObject({ userName: "Mostafa" });
    expect(result.id).toBeGreaterThan(0);
  });
});

jest.mock("../db");

describe("applyDiscount", () => {
  it("should apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync.mockReturnValue({ id: 1, points: 20 });

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    
    expect(order.totalPrice).toEqual(9);
  });
});
