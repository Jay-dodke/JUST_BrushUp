const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const scores = [78, 92, 65, 88];
    const asc = [...scores].sort((a, b) => a - b);
    const desc = [...scores].sort((a, b) => b - a);
    output.textContent = `Original: ${scores.join(", ")} | Asc: ${asc.join(", ")} | Desc: ${desc.join(", ")}`;
  });
}

