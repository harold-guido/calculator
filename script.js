// Giving reset button functionality

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  document.querySelector(".screen").textContent = "";
  operationCounter = 0;
  storedValues = {};
});

// Operations Function

const operations = {
  add: (a, b) => Math.round((a + b) * 100000) / 100000,
  min: (a, b) => Math.round((a - b) * 100000) / 100000,
  tim: (a, b) => Math.round(a * b * 100000) / 100000,
  div: (a, b) => Math.round((a / b) * 100000) / 100000,
  equal: (a, b) => (Math.round(b) * 100000) / 100000,
};

const operate = (operation, num1, num2) => {
  return operations[operation](Number(num1), Number(num2)).toString();
};

let operationCounter = 0;
let storedValues = {};
let operating = false;

let operationButtons = document.querySelectorAll(".operation");

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
// Giving  numButtons functionality

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
// wiring buttons to script

// let plusop = document.querySelector("#add");
// let minop = document.querySelector("#min");
// let timOp = document.querySelector("#tim");
// let divOp = document.querySelector("#div");
// let equalOp = document.querySelector("#equal");
