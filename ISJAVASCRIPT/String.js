const basicButton = document.getElementById("basic-btn");
const templateButton = document.getElementById("template-btn");
const methodsButton = document.getElementById("methods-btn");
const searchButton = document.getElementById("search-btn");
const referenceButton = document.getElementById("reference-btn");

const basicOutput = document.getElementById("basic-output");
const templateOutput = document.getElementById("template-output");
const methodsOutput = document.getElementById("methods-output");
const searchOutput = document.getElementById("search-output");
const referenceOutput = document.getElementById("reference-output");

if (basicButton && basicOutput) {
  basicButton.addEventListener("click", () => {
    const first = "Jay";
    const last = "Kumar";
    const full = first + " " + last;
    basicOutput.textContent = `Full name: ${full} (length: ${full.length})`;
  });
}

if (templateButton && templateOutput) {
  templateButton.addEventListener("click", () => {
    const topic = "Strings";
    const examples = 5;
    const message = `Today we practiced ${examples} ${topic} examples.`;
    templateOutput.textContent = message;
  });
}

if (methodsButton && methodsOutput) {
  methodsButton.addEventListener("click", () => {
    const raw = "  brushup learning  ";
    const trimmed = raw.trim();
    const upper = trimmed.toUpperCase();
    const sliced = upper.slice(0, 7);
    const replaced = "JS Basics".replace("Basics", "Strings");
    methodsOutput.textContent = `trim: "${trimmed}", upper: "${upper}", slice: "${sliced}", replace: "${replaced}"`;
  });
}

if (searchButton && searchOutput) {
  searchButton.addEventListener("click", () => {
    const line = "I enjoy learning JavaScript strings";
    const hasJS = line.includes("JavaScript");
    const atWord = line.indexOf("strings");
    const starts = line.startsWith("I enjoy");
    searchOutput.textContent = `includes: ${hasJS}, indexOf("strings"): ${atWord}, startsWith("I enjoy"): ${starts}`;
  });
}

if (referenceButton && referenceOutput) {
  referenceButton.addEventListener("click", () => {
    const c1 = "hello".charAt(1);
    const c2 = "hello".at(-1);
    const joined = "A".concat("B");
    const parts = "a,b,c".split(",").join(" | ");
    referenceOutput.textContent = `charAt(1): ${c1}, at(-1): ${c2}, concat: ${joined}, split: ${parts}`;
  });
}
