const toStringButton = document.getElementById("to-string-btn");
const expButton = document.getElementById("exp-btn");
const formatButton = document.getElementById("format-btn");
const valueButton = document.getElementById("value-btn");
const parseButton = document.getElementById("parse-btn");

const toStringOutput = document.getElementById("to-string-output");
const expOutput = document.getElementById("exp-output");
const formatOutput = document.getElementById("format-output");
const valueOutput = document.getElementById("value-output");
const parseOutput = document.getElementById("parse-output");

if (toStringButton && toStringOutput) {
  toStringButton.addEventListener("click", () => {
    const n = 255;
    toStringOutput.textContent = `toString(): ${n.toString()}, base16: ${n.toString(16)}, base2: ${n.toString(2)}`;
  });
}

if (expButton && expOutput) {
  expButton.addEventListener("click", () => {
    const n = 12345.6789;
    expOutput.textContent = `toExponential(2): ${n.toExponential(2)}, toExponential(4): ${n.toExponential(4)}`;
  });
}

if (formatButton && formatOutput) {
  formatButton.addEventListener("click", () => {
    const price = 9.87654;
    formatOutput.textContent = `toFixed(2): ${price.toFixed(2)}, toPrecision(4): ${price.toPrecision(4)}`;
  });
}

if (valueButton && valueOutput) {
  valueButton.addEventListener("click", () => {
    const x = new Number(500);
    valueOutput.textContent = `typeof x: ${typeof x}, valueOf(): ${x.valueOf()}, x + 50: ${x + 50}`;
  });
}

if (parseButton && parseOutput) {
  parseButton.addEventListener("click", () => {
    const i = parseInt("42.9");
    const f = parseFloat("42.9px");
    const n = Number("42.9");
    parseOutput.textContent = `parseInt("42.9"): ${i}, parseFloat("42.9px"): ${f}, Number("42.9"): ${n}`;
  });
}
