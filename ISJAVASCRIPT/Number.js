const basicButton = document.getElementById("basic-btn");
const scientificButton = document.getElementById("scientific-btn");
const precisionButton = document.getElementById("precision-btn");
const convertButton = document.getElementById("convert-btn");
const specialButton = document.getElementById("special-btn");

const basicOutput = document.getElementById("basic-output");
const scientificOutput = document.getElementById("scientific-output");
const precisionOutput = document.getElementById("precision-output");
const convertOutput = document.getElementById("convert-output");
const specialOutput = document.getElementById("special-output");

if (basicButton && basicOutput) {
  basicButton.addEventListener("click", () => {
    const a = 25;
    const b = 2.5;
    const sum = a + b;
    basicOutput.textContent = `a: ${a}, b: ${b}, a + b = ${sum}`;
  });
}

if (scientificButton && scientificOutput) {
  scientificButton.addEventListener("click", () => {
    const large = 123e5;
    const small = 123e-5;
    scientificOutput.textContent = `123e5 = ${large}, 123e-5 = ${small}`;
  });
}

if (precisionButton && precisionOutput) {
  precisionButton.addEventListener("click", () => {
    const raw = 0.1 + 0.2;
    const fixed = (0.1 + 0.2).toFixed(2);
    precisionOutput.textContent = `0.1 + 0.2 = ${raw}, fixed(2) = ${fixed}`;
  });
}

if (convertButton && convertOutput) {
  convertButton.addEventListener("click", () => {
    const addResult = "100" + 10;
    const subResult = "100" - 10;
    const numResult = Number("100") + 10;
    convertOutput.textContent = `"100" + 10 = ${addResult}, "100" - 10 = ${subResult}, Number("100") + 10 = ${numResult}`;
  });
}

if (specialButton && specialOutput) {
  specialButton.addEventListener("click", () => {
    const infinityValue = 10 / 0;
    const notANumber = "abc" / 2;
    specialOutput.textContent = `10 / 0 = ${infinityValue}, "abc" / 2 = ${notANumber}, isNaN("abc"/2) = ${Number.isNaN(notANumber)}`;
  });
}
