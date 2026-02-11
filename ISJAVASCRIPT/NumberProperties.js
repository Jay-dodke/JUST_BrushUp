const constantsButton = document.getElementById("constants-btn");
const safeButton = document.getElementById("safe-btn");
const finiteButton = document.getElementById("finite-btn");
const integerButton = document.getElementById("integer-btn");
const nanButton = document.getElementById("nan-btn");

const constantsOutput = document.getElementById("constants-output");
const safeOutput = document.getElementById("safe-output");
const finiteOutput = document.getElementById("finite-output");
const integerOutput = document.getElementById("integer-output");
const nanOutput = document.getElementById("nan-output");

if (constantsButton && constantsOutput) {
  constantsButton.addEventListener("click", () => {
    constantsOutput.textContent = `MAX_VALUE: ${Number.MAX_VALUE}, MIN_VALUE: ${Number.MIN_VALUE}, EPSILON: ${Number.EPSILON}`;
  });
}

if (safeButton && safeOutput) {
  safeButton.addEventListener("click", () => {
    safeOutput.textContent = `MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}, MIN_SAFE_INTEGER: ${Number.MIN_SAFE_INTEGER}`;
  });
}

if (finiteButton && finiteOutput) {
  finiteButton.addEventListener("click", () => {
    finiteOutput.textContent = `isFinite(100): ${Number.isFinite(100)}, isFinite(Infinity): ${Number.isFinite(
      Infinity
    )}, isFinite("100"): ${Number.isFinite("100")}`;
  });
}

if (integerButton && integerOutput) {
  integerButton.addEventListener("click", () => {
    const a = 12.0;
    const b = 12.5;
    const c = 9007199254740991;
    integerOutput.textContent = `isInteger(${a}): ${Number.isInteger(a)}, isInteger(${b}): ${Number.isInteger(
      b
    )}, isSafeInteger(${c}): ${Number.isSafeInteger(c)}`;
  });
}

if (nanButton && nanOutput) {
  nanButton.addEventListener("click", () => {
    nanOutput.textContent = `isNaN(NaN): ${Number.isNaN(NaN)}, isNaN("NaN"): ${Number.isNaN("NaN")}, isNaN(0 / 0): ${Number.isNaN(
      0 / 0
    )}`;
  });
}
