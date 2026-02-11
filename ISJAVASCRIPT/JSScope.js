const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

let city = "Delhi";

function showCity() {
  let school = "ABC School";
  return `${city} - ${school}`;
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = showCity();
  });
}
