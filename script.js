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
const demical = document.querySelector("[data-demical]");

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    getNumbers(e.target.textContent);
  });
});
operators.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    getOperator(e.target.textContent);
  })
);

equal.addEventListener('click',operate)

clear.addEventListener('click',clearNum)

function getNumbers(number) {
  currentNum += number;
  currentOperand.textContent = currentNum;
}

function getOperator(op) {
  operator = op;
  previousNum = currentNum;
  previousOperand.textContent = previousNum+""+operator;
  currentNum = "";
  currentOperand.textContent = "";
}
function operate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum += currentNum;
  }
  else if(operator ==="-"){
    previousNum-=currentNum
  }
  else if(operator ==="*"){
    previousNum*=currentNum
  }
  else if(operator ==="÷"){
    previousNum/=currentNum
  }
  previousOperand.textContent = "";
  currentOperand.textContent = previousNum;
  console.log(previousNum)
}


