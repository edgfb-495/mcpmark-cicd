// Fixed linting errors (all violations resolved)
function testFunction() {
  let correctSemicolon = 'This line has a semicolon';
  let singleQuotes = 'This uses single quotes as required';
  return `${correctSemicolon} | ${singleQuotes}`;
}

testFunction();