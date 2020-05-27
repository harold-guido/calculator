let operationCounter = 0;
let storedValues = {};
let operating = true;

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  document.querySelector(".screen").textContent = "";
  operationCounter = 0;
  storedValues = {};
  operating = true;
});

for (i = 0; i < 10; i++) {
  let numButton = document.getElementById("n" + i);
  numButton.onclick = (number) => {
    let screenContent = document.querySelector(".screen");
    if (operating == true) {
      screenContent.textContent = number.target.textContent;
      operating = false;
    } else {
      screenContent.textContent += number.target.textContent;
    }
  };
}

let dotButton = document.getElementById("dot");
dotButton.onclick = (dot) => {
  let screenContent = document.querySelector(".screen");
  if (operating != true && !screenContent.textContent.includes(".")) {
    screenContent.textContent += dot.target.textContent;
  }
};

let backSpace = document.getElementById("backspace");
backSpace.onclick = () => {
  let screenContent = document.querySelector(".screen");
  if (operating != true && screenContent.textContent.length > 0) {
    screenContent.textContent = removeLastChar(screenContent.textContent);
  }
};
const removeLastChar = (string) => {
  workingString = " " + string;
  charArray = workingString.split("");
  charArray.pop();
  return charArray.join("");
};

let operationButtons = document.querySelectorAll(".operation");

const operations = {
  add: (a, b) => Math.round((a + b) * 100000) / 100000,
  min: (a, b) => Math.round((a - b) * 100000) / 100000,
  tim: (a, b) => Math.round(a * b * 100000) / 100000,
  div: (a, b) => Math.round((a / b) * 100000) / 100000,
  equal: (a, b) => (Math.round(b) * 100000) / 100000,
};

const operate = (operation, num1, num2) => {
  result = operations[operation](Number(num1), Number(num2)).toString();
  if (result.length > 13) {
    return Number(result).toExponential(6);
  }
  return result;
};

operationButtons.forEach((operation) => {
  if (operation.id != "reset") {
    operation.onclick = (op) => {
      operating = true;
      operationCounter += 1;

      if (operationCounter == 1) {
        storedValues[operationCounter] = [
          op.target.id,
          Number(document.querySelector(".screen").textContent),
        ];
      } else if (operationCounter > 1) {
        storedValues[operationCounter] = [
          op.target.id,
          Number(document.querySelector(".screen").textContent),
        ];

        document.querySelector(".screen").textContent = operate(
          storedValues[operationCounter - 1][0],
          storedValues[operationCounter - 1][1],
          storedValues[operationCounter][1]
        );

        storedValues[operationCounter] = [
          op.target.id,
          Number(document.querySelector(".screen").textContent),
        ];
      }
    };
  }
});
