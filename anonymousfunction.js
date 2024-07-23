//Anonymous functions in JavaScript are functions that are defined without a name. They are often used as arguments for higher-order functions, such as callbacks, or assigned to variables to create closures. Here are some key points about anonymous functions in JavaScript:

//Definition: An anonymous function is defined using the function keyword followed by a set of parentheses and a block of code. The function name is omitted.

const add = function(a, b) {
    return a + b;
  };
  //Usage: Anonymous functions are typically used when the function needs to be used only once or when the function name is not important. They are often passed as arguments to other functions or assigned to variables.

  // Passing an anonymous function as a callback
[1, 2, 3].forEach(function(element) {
    console.log(element);
  });
  
  // Assigning an anonymous function to a variable
  const multiply = function(a, b) {
    return a * b;
  };

  //IIFE (Immediately Invoked Function Expression): Anonymous functions can be used to create IIFEs, which are functions that are executed as soon as they are defined. This is useful for creating private scopes.

  (function() {
  // This code runs immediately
  console.log("IIFE executed");
})();

//Arrow Functions: In ES6, arrow functions provide a more concise syntax for writing anonymous functions. They also have a different behavior regarding this compared to traditional anonymous functions.
const add = (a, b) => a + b;

// Single expression arrow function
const double = x => x * 2;

//Closures: Anonymous functions can be used to create closures, which are functions that have access to the variables in their lexical scope, even after the outer function has finished executing.
function createCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }
  
  const counter = createCounter();
  console.log(counter()); // 0
  console.log(counter()); // 1
  