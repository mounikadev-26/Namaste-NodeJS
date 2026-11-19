const xyz = require("./xyz.js");

console.log(xyz.calculateSum(10, 20));

console.log(xyz.a); //Trying to access private variable

//Requiring the same module again

const xyzAgain = require("./xyz");
console.log(xyz === xyzAgain);

//node.js caches the module after loading it for the 1st time. the second require() returns the cached module.
