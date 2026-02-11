const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const classA = [1, 2, 3];
    const sameList = classA;
    sameList.push(4);

    const copiedList = [...classA];
    copiedList.push(5);

    output.textContent = `classA: ${classA.join(", ")} | sameList(shared): ${sameList.join(", ")} | copiedList(new): ${copiedList.join(", ")}`;
  });
}

