const methodsBtn = document.getElementById("run-methods-btn");
const iterationBtn = document.getElementById("run-iteration-btn");
const objectBtn = document.getElementById("run-object-btn");

const methodsOutput = document.getElementById("methods-output");
const iterationOutput = document.getElementById("iteration-output");
const objectOutput = document.getElementById("object-output");

if (methodsBtn && methodsOutput) {
  methodsBtn.addEventListener("click", () => {
    const studentMarks = new Map();
    studentMarks.set("Asha", 90);
    studentMarks.set("Ravi", 84);
    studentMarks.set("Asha", 95);

    const ashaMarks = studentMarks.get("Asha");
    const hasRavi = studentMarks.has("Ravi");
    studentMarks.delete("Ravi");
    const total = studentMarks.size;

    methodsOutput.textContent = `Asha marks: ${ashaMarks} | had Ravi key: ${hasRavi} | size after delete: ${total}`;
  });
}

if (iterationBtn && iterationOutput) {
  iterationBtn.addEventListener("click", () => {
    const prices = new Map([
      ["Pen", 10],
      ["Book", 40],
      ["Bag", 350],
    ]);

    const lines = [];
    for (const [item, price] of prices) {
      lines.push(`${item}:${price}`);
    }

    iterationOutput.textContent = `Items in insertion order -> ${lines.join(" | ")}`;
  });
}

if (objectBtn && objectOutput) {
  objectBtn.addEventListener("click", () => {
    const attendance = new Map();
    const student1 = { id: 1, name: "Asha" };
    const student2 = { id: 2, name: "Ravi" };

    attendance.set(student1, "Present");
    attendance.set(student2, "Absent");

    const check1 = attendance.get(student1);
    const check2 = attendance.get(student2);

    objectOutput.textContent = `${student1.name}: ${check1} | ${student2.name}: ${check2}`;
  });
}
