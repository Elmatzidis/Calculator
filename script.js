let currentNum = "";
let previousNum = "";
let operator = "";

const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

const equal = document.querySelector("[data-equals]");
const deleteNumber = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-all-clear]");
const operators = document.querySelectorAll("[data-operation]");
const numbers = document.querySelectorAll("[data-number]");
const decimal = document.querySelector("[data-demical]");

//When pressing on an number it gets it's value
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    getNumbers(e.target.textContent);
  });
});

//When pressing on an operator it gets it's value
operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    getOperator(e.target.textContent);
  })
);

//Makes you enter numbers from your keyboard
window.addEventListener("keydown", getKeyPress);

// Deletes a single digit
deleteNumber.addEventListener("click", deleteNum);

equal.addEventListener("click", () => {
  if (currentNum != "" && previousNum != "") {
    operate();
  }
});

decimal.addEventListener("click", () => {
  addDecimal();
});

clear.addEventListener("click", clearNum);

// Gets the number that you pressed
function getNumbers(number) {
  currentNum += number;
  currentOperand.textContent = currentNum;
}

// Gets the operator that you pressed
function getOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousOperand.textContent = previousNum + "" + operator;
  currentNum = "";
  currentOperand.textContent = "";
}

//All calculation are done here
function operate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum += currentNum;
  } else if (operator === "-") {
    previousNum -= currentNum;
  } else if (operator === "*") {
    previousNum *= currentNum;
  } else if (operator === "÷") {
    if (currentNum < 0) {
      previousNum = "ERROR";
      previousOperand.textContent = "";
      currentOperand.textContent = previousNum;
      operator = "";
      return;
    }
    previousNum /= currentNum;
  }
  previousOperand.textContent = "";
  currentOperand.textContent = previousNum;
  console.log(previousNum);
}

// Brings everything to it's original/0
function clearNum() {
  currentNum = "";
  previousNum = "";
  operator = "";
  previousOperand.textContent = "0";
  currentOperand.textContent = "";
}

// Deletes single digit
function deleteNum() {
  currentNum = currentNum.toString().slice(0, -1);
  currentOperand.textContent = currentNum;
}

// Detectes if there isn't a decimal and adds it
function addDecimal() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    currentOperand.textContent = currentNum;
  }
}

// Makes the keyboard functionable when pressing keys
function getKeyPress(e) {
  e.preventDefault();
  if (e.key >= 0 && e.key <= 9) {
    getNumbers(e.key);
  }
  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNum != "" && previousNum === "")
  ) {
    operate();
  }
  if (e.key === "+" || e.key === "-" || e.key === "/") {
    getOperator(e.key);
  }
  if (e.key === "*") {
    getOperator("*");
  }
  if (e.key === ".") {
    addDecimal();
  }
  if (e.key === "Delete") {
    clearNum();
  }
  if (e.key === "Backspace") {
    deleteNum();
  }
}
