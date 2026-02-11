const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const ws = new WeakSet();
    const student = { name: "Asha" };

    ws.add(student);
    const existsBefore = ws.has(student);
    ws.delete(student);
    const existsAfter = ws.has(student);

    let primitiveError = "";
    try {
      ws.add("not-an-object");
    } catch (error) {
      primitiveError = error.name;
    }

    output.textContent = `has before delete: ${existsBefore} | has after delete: ${existsAfter} | primitive add error: ${primitiveError}`;
  });
}
