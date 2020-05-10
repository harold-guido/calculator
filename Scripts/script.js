// Creating Number Button Divs
const keypad = document.querySelector(".keypad");

for (let i = 0; i < 10; i++) {
  let numButton = document.createElement("div");
  numButton.classList.add("numButton");
  numButton.id = "n" + i;
  numButton.textContent = i;
  keypad.appendChild(numButton);
}

// Operations Function

const operations = {
  add: (a, b) => a + b,
  min: (a, b) => a - b,
  tim: (a, b) => a * b,
  div: (a, b) => a / b,
};

// Wiring Buttons to Script
