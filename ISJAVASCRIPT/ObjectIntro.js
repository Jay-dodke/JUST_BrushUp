const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const student = {
  name: "Aman",
  className: "10A",
  isPresent: true
};

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `${student.name} from ${student.className} is present: ${student.isPresent}`;
  });
}
