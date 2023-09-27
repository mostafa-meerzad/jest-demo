module.exports.getCustomerSync = function (id) {
  console.log("reading customer from the MongoDB...");
  return { id:id, points: 11 };
};

module.exports.getCustomer = async function (id) {
  return new Promise((resolve, reject) => {
    console.log("reading customer from the MongoDB...");
    resolve({ id, points: 11 });
  });
};
