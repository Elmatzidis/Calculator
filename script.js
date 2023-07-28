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

deleteNumber.addEventListener('click',deleteNum)

equal.addEventListener('click',()=>{
    if(currentNum!="" && previousNum!=""){
        operate()
    }
})

decimal.addEventListener('click',()=>{
    addDemical()
})

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
    if(currentNum<0){
        previousNum="ERROR"
        previousOperand.textContent=""
        currentOperand.textContent=previousNum  
        operator=""
        return
    }
    previousNum/=currentNum
  }
  previousOperand.textContent = "";
  currentOperand.textContent = previousNum;
  console.log(previousNum)
}

function clearNum(){
    currentNum=""
    previousNum=""
    operator=""
    previousOperand.textContent="0"
    currentOperand.textContent=""
}

function deleteNum(){
    currentOperand.textContent=currentOperand.textContent.toString().slice(0,-1)
}

function addDemical(){
    if(!currentNum.includes(".")){
        currentNum+="."
        currentOperand.textContent=currentNum
    }
}
