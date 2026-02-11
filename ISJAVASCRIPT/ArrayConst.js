const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const basket = ["Apple", "Banana"];
    basket.push("Mango");
    basket[0] = "Orange";
    output.textContent = `Basket now: ${basket.join(", ")} | const blocks reassignment, not item updates.`;
  });
}

