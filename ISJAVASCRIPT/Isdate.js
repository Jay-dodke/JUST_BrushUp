const createBtn = document.getElementById("create-btn");
const formatBtn = document.getElementById("format-btn");
const getBtn = document.getElementById("get-btn");
const setBtn = document.getElementById("set-btn");
const refBtn = document.getElementById("ref-btn");

const createOutput = document.getElementById("create-output");
const formatOutput = document.getElementById("format-output");
const getOutput = document.getElementById("get-output");
const setOutput = document.getElementById("set-output");
const refOutput = document.getElementById("ref-output");

if (createBtn && createOutput) {
  createBtn.addEventListener("click", () => {
    const now = new Date();
    const fromString = new Date("2026-02-11");
    const fromParts = new Date(2026, 1, 11, 10, 30, 0);
    createOutput.textContent = `Now: ${now.toString()} | ISO string date: ${fromString.toDateString()} | Parts date: ${fromParts.toString()}`;
  });
}

if (formatBtn && formatOutput) {
  formatBtn.addEventListener("click", () => {
    const iso = new Date("2026-02-11");
    const longText = new Date("Feb 11, 2026");
    const timestamp = Date.parse("2026-02-11");
    formatOutput.textContent = `ISO: ${iso.toISOString()} | Text: ${longText.toDateString()} | Date.parse: ${timestamp}`;
  });
}

if (getBtn && getOutput) {
  getBtn.addEventListener("click", () => {
    const d = new Date();
    getOutput.textContent = `Year: ${d.getFullYear()}, Month(0-11): ${d.getMonth()}, Date: ${d.getDate()}, Day(0-6): ${d.getDay()}, Hours: ${d.getHours()}`;
  });
}

if (setBtn && setOutput) {
  setBtn.addEventListener("click", () => {
    const d = new Date();
    d.setFullYear(2030);
    d.setMonth(0);
    d.setDate(1);
    d.setHours(9, 15, 0);
    setOutput.textContent = `Updated date: ${d.toString()}`;
  });
}

if (refBtn && refOutput) {
  refBtn.addEventListener("click", () => {
    const d = new Date();
    refOutput.textContent = `toDateString: ${d.toDateString()} | toISOString: ${d.toISOString()} | getTime: ${d.getTime()}`;
  });
}
