const createButton = document.getElementById("create-btn");
const arithButton = document.getElementById("arith-btn");
const mixButton = document.getElementById("mix-btn");
const compareButton = document.getElementById("compare-btn");
const safeButton = document.getElementById("safe-btn");

const createOutput = document.getElementById("create-output");
const arithOutput = document.getElementById("arith-output");
const mixOutput = document.getElementById("mix-output");
const compareOutput = document.getElementById("compare-output");
const safeOutput = document.getElementById("safe-output");

if (createButton && createOutput) {
  createButton.addEventListener("click", () => {
    const a = 9007199254740991n;
    const b = BigInt("9007199254740993");
    createOutput.textContent = `a: ${a}, b: ${b}, typeof a: ${typeof a}`;
  });
}

if (arithButton && arithOutput) {
  arithButton.addEventListener("click", () => {
    const x = 10n;
    const y = 3n;
    arithOutput.textContent = `10n + 3n = ${x + y}, 10n * 3n = ${x * y}, 10n / 3n = ${x / y}`;
  });
}

if (mixButton && mixOutput) {
  mixButton.addEventListener("click", () => {
    let message = "";
    try {
      // This intentionally throws because BigInt and Number cannot be mixed directly.
      10n + 1;
    } catch (error) {
      message = error.message;
    }
    mixOutput.textContent = `10n + 1 throws: ${message}. Use 10n + BigInt(1) or Number(10n) + 1.`;
  });
}

if (compareButton && compareOutput) {
  compareButton.addEventListener("click", () => {
    const loose = 10n == 10;
    const strict = 10n === 10;
    const greater = 20n > 15;
    compareOutput.textContent = `10n == 10: ${loose}, 10n === 10: ${strict}, 20n > 15: ${greater}`;
  });
}

if (safeButton && safeOutput) {
  safeButton.addEventListener("click", () => {
    const unsafe =
      Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
    const safeWithBigInt =
      BigInt(Number.MAX_SAFE_INTEGER) + 1n ===
      BigInt(Number.MAX_SAFE_INTEGER) + 2n;
    safeOutput.textContent = `Number unsafe compare: ${unsafe}, BigInt compare: ${safeWithBigInt}`;
  });
}
