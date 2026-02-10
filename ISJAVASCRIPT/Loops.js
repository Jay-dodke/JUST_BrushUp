const forButton = document.getElementById("for-demo-btn");
const whileButton = document.getElementById("while-demo-btn");
const breakButton = document.getElementById("break-demo-btn");
const continueButton = document.getElementById("continue-demo-btn");
const flowButton = document.getElementById("flow-demo-btn");

const forOutput = document.getElementById("for-output");
const whileOutput = document.getElementById("while-output");
const breakOutput = document.getElementById("break-output");
const continueOutput = document.getElementById("continue-output");
const flowOutput = document.getElementById("flow-output");

if (forButton && forOutput) {
  forButton.addEventListener("click", () => {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
      total += i;
    }
    forOutput.textContent = `1 + 2 + 3 + 4 + 5 = ${total}`;
  });
}

if (whileButton && whileOutput) {
  whileButton.addEventListener("click", () => {
    let n = 3;
    let steps = [];
    while (n > 0) {
      steps.push(n);
      n--;
    }
    whileOutput.textContent = `Count down: ${steps.join(" → ")}`;
  });
}

if (breakButton && breakOutput) {
  breakButton.addEventListener("click", () => {
    let numbers = [];
    for (let i = 1; i <= 10; i++) {
      if (i === 4) {
        break;
      }
      numbers.push(i);
    }
    breakOutput.textContent = `Stopped at 4: ${numbers.join(", ")}`;
  });
}

if (continueButton && continueOutput) {
  continueButton.addEventListener("click", () => {
    let numbers = [];
    for (let i = 1; i <= 5; i++) {
      if (i === 3) {
        continue;
      }
      numbers.push(i);
    }
    continueOutput.textContent = `Skipped 3: ${numbers.join(", ")}`;
  });
}

if (flowButton && flowOutput) {
  flowButton.addEventListener("click", () => {
    let numbers = [];
    for (let i = 1; i <= 5; i++) {
      if (i === 2) {
        continue;
      }
      if (i === 4) {
        break;
      }
      numbers.push(i);
    }
    flowOutput.textContent = `Result: ${numbers.join(", ")}`;
  });
}
