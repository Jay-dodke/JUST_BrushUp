const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const setA = new Set([1, 2, 3]);
    const sameSet = setA;
    sameSet.add(4);

    const copiedSet = new Set(setA);
    copiedSet.add(5);

    output.textContent = `setA: ${[...setA].join(", ")} | sameSet(shared): ${[...sameSet].join(", ")} | copiedSet(new): ${[...copiedSet].join(", ")}`;
  });
}
