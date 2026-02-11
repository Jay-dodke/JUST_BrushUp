const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    const contacts = ["Aman", "Riya", "Neha", "Karan"];
    const hasRiya = contacts.includes("Riya");
    const indexNeha = contacts.indexOf("Neha");
    const startsWithK = contacts.find((name) => name.startsWith("K"));
    output.textContent = `includes("Riya"): ${hasRiya} | indexOf("Neha"): ${indexNeha} | find K*: ${startsWithK}`;
  });
}

