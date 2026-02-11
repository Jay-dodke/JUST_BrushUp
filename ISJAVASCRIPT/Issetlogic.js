const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const a = new Set([1, 2, 3, 4]);
    const b = new Set([3, 4, 5, 6]);

    const union = new Set([...a, ...b]);
    const intersection = new Set([...a].filter((v) => b.has(v)));
    const difference = new Set([...a].filter((v) => !b.has(v)));

    output.textContent = `Union: ${[...union].join(", ")} | Intersection: ${[...intersection].join(", ")} | A-B: ${[...difference].join(", ")}`;
  });
}
