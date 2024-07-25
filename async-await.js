//async/await in JavaScript are used to write asynchronous code that looks and behaves like synchronous code. They are part of the ECMAScript 2017 (ES8) specification and provide a more readable and concise way to handle asynchronous operations compared to callbacks or Promises.
//async Function: An async function is a function declared with the async keyword. It returns a Promise. If the function returns a value, the Promise is resolved with that value. If the function throws an error, the Promise is rejected with that error.
async function myAsyncFunction() {
    return "Hello, world!";
  }
  //await Keyword: The await keyword is used inside an async function to wait for a Promise to resolve. It pauses the execution of the function until the Promise is resolved or rejected. The resolved value of the Promise is returned by the await expression.
  async function myAsyncFunction() {
    const result = await somePromise();
    console.log(result);
  }
  //Error Handling: async/await provides a more straightforward way to handle errors using try/catch blocks.
  async function myAsyncFunction() {
    try {
      const result = await somePromise();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  //Chaining Promises: async/await allows for chaining multiple asynchronous operations in a more readable way.
  async function myAsyncFunction() {
    const result1 = await somePromise1();
    const result2 = await somePromise2(result1);
    const result3 = await somePromise3(result2);
    console.log(result3);
  }
  
  //Returning Promises: An async function can return a Promise directly. This is useful for chaining multiple asynchronous operations.
  async function myAsyncFunction() {
    return somePromise();
  }
  //Top-Level Await: In ES2020 (ES11), await can be used outside of an async function at the top level of a module. This allows for waiting for a Promise to resolve at the module level.
  const result = await somePromise();
