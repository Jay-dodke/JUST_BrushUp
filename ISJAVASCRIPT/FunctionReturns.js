const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function getGrade(marks) {
  if (marks >= 90) return "A";
  return "B";
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `Riya grade: ${getGrade(95)}`;
  });
}
