"use strict";

const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function add(a, b) {
  return a + b;
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `10 + 20 = ${add(10, 20)}`;
  });
}
