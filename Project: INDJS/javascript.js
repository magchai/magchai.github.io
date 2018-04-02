//+ and - signs which increases and decreases the value when clicked
let value = document.getElementById('value');
let plusButton = document.getElementById('plusButton');
let minusButton = document.getElementById('minusButton');
var counterNum = 0;

// + when click adds 1 to the counter number

function add() {
    counterNum += 1;
    value.textContent = counterNum;
}
function addTen(){
    counterNum += 10;
    value.textContent = counterNum;
}

plusButton.addEventListener ('click', add);
plusButton.addEventListener ('dblclick', addTen);

// - when click minus 1 to the counter number
function minus() {
    if (counterNum !== 0){
    counterNum -= 1;
    value.textContent = counterNum;}
}
function minusTen() {
    if (counterNum > 10) {
    counterNum -= 10;
    value.textContent = counterNum;}
}

minusButton.addEventListener('click', minus);
minusButton.addEventListener('dblclick', minusTen);