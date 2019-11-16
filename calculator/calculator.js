
/**
 * The calculator object holds all the data needed to construct a valid expression.
 */
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};

/**
 * The performCalculation object performs calculations.
 */
const performCalculation = {
  '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  '=': (firstOperand, secondOperand) => secondOperand
};

/**
 * Updates the calculator display.
 */
function updateDisplay() {
  let display = document.querySelector(".display-text");
  display.innerText = calculator.displayValue;
}

/** 
 * Inputs numbers in the display.
 */
function inputDigit() {
  const { displayValue , waitingForSecondOperand } = calculator;
  let digit = this.innerText;

  //check if waitingForSecondOperand is true, to clear the displayValue
  if (waitingForSecondOperand === true){
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  }
  else{
    //Do nothing if value already contains a "." and another is being added
    if (!(digit === "." && calculator.displayValue.includes("."))){
      //Overwrite displayValue if the current value is 0
      //Otherwise append to it
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }

  //print the calculator object in the console
  console.log(calculator);

  //update the display
  updateDisplay();
}

/**
 * Store first operand and update the display.
 */
function handleOperator(){
  const { firstOperand, displayValue, operator, waitingForSecondOperand } = calculator;

  //store the operator in a variable
  let nextOperator = this.innerText;

  //convert current number displayed to a float number
  const inputValue = parseFloat(displayValue);

  //if the user inputs two consecutive operators,
  //replace the selected operator.
  if (operator !== null && waitingForSecondOperand){
    calculator.operator = nextOperator;
    
    //print the calculator object in the console
    console.log(calculator);
    return;
  }

  //store the result in firstOperand if it's null
  //if an operator exists, perform a calculation
  if (firstOperand == null) {
    calculator.firstOperand = inputValue;
  }
  else if (operator !== null){
    const result = performCalculation[operator](firstOperand, inputValue);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;

    //update display
    updateDisplay();
  }

  //set to true to indicate that second operand is ready to be input
  calculator.waitingForSecondOperand = true;
  
  //store the operator pressed by the user
  calculator.operator = nextOperator;

  //print the calculator object in the console
  console.log(calculator);
}

/**
 * Resets the calculator.
 */
function resetCalculator(){
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;

  //print the calculator object in the console
  console.log(calculator);

  //update the display
  updateDisplay();
}

/**
 * Removes a number from the display.
 */
function removeNumber(){
  const { displayValue } = calculator;
  //remove last number/decimal of displayValue
  if (displayValue !== '0'){
    calculator.displayValue = calculator.displayValue.slice(0, -1);
  }

  //print the calculator object in the console
  console.log(calculator);

  //update the display
  updateDisplay();
}

/**
 * Sets the numbers and decimal keys.
 */
function setNumbersAndDecimal() {
  let numberKeys = document.querySelectorAll(".button-number");
  for (var i = 0; i < numberKeys.length; i++) {
    numberKeys[i].addEventListener('click', inputDigit, false);
  }
}

/**
 * Sets the operator keys.
 */
function setOperators() {
  let operatorKeys = document.querySelectorAll(".button-operator");
  for (var i = 0; i < operatorKeys.length; i++) {
    operatorKeys[i].addEventListener('click', handleOperator, false);
  }
}

/**
 * Sets the equal key.
 */
function setEqualKey() {
  let equalKey = document.getElementById("id-evaluate");
  equalKey.addEventListener('click', handleOperator, false);
} 

/**
 * Sets the all clear (AC) key.
 */
function setAllClearKey() {
  let resetKey = document.getElementById("id-reset");
  resetKey.addEventListener('click', resetCalculator, false);
}
/**
* Sets the backspace key.
*/
function setBackspaceKey() {
  let backSpaceKey = document.getElementById("id-backspace");
  backSpaceKey.addEventListener('click', removeNumber, false);
}

/**
 * Main function of the script.
 */
function main() {
  updateDisplay();
  setNumbersAndDecimal();
  setOperators();
  setEqualKey();
  setAllClearKey();
  setBackspaceKey();
}

document.addEventListener('DOMContentLoaded', main, false);
