// Modules protect their variables and functions from leaking

let x = "Hello";
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

//console.log(module.exports); //Empty Object

module.exports = { x, calculateSum };
