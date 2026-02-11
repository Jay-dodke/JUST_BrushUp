const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const phone = {
  brand: "Samsung",
  price: 18000
};

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `Brand: ${phone.brand}, Price: ${phone["price"]}`;
  });
}
