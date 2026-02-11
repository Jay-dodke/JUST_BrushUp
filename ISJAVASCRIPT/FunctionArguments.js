const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function studentResult(name, marks) {
  return `${name} scored ${marks}.`;
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = studentResult("Meera", 88);
  });
}
