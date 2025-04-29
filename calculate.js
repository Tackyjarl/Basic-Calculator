let currentInput = "";
let currentOperation = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  currentOperation = operation;
  previousInput = currentInput;
  currentInput = "";
  document.getElementById(
    "display"
  ).value = `${previousInput} ${currentOperation}`;
}

function calculate() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  document.getElementById("display").value = "";
}

let currentChangeInput = "";

function appendChangeNumber(number) {
  currentChangeInput += number;
  document.getElementById("change__display").value =
    "$" + `${currentChangeInput}`;
}

function calculateChange() {
  let amount = currentChangeInput;
  let array = [];
  let denominations = [
    { dem: "Dollar", value: 1 },
    {
      dem: "Quarter",
      value: 0.25,
    },
    {
      dem: "Dime",
      value: 0.1,
    },
    {
      dem: "Nickel",
      value: 0.05,
    },
    {
      dem: "Penny",
      value: 0.01,
    },
  ];
  for (let i = 0; i <= denominations.length - 1; i++) {
    if (amount == 0) {
      break;
    }
    if (amount != 0) {
      array.push(
        Math.floor(amount / denominations[i].value) +
          " " +
          denominations[i].dem +
          " "
      );
      amount =
        amount -
        Math.floor(amount / denominations[i].value) * denominations[i].value;
    }
  }
  changeResult = array;
  document.getElementById("change__display").value = changeResult;
}

function clearChangeDisplay() {
  currentChangeInput = "";
  document.getElementById("change__display").value = "";
}

let previousCalc = "";
let currentCalc = "calculator";

function changeCalculator(calculator) {
  previousCalc = currentCalc;
  var prevCalcDisplay = document.getElementById(previousCalc);
  prevCalcDisplay.style.display = "none";
  currentCalc = calculator;
  var currentCalcDisplay = document.getElementById(currentCalc);
  currentCalcDisplay.style.display = "block";
}
