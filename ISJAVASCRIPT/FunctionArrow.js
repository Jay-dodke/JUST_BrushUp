const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const studentPass = (marks) => marks >= 35;

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `Aman(40): ${studentPass(40)}, Neha(29): ${studentPass(29)}`;
  });
}
