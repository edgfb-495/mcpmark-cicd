// This file has intentional linting violations
const unusedVariable = "This variable is unused (violates no-unused-vars)";

function testFunction() {
  console.log("Using console (violates no-console warning)");
  let missingSemicolon = "This line has no semicolon" // Violates semi rule
  let doubleQuotes = "This uses double quotes instead of single" // Violates quotes rule
}

testFunction();
