const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const tasks = ["Math Homework", "Science Project"];
    tasks.push("English Reading");
    const removedFirst = tasks.shift();
    tasks.unshift("Computer Practice");
    output.textContent = `Removed first: ${removedFirst} | Updated tasks: ${tasks.join(" | ")}`;
  });
}

