var numOne = 0;
var numTwo = 0;

// Operations Function

const operations = (operator, numOne, numTwo) => {
  var result = 0;
  switch (operator) {
    case "add":
      result = numOne + numTwo;
      break;
    case "subtract":
      result = numOne - numTwo;
      break;
    case "multiply":
      result = numOne * numTwo;
      break;
    case "divide":
      result = numOne / numTwo;
      break;
  }
  return result;
};
