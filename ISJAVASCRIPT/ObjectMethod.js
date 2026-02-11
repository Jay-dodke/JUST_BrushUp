const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const person = {
  firstName: "Neha",
  lastName: "Sharma",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = person.fullName();
  });
}
