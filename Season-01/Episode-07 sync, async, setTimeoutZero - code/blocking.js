const crypto = require("node:crypto");

console.log("Hello World");

var a = 20;
var b = 30;
//pbkdf2- Password based key derivative function version-2

//This is an synchronous function of pbkdf2 which will block the main thread and these type of synchronus functions does not have any callback functions

crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("Fist synchronous key is generated ");

//Asynchronous function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
  console.log("Below is the asynchronous key of your password");
});

function addition(x, y) {
  const result = x + y;
  return result;
}

var c = addition(a, b);
console.log("Addition is: " + c);
