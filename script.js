// Giving  numButtons functionality

for (i = 0; i < 10; i++) {
  let numButton = document.getElementById("n" + i);
  numButton.onclick = (item) => {
    let screenContent = document.querySelector(".screen");
    if (operating == true) {
      screenContent.textContent = item.target.textContent;
      operating = false;
    } else {
      screenContent.textContent =
        screenContent.textContent + item.target.textContent;
    }
  };
}

// Giving reset button functionality

let resetButton = document.getElementById("reset");
resetButton.onclick = () => {
  document.querySelector(".screen").textContent = "";
  operationCounter = 0;
  storedValues = {};
};

// Operations Function

const operations = {
  add: (a, b) => a + b,
  min: (a, b) => a - b,
  tim: (a, b) => a * b,
  div: (a, b) => a / b,
  equal: (a, b) => b,
  reset: (a, b) => "",
};

const operate = (operation, num1, num2) => {
  return operations[operation](Number(num1), Number(num2)).toString();
};

// wiring buttons to script

// let plusop = document.querySelector("#add");
// let minop = document.querySelector("#min");
// let timOp = document.querySelector("#tim");
// let divOp = document.querySelector("#div");
// let equalOp = document.querySelector("#equal");

let operationCounter = 0;
let storedValues = {};
let operating = false;

let operationButtons = document.querySelectorAll(".operation");

operationButtons.forEach((node) => {
  node.addEventListener("click", () => {
    operating = true;
    operationCounter += 1;
    storedValues["operation" + operationCounter] = [
      node.id,
      Number(document.querySelector(".screen").textContent),
    ];
    document.querySelector(".screen").textContent = "";

    if (operationCounter > 1) {
      document.querySelector(".screen").textContent = operate(
        storedValues["operation" + (operationCounter - 1)][0],
        storedValues["operation" + (operationCounter - 1)][1],
        storedValues["operation" + operationCounter][1]
      );
    }
  });
});
