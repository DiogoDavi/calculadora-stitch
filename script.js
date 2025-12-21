let currentValue = '';
let previousValue = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentValue.length >= 10) return;
    currentValue += number;
    updateDisplay(currentValue);
}

function setOperation(op) {
    if (currentValue === '') return;

    if (previousValue !== '') {
        calculate();
    }

    operation = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    if (previousValue === '' || currentValue === '') return;

    const a = parseFloat(previousValue);
    const b = parseFloat(currentValue);
    let result;

    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b === 0 ? 'Erro' : a / b;
            break;
    }

    currentValue = result.toString();
    previousValue = '';
    operation = null;
    updateDisplay(currentValue);
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operation = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    display.textContent = value;
}
