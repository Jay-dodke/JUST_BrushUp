const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function studentFunction(name, marks) {
  return `${name} scored ${marks} marks.`;
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = studentFunction("Aman", 92);
  });
}
