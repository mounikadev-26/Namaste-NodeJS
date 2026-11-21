const fs = require("fs");
const https = require("https");

console.log("Asynchronous Javascript");

var a = 5;
var b = 10;

// 1. SYNCHRONOUS FILE READING
// readFileSync() is a synchronous file operation. It blocks the main thread until the file reading is completed.
// Only after reading the file, the next line gets executed.

fs.readFileSync("./file.txt", "utf8");

console.log("This will execute only after reading the file");

// 2. ASYNCHRONOUS API REQUEST
// https.get() initiates an HTTP GET request to the API. It is an asynchronous network I/O operation.

// Node.js uses its networking mechanisms and libuv's event loop to handle asynchronous network operations.

// The main thread does not wait for the API response. It continues executing the remaining synchronous code.

// Once the API response arrives, the callback is scheduled to execute on the main JavaScript thread.

// The callback executes when the event loop gets an opportunity to process the response.

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("data fetch successfully");
});

// 3. setTimeout()
// setTimeout() is an asynchronous timer operation. It schedules the callback to execute after 5 seconds.
// Node.js continues executing the remaining code.
// The timer is handled through the event loop. Once the timer expires, its callback becomes eligible for execution on the main thread.

setTimeout(() => {
  console.log("Execute it after 5 seconds");
}, 5000);

// Synchronous code executes on the main JavaScript thread. If a synchronous operation takes a long time, it blocks the main thread.

// 4. ASYNCHRONOUS FILE READING
// readFile() is an asynchronous file operation. Node.js delegates the file-reading work to its underlying asynchronous I/O mechanisms.

// For regular file-system operations, libuv generally uses its thread pool to perform the file operation.

// The main thread does not wait for the file reading. It continues executing the remaining JavaScript code.
// Once file reading is completed, the callback is queued to be executed on the main JavaScript thread.

//asynchrous functions
fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("file data:", data);
});

function multiply(x, y) {
  const result = x * y;
  return result;
}

const c = multiply(a, b);

console.log("Multiplication ans is:" + c);
