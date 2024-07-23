/* Hoisting in JavaScript is a behavior where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use a variable or function before it has been declared. However, the value of the variable is undefined until it is actually initialized.

Here are some key points about hoisting in JavaScript:

Variable Hoisting: Variable declarations are hoisted to the top of their containing scope. The initial value of the variable is undefined until it is actually initialized.*/
console.log(x); // undefined
var x = 5;
//Function Hoisting: Function declarations are hoisted to the top of their containing scope. This means that you can call a function before it has been declared.

myFunction(); // Output: "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}

//Variable Initialization: Variable initialization is not hoisted. If you try to access a variable before it is initialized, you will get an undefined value.

console.log(y); // undefined
var y = 5;
 
//Function Expressions: Function expressions are not hoisted. If you try to call a function expression before it has been declared, you will get a ReferenceError.
myFunctionExpression(); // ReferenceError: myFunctionExpression is not defined
var myFunctionExpression = function() {
  console.log("Hello, world!");
};
//Block Scope: In ES6, let and const declarations are block-scoped, and their hoisting behavior is different from var. They are hoisted to the top of their block, but they are not initialized until the actual declaration is reached. This means that you cannot access a let or const variable before its declaration.

console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 5;

//Function Declaration vs. Function Expression: Function declarations are hoisted, while function expressions are not. This is because function declarations are fully parsed before any code is executed, while function expressions are only parsed when they are reached.
myFunctionDeclaration(); // Output: "Hello, world!"
myFunctionExpression(); // ReferenceError: myFunctionExpression is not defined
function myFunctionDeclaration() {
  console.log("Hello, world!");
}
var myFunctionExpression = function() {
  console.log("Hello, world!");
};
//Conclusion: Understanding hoisting in JavaScript is important for writing efficient and bug-free code. It is a fundamental concept that every JavaScript developer should be familiar with.
