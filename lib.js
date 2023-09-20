// const db = require("./db")
// const sendMail = require("./mail")

// Testing numbers
module.exports.absolute = (number) =>{
    if(number > 0) return number
    if(number < 0) return -number
    return 0
} 

// Testing strings
module.exports.greet = (name) => {
    return "Welcome " + name
}

// Testing arrays
module.exports.getCurrencies = () =>{
    return ["USD", "AUD", "EUR"]
} 