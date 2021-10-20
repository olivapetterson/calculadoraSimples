//putting the functions on the buttons in html

const displayPrev = document.getElementById('prev');
const displayCurrent = document.getElementById('current');
const btnNumber = document.querySelectorAll('.number');
const btnOperator = document.querySelectorAll('.operator');

const display = new Display(displayPrev, displayCurrent);

btnNumber.forEach(button => {
    button.addEventListener('click', () => display.addNum(button.innerHTML));
});

btnOperator.forEach(button => {
    button.addEventListener('click', () => display.compute(button.value))
});