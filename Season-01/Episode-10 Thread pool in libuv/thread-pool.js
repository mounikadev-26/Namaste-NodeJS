const fs = require("fs");
const crypto = require("crypto");

// Set the size of Node.js libuv thread pool to 5. By default, the thread pool contains only 4 threads.

process.env.UV_THREADPOOL_SIZE = 5;

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//     console.log("File Reading of CB");
// })

crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF done");
});

crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF done");
});

crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF done");
});

crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF done");
});

crypto.pbkdf2("password", "salt", 500000, 10, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF done");
});
