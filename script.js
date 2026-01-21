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

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (value === "AC") {
      expression = "";
      current = "";
      justCalculated = false;
      expressionEl.textContent = "";
      resultEl.textContent = "0";
      return;
    }

    if (value === "DEL") {
      expression = expression.slice(0, -1);
      current = current.slice(0, -1);
      expressionEl.textContent = expression;
      resultEl.textContent = current ? formatResult(current) : "0";
      return;
    }

    if (value === "=") {
        try {
        const rawResult = eval(expression);
        resultEl.textContent = formatResult(rawResult);
        expression = rawResult.toString();
        current = expression;
        justCalculated = true;
    } catch {
        resultEl.textContent = "Error";
    }
      return;
    }

    if (value === "%") {
        if (current) {
        current = (parseFloat(current) / 100).toString();
        expression = current;
        resultEl.textContent = formatResult(current);
      }
      return;
    }

    if (justCalculated && !isNaN(value)) {
      expression = value;
      current = value;
      justCalculated = false;
    } else {
      expression += value;
      current += value;
      justCalculated = false;
    }

    expressionEl.textContent = expression;
    resultEl.textContent = formatResult(current);
});
});

// ---------- Layout Toggle ONLY ----------
toggleBtn.innerHTML = "&#9790;";


