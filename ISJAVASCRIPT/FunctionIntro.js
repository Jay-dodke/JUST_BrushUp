const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function studentFunction(name) {
  return `${name} is present today.`;
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = studentFunction("Riya");
  });
}
