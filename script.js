const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const calculator = document.getElementById("calculator");
const toggleBtn = document.getElementById("toggleLayout");

let expression = "";
let current = "";
let justCalculated = false;
