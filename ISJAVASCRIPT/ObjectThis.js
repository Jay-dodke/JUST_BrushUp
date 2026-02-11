const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const car = {
  brand: "Tata",
  model: "Nexon",
  info() {
    return `${this.brand} ${this.model}`;
  }
};

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = car.info();
  });
}
