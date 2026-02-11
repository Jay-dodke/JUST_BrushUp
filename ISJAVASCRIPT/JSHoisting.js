const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function hello() {
  return "Function hoisting works.";
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = hello();
  });
}
