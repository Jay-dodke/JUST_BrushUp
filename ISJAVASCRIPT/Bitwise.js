const logicButton = document.getElementById("logic-btn");
const notButton = document.getElementById("not-btn");
const shiftButton = document.getElementById("shift-btn");
const unsignedButton = document.getElementById("unsigned-btn");
const maskButton = document.getElementById("mask-btn");

const logicOutput = document.getElementById("logic-output");
const notOutput = document.getElementById("not-output");
const shiftOutput = document.getElementById("shift-output");
const unsignedOutput = document.getElementById("unsigned-output");
const maskOutput = document.getElementById("mask-output");

if (logicButton && logicOutput) {
  logicButton.addEventListener("click", () => {
    const a = 5;
    const b = 1;
    logicOutput.textContent = `5 & 1 = ${a & b}, 5 | 1 = ${a | b}, 5 ^ 1 = ${a ^ b}`;
  });
}

if (notButton && notOutput) {
  notButton.addEventListener("click", () => {
    const n = 5;
    notOutput.textContent = `~5 = ${~n}. Rule: ~x === -(x + 1)`;
  });
}

if (shiftButton && shiftOutput) {
  shiftButton.addEventListener("click", () => {
    const n = 5;
    shiftOutput.textContent = `5 << 1 = ${n << 1}, 5 >> 1 = ${n >> 1}, 20 >> 2 = ${20 >> 2}`;
  });
}

if (unsignedButton && unsignedOutput) {
  unsignedButton.addEventListener("click", () => {
    const n = -5;
    unsignedOutput.textContent = `-5 >>> 1 = ${n >>> 1} (converts to unsigned 32-bit)`;
  });
}

if (maskButton && maskOutput) {
  maskButton.addEventListener("click", () => {
    const READ = 1;
    const WRITE = 2;
    const EXECUTE = 4;
    const permission = READ | WRITE;
    const canRead = (permission & READ) !== 0;
    const canWrite = (permission & WRITE) !== 0;
    const canExecute = (permission & EXECUTE) !== 0;
    maskOutput.textContent = `permission=${permission}, read=${canRead}, write=${canWrite}, execute=${canExecute}`;
  });
}
