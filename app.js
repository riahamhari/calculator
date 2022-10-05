// Number Keys
const number = document.querySelectorAll('.numBtn')

// Clear Keys
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');


const display = document.querySelector('.display')
const calculation = document.querySelector('.calculation')




function operate(operator, x, y) {
    switch (operator) {
        case '/':
            answer = x / y
            break
        case '+':
            answer = x + y
            break
        case '-':
            answer = x - y
            break

        case '*':
            answer = x * y
            break

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


