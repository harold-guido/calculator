// Creating Number Button Divs

const keypad = document.querySelector(".keypad");
for (let i = 0; i < 10; i++) {
  // create divs
  let numButton = document.createElement("div");

  // give divs class
  numButton.classList.add("numButton");
  numButton.classList.add("button");

  // give divs id
  numButton.id = "n" + i;

  // give divs numbers
  numButton.textContent = i;

  // adding divs to father
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
