let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculateResult();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    
    if (operation === '+') {
        result = prev + current;
    } else if (operation === '-') {
        result = prev - current;
    } else if (operation === '*') {
        result = prev * current;
    } else if (operation === '/') {
        result = prev / current;
    } else {
        return;
    }
    
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = currentOperand || '0';
}

updateDisplay();