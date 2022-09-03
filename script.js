let calcDisplay = document.getElementById("resultDisplay");
let result = document.getElementById("calcDisplay");
let fatorNumerico = 0;

// Função de exibição dos números //

function number(value) {
  calcDisplay.value = calcDisplay.value + value;
}

// Funções dos botões especiais //

function operation(value) {
  operator = value
  fatorNumerico = parseInt(calcDisplay.value);
  calcDisplay.value = calcDisplay.value + value;
  clearButton();
}
function backSpace() {
  calcDisplay.value = calcDisplay.value.slice(0, -1);
}
function clearButton() {
  calcDisplay.value = "";
  result.value = "";
}

function clearEntryButton() {
  calcDisplay.value = parseInt("");
  
}
// Funções de Operações Matemáticas //

function opResults() {
  if (operator === "÷") {
    result.value = fatorNumerico / parseInt(calcDisplay.value);
  }
  if (operator === '+') {
    result.value = fatorNumerico + parseInt(calcDisplay.value);
    plusOp();
  }
  if (operator === '-') {
    result.value = fatorNumerico - parseInt(calcDisplay.value);
  }
  if (operator === 'x') {
    result.value = fatorNumerico * parseInt(calcDisplay.value);
  }
  if (operator === '%') {
    result.value = fatorNumerico % parseInt(result.value) + "%";
    
  }

  document.getElementById("resultDisplay").textContent = resultDisplay;
}

// Funções de seleção de operação //

function diviOp() {
  let element = document.getElementById("division");
  element.style.backgroundColor = "#c8c8c8";
}
function multiOp() {
  let element = document.getElementById("multiplier");
  element.style.backgroundColor = "#c8c8c8";
}
function plusOp() {
  let element = document.getElementById("plus");
  element.style.backgroundColor = "#c8c8c8";
}
function minusOp() {
  let element = document.getElementById("minus");
  element.style.backgroundColor = "#c8c8c8";
}