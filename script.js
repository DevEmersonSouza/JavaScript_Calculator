let display = document.getElementById("calcDisplay").textContent;
let result = 0;
let operator = "";

// Função de exibição dos números //

function number(value) {
    calcDisplay.value += value
}

// Funções dos botões especiais //

function clearButton(value) {
    calcDisplay.value = value
}
function operation(value) {
    operator = value;
    calcDisplay.value += value
}
function backSpace(){
    calcDisplay.value = calcDisplay.value.slice(0, - 1);
} 

// Funções de Operações Matemáticas //

function opResults(value) {
    if (typeof value === "number") {
      display = display + value;
    }
    if (typeof value === "string") {
      if (value === "-") {
        result = parseInt(display);
        display = "";
        operator = "-";
      }
      if (value === "+") {
        result = parseInt(display);
        display = "";
        operator = "+";
      }
      if (value === "=") {
        if (operator === "+") {
          display = result + parseInt(display);
          operator = "";
        }
        if (operator === "-") {
          display = result - parseInt(display);
          operator = "";
        }
      }
    }
  
    document.getElementById("resultDisplay").textContent = display;
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

