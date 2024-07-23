
// Declare a global variable
let globalVar;

// Function to demonstrate local and global variables
function demoLocalGlobalVar() {
 // Declare a local variable
  let localVar;

  // Assign values to local and global variables
 globalVar = "I am a global variable";
  localVar = "I am a local variable";

  // Print the values of local and global variables
  console.log("Global variable: " + globalVar);
 console.log("Local variable: " + localVar);
}

// Call the function
demoLocalGlobalVar();

