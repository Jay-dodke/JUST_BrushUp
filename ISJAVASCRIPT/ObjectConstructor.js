const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

const s1 = new Student("Ravi", "A");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `${s1.name} has grade ${s1.grade}`;
  });
}
