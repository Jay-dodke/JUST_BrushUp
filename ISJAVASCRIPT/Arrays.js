const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const groceries = ["Milk", "Bread", "Eggs", "Apples"];
    output.textContent = `First item: ${groceries[0]} | Total items: ${groceries.length} | Full list: ${groceries.join(", ")}`;
  });
}

