const db = require("./db");
// const sendMail = require("./mail")

// Testing numbers
module.exports.absolute = (number) => {
  return number >= 0 ? number : -number;

  // if(number >= 0) return number
  // return -number

  // if(number > 0) return number
  // if(number < 0) return -number
  // return 0
};

// Testing strings
module.exports.greet = (name) => {
  return "Welcome " + name + "!";
};

// Testing arrays
module.exports.getCurrencies = () => {
  return ["USD", "AUD", "EUR"];
};

// Testing objects
module.exports.getProduct = (productId) => {
  return { id: productId, price: 10 };
};

// Testing exceptions
module.exports.registerUser = (userName) => {
  if (!userName) throw new Error("userName is required");
  return { id: new Date().getTime(), userName: userName };
};

// Mock function
module.exports.applyDiscount = (order) => {
  const customer = db.getCustomerSync(order.customerId);// getting customer is the dependency we need to mock of fake in order to write unit-tests
  console.log(customer.points)
  if (customer.points > 10) order.totalPrice *= 0.9;
};
