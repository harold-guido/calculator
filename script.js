// Giving  numButtons functionality

for (i = 0; i < 10; i++) {
  numButton = document.getElementById("n" + i);
  numButton.onclick = (item) => {
    screenContent = document.querySelector(".screen");
    screenContent.textContent =
      screenContent.textContent + item.target.textContent;
  };
}

// Giving reset button functionality

resetButton = document.getElementById("reset");
resetButton.onclick = () => {
  document.querySelector(".screen").textContent = "";
};

// Operations Function

const operations = {
  add: (a, b) => a + b,
  min: (a, b) => a - b,
  tim: (a, b) => a * b,
  div: (a, b) => a / b,
};

// Wiring Buttons to Script
