
let currentInput = '';
let currentResult = '';
let operator = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentResult = '';
    operator = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('display').value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
