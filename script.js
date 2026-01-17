const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll(".buttons button");
const calculator = document.getElementById("calculator");
const toggleBtn = document.getElementById("toggleLayout");

let expression = "";
let current = "";
let justCalculated = false;

const MAX_DISPLAY_LENGTH = 12;

// ---------- Calculator Logic ----------
function formatResult(num) {
  let str = num.toString();

  if (str.length > MAX_DISPLAY_LENGTH) {
    if (str.includes(".")) {
      const [int, dec] = str.split(".");
      const allowedDecimals = MAX_DISPLAY_LENGTH - int.length - 1;

      if (allowedDecimals > 0) {
        str = Number(num).toFixed(allowedDecimals);
      } else {
        str = Number(num).toExponential(5);
      }
    } else {
      str = Number(num).toExponential(5);
    }
  }
  return str;
}
