# Episode 05 - Diving into the Node.js GitHub Repo

## 1. IIFE (Immediately Invoked Function Expression)

- IIFE is a function which gets executed immediately after it is created.
- Node.js wraps the code of every CommonJS module inside a function.
- This helps keep variables and functions private inside each module.

## 2. CommonJS Module Wrapper

Node.js wraps our module code inside a function.

(function (exports, require, module, **filename, **dirname) {
// Module code
});

### Parameters of the wrapper:

1. exports
   - Used to export values from a module.

2. require
   - Used to import another module.

3. module
   - Represents the current module.

4. \_\_filename
   - Gives the complete path of the current file.

5. \_\_dirname
   - Gives the directory path of the current file.

## 3. How do we access module.exports?

- Node.js passes the module object as a parameter to the IIFE.
- module.exports is used to share values with other modules.
- require() returns the value of module.exports.

## 4. How require() works

There are five stages:

1. Resolving the module
   - Node finds the path of the requested module.

2. Loading the module
   - Node loads the file content.

3. Wrapping the module
   - The module code is wrapped inside a function.

4. Evaluation
   - The module code gets executed.

5. Caching
   - Node stores the loaded module in the cache.

## 5. Module Caching

- When we require a module for the first time, Node loads and executes it.
- Node caches the loaded module.
- When we require the same module again, Node uses the cached module.
- This avoids executing the same module code repeatedly.

## 6. Node.js GitHub Repository

Important files to explore:

- lib/internal/modules/cjs/loader.js
- lib/internal/modules/helpers.js

These files help us understand how Node.js handles
CommonJS modules and require() internally.

## Quick Recap

- IIFE provides a separate function scope.
- Node.js wraps CommonJS modules automatically.
- require() is used to load modules.
- module.exports shares values between modules.
- Node.js follows five stages when loading a module.
- Module caching avoids repeated execution.
