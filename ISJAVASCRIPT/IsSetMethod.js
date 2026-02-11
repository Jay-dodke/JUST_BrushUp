const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const topics = new Set(["HTML", "CSS"]);
    topics.add("JavaScript");
    topics.add("CSS");

    const hasCss = topics.has("CSS");
    topics.delete("HTML");
    const count = topics.size;

    output.textContent = `Set values: ${[...topics].join(", ")} | has CSS: ${hasCss} | size: ${count}`;
  });
}
