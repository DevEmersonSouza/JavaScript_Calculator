let display = document.getElementById("calcDisplay");
let result = document.getElementById("resultDisplay");
let operator = "";
fatorNumerico = 0

// Função de exibição dos números //

function number(value) {
    calcDisplay.value += value
}

// Funções dos botões especiais //

function operation(value) {
  operator = value;
  calcDisplay.value += value
}
function backSpace(){
  calcDisplay.value = calcDisplay.value.slice(0, - 1);
} 
function clearButton(value) {
    calcDisplay.value = value
}

// Funções de Operações Matemáticas //

function opResults(param) {
  if (typeof param === "number") {
    calcDisplay = calcDisplay + param;
  }
  if (typeof param === "string") {
    if (param === "-") {
      fatorNumerico = parseInt(calcDisplay);
      calcDisplay = "";
      operator = "-";
    }
    if (param === "+") {
      fatorNumerico = parseInt(calcDisplay);
      calcDisplay = "";
      operator = "+";
    }
    if (param === "=") {
      if (operator === "+") {
        calcDisplay = fatorNumerico + parseInt(calcDisplay);
        operator = "";
      }
      if (operator === "-") {
        calcDisplay = fatorNumerico - parseInt(calcDisplay);
        operator = "";
      }
    }
  }

  document.getElementById("calcDisplay").textContent = calcDisplay;
}

// Funções de seleção de operação //

function diviOp() {
    let element = document.getElementById("division");
    element.style.backgroundColor = '#c8c8c8';
}
function multiOp() {
    let element = document.getElementById("multiplier");
    element.style.backgroundColor = '#c8c8c8';
}
function plusOp() {
    let element = document.getElementById("plus");
    element.style.backgroundColor = '#c8c8c8';
}
function minusOp() {
    let element = document.getElementById("minus");
    element.style.backgroundColor = '#c8c8c8';
}

console.log(display)