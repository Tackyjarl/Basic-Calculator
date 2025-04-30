//  <----- BASIC CALCULATOR ----->

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

// <----- MAKE CHANGE CALCULATOR ----->

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

// <----- UNIT CONVERTER CALCULATOR ---->

let firstUnitInput = "";
let secondUnitInput = "";
let currentUnitNumberInput = "";

function selectUnit(U1) {
  if (firstUnitInput === "") {
    firstUnitInput = U1;
  }
  if (firstUnitInput !== "") {
    secondUnitInput = U1;
  }
  if (currentUnitNumberInput === "") {
    return;
  } else {
    convertUnit();
  }
  document.getElementById(
    "unit__display-one"
  ).value = `${currentUnitNumberInput} ${firstUnitInput}`;
  // document.getElementById("unit__display-two").value = `${secondUnitInput}`;
}

function appendUnitNumber(number) {
  currentUnitNumberInput += number;
  document.getElementById(
    "unit__display-one"
  ).value = `${currentUnitNumberInput} ${firstUnitInput}`;
  if (firstUnitInput !== "") {
    convertUnit();
  }
}

function clearUnitDisplay() {
  currentUnitNumberInput = "";
  firstUnitInput = "";
  secondUnitInput = "";
  document.getElementById("unit__display-one").value = "";
  document.getElementById("unit__display-two").value = "";
}

const kilometerToMeter = (km) => km * 1000;
const kilometerToCentimeter = (km) => km * 100000;
const kilometerToInch = (km) => km * 39370;
const kilometerToFoot = (km) => km * 3281;
const kilometerToMile = (km) => km * 0.62137;

const meterToKilometer = (m) => m * 0.001;
const meterToCentimeter = (m) => m * 100;
const meterToInch = (m) => m * 39.37;
const meterToFoot = (m) => m * 3.281;
const meterToMile = (m) => m * 0.00062137;

const centimeterToKilometer = (cm) => cm * 0.00001;
const centimeterToMeter = (cm) => cm * 0.01;
const centimeterToInch = (cm) => cm * 0.3937;
const centimeterToFoot = (cm) => cm * 0.03281;
const centimeterToMile = (cm) => cm * 0.0000062137;

const inchToKilometer = (i) => i * 0.0000254;
const inchToMeter = (i) => i * 0.0254;
const inchToCentimeter = (i) => i * 2.54;
const inchToFoot = (i) => i * 0.083;
const inchToMile = (i) => i * 0.0000157;

const footToKilometer = (ft) => ft * 0.0003048;
const footToMeter = (ft) => ft * 0.3048;
const footToCentimeter = (ft) => ft * 30.48;
const footToInch = (ft) => ft * 12;
const footToMile = (ft) => ft * 0.0001893;

const mileToKilometer = (mi) => mi * 1.609;
const mileToMeter = (mi) => mi * 1609.344;
const mileToCentimeter = (mi) => mi * 160934.4;
const mileToInch = (mi) => mi * 63360;
const mileToFoot = (mi) => mi * 5280;

const conversions = {
  Kilometer: {
    Meter: kilometerToMeter,
    Centimeter: kilometerToCentimeter,
    Inch: kilometerToInch,
    Foot: kilometerToFoot,
    Mile: kilometerToMile,
  },
  Meter: {
    Kilometer: meterToKilometer,
    Centimeter: meterToCentimeter,
    Inch: meterToInch,
    Foot: meterToFoot,
    Mile: meterToMile,
  },
  Centimeter: {
    Kilometer: centimeterToKilometer,
    Meter: centimeterToMeter,
    Inch: centimeterToInch,
    Foot: centimeterToInch,
    Mile: centimeterToMeter,
  },
  Inch: {
    Kilometer: inchToKilometer,
    Meter: inchToMeter,
    Centimeter: inchToCentimeter,
    Foot: inchToFoot,
    Mile: inchToMile,
  },
  Foot: {
    Kilometer: footToKilometer,
    Meter: footToMeter,
    Centimeter: footToCentimeter,
    Inch: footToInch,
    Mile: footToMile,
  },
  Mile: {
    Kilometer: mileToKilometer,
    Meter: mileToMeter,
    Centimeter: meterToCentimeter,
    Inch: meterToInch,
    Foot: meterToFoot,
  },
};

function convertUnit() {
  if (currentUnitNumberInput === "") return;
  let convertResult;
  let currentUnitNumber = parseFloat(currentUnitNumberInput);

  if (firstUnitInput in conversions && firstUnitInput === secondUnitInput) {
    convertResult = currentUnitNumber;
  } else {
    const conversionFunction = conversions[firstUnitInput][secondUnitInput];
    convertResult = conversionFunction(currentUnitNumber);
  }

  currentUnitResult = convertResult.toString();
  document.getElementById(
    "unit__display-two"
  ).value = `${currentUnitResult} ${secondUnitInput}`;
}

// <----- CHANGE SELECTED CALCULATOR ----->

function changeCalculator(calculator) {
  previousCalc = currentCalc;
  var prevCalcDisplay = document.getElementById(previousCalc);
  prevCalcDisplay.style.display = "none";
  currentCalc = calculator;
  var currentCalcDisplay = document.getElementById(currentCalc);
  currentCalcDisplay.style.display = "block";
}
