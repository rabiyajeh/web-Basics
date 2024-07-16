function nice(name){
    console.log("hey "+name+ "you are nice")
}
nice("sai")

function addNumbers(a, b) {
    return a + b;
  }
  
  const result = addNumbers(5, 10);
  console.log(result); // Output: 15
  // The function addNumbers takes two parameters, a and b, and returns their sum. The result is stored in the variable result and then logged to the console.
  //Functions in JavaScript are blocks of code designed to perform a specific task. They can be defined using the function keyword and can be called to execute the code within them.

//Function Declaration
//A function can be declared using the function keyword followed by the function name, a list of parameters in parentheses, and a block of code enclosed in curly braces.
/*
function functionName(parameters) {
  // code to be executed
}
*/
//Function Expression
//A function can also be defined as a variable using the function keyword. This is known as a function expression.
const functionName = function(parameters) {
    // code to be executed
  };

 // Calling a Function
//To call a function, you use its name followed by parentheses, passing any required arguments.

functionName(arguments);

//Return Statement
//The return statement is used to exit a function and optionally pass a value back to the caller. If no value is specified, the function returns undefined

function functionName(parameters) {
    // code to be executed
    return value;
  }
  