// All the code of this module is wrapped inside a function (IIFE)

// IIFE - Immediately Invoked Function Expression

(function () {
  // All the code of the module runs inside here
})();

// Variables and functions inside a module are private.

const a = 10;

function calculateSum(x, y) {
  return x + y;
}

// To share something with another module, we use module.exports.

module.exports = {
  calculateSum,
};

console.log("xyz.js is executed");
