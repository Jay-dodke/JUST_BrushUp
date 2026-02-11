const ctorButton = document.getElementById("ctor-btn");
const formatButton = document.getElementById("format-btn");
const parseButton = document.getElementById("parse-btn");
const checksButton = document.getElementById("checks-btn");
const constButton = document.getElementById("const-btn");

const ctorOutput = document.getElementById("ctor-output");
const formatOutput = document.getElementById("format-output");
const parseOutput = document.getElementById("parse-output");
const checksOutput = document.getElementById("checks-output");
const constOutput = document.getElementById("const-output");

if (ctorButton && ctorOutput) {
  ctorButton.addEventListener("click", () => {
    const a = Number("42");
    const b = typeof 42;
    const c = typeof new Number(42);
    ctorOutput.textContent = `Number("42"): ${a}, typeof 42: ${b}, typeof new Number(42): ${c}`;
  });
}

if (formatButton && formatOutput) {
  formatButton.addEventListener("click", () => {
    const n = 1234.567;
    formatOutput.textContent = `toFixed(2): ${n.toFixed(2)}, toPrecision(5): ${n.toPrecision(5)}`;
  });
}

if (parseButton && parseOutput) {
  parseButton.addEventListener("click", () => {
    const binary = Number.parseInt("101", 2);
    const decimal = Number.parseFloat("19.75kg");
    parseOutput.textContent = `parseInt("101", 2): ${binary}, parseFloat("19.75kg"): ${decimal}`;
  });
}

if (checksButton && checksOutput) {
  checksButton.addEventListener("click", () => {
    const finite = Number.isFinite(100 / 3);
    const integer = Number.isInteger(5.0);
    const nan = Number.isNaN(Number("abc"));
    checksOutput.textContent = `isFinite(100/3): ${finite}, isInteger(5.0): ${integer}, isNaN(Number("abc")): ${nan}`;
  });
}

if (constButton && constOutput) {
  constButton.addEventListener("click", () => {
    constOutput.textContent = `POSITIVE_INFINITY: ${Number.POSITIVE_INFINITY}, NEGATIVE_INFINITY: ${Number.NEGATIVE_INFINITY}, NaN: ${Number.NaN}`;
  });
}
