const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const book = {
  title: "Atomic Habits",
  author: "James Clear"
};

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const values = Object.values(book).join(" | ");
    const json = JSON.stringify(book);
    output.textContent = `Values: ${values} | JSON: ${json}`;
  });
}
