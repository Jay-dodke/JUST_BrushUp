const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    if ("Temporal" in globalThis) {
      const base = Temporal.PlainDate.from("2026-05-01");
      const nextWeek = base.add({ days: 7 });
      const lastWeek = base.subtract({ days: 7 });
      output.textContent = `Base: ${base.toString()} | +7 days: ${nextWeek.toString()} | -7 days: ${lastWeek.toString()}`;
      return;
    }

    const fallback = new Date("2026-05-01");
    const plus7 = new Date(fallback);
    plus7.setDate(plus7.getDate() + 7);
    output.textContent = `Temporal not available in this browser. Date fallback: ${fallback.toDateString()} -> ${plus7.toDateString()}`;
  });
}
