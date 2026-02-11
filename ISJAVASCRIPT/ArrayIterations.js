const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const expenses = [1200, 850, 400, 2200];
    const high = expenses.filter((e) => e >= 1000);
    const withTax = expenses.map((e) => Math.round(e * 1.05));
    let total = 0;
    expenses.forEach((e) => {
      total += e;
    });
    output.textContent = `High expenses: ${high.join(", ")} | +5%: ${withTax.join(", ")} | Total: ${total}`;
  });
}

