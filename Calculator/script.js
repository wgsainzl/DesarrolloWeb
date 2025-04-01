let fullOperation = "";
let array=[];

function addNumber(number) {
  let op = fullOperation.split("");
  if (op.includes("+") && number.toString() === "+") return;

  if (number === "=") {
    calculate();
    return;
  }

  if (number.toString() === "C") {
    fullOperation = '';
    showNumber();
    return;
  }

  fullOperation = fullOperation + number.toString();

  showNumber();
}

function calculate() {
  let historial = fullOperation;
  let op = fullOperation.split("");
  let result;
  if (op.includes("+")) {
    let number = fullOperation.split("+");
    result = Number(number[0]) + Number(number[1]);
  }
  if (op.includes("-")) {
    let number = fullOperation.split("-");
    result = Number(number[0]) - Number(number[1]);
  }
  if (op.includes("x")) {
    let number = fullOperation.split("x");
    result = Number(number[0]) * Number(number[1]);
  }
  if (op.includes("/")) {
    let number = fullOperation.split("/");
    result = Number(number[0]) / Number(number[1]);
  }
  if (op.includes("^")) {
    let number = fullOperation.split("^");
    result = Math.pow(Number(number[0]),  Number(number[1]));
  }
  fullOperation = result.toString();
  historial=historial+'='+result;
  array.push(historial);
  console.log(array);
  showNumber();
}

function showNumber() {
  let nHTML="";
  document.getElementById("operation").innerHTML = fullOperation;
  array.forEach(function(item) {
    nHTML += '<li>' + item + '</li>';
  });

  document.getElementById("hist").innerHTML = '<ul>' + nHTML + '</ul>'
}
