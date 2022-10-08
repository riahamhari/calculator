let shouldResetScreen = false;
let currentOperation = null
let firstNum = ''
let secondNum = ''


// Number Keys
const numbers = document.querySelectorAll('.numBtn')

// Clear Keys
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

// Operators
const operators = document.querySelectorAll('.opBtn')
const equalsBtn = document.querySelector('#equals')

// Calculator Screen
const currentSel = document.querySelector('#currentSel')
const lastSel = document.querySelector('#lastSel')

// decimal
const decimalBtn = document.querySelector('#decimal')

// event listeners

numbers.forEach((button) => button.addEventListener('click', () => appendNumber(button.textContent)))
operators.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)))
equalsBtn.addEventListener('click', evaluate)
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNum)
decimalBtn.addEventListener('click', () => appendDecimal(decimalBtn.textContent))


// functions


function appendNumber(number) {
    if (currentSel.textContent === '0' || shouldResetScreen)
        resetScreen()
    currentSel.textContent += number;

}

function resetScreen() {
    currentSel.textContent = '';
    shouldResetScreen = false;

}

function clear() {
    currentSel.textContent = '0'
    lastSel.textContent = ''
    firstNum = ''
    secondNum = ''
    currentOperation = null
}

function deleteNum() {
    currentSel.textContent = currentSel.textContent
        .toString()
        .slice(0, -1)
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstNum = currentSel.textContent
    currentOperation = operator
    lastSel.textContent = `${firstNum}${operator}`
    shouldResetScreen = true

}

function appendDecimal(dec) {
    if (currentSel.textContent.indexOf('.') > -1) return
    currentSel.textContent += dec;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentSel.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    secondNum = currentSel.textContent
    currentSel.textContent = roundResult(
        operate(currentOperation, firstNum, secondNum)
    )

    lastSel.textContent = `${firstNum}${currentOperation}${secondNum}=`
    currentOperation = null
}


function roundResult(number) {
    return Math.round(number * 1000) / 1000
}


function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}



function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case 'x':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}





// When a number is pressed display shows number
// When a operator is selected the calc area shows numberSelected and operator
// when the second number is selected, the display shows number
// When equals is pressed calc area shows number selected operator and equals. The display area shows the answer


// numOne.addEventListener('click', (e) => {
//     display.textContent = '1'
//     console.dir(e)
// })


