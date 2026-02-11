const headButton = document.getElementById("head-demo-btn");
const bodyButton = document.getElementById("body-demo-btn");
const externalButton = document.getElementById("external-demo-btn");

const headDemo = document.getElementById("head-demo");
const bodyDemo = document.getElementById("body-demo");
const externalDemo = document.getElementById("external-demo");

if (headButton && headDemo) {
  headButton.addEventListener("click", () => {
    headDemo.textContent = "Paragraph changed (head example).";
  });
}

if (bodyButton && bodyDemo) {
  bodyButton.addEventListener("click", () => {
    bodyDemo.textContent = "Paragraph changed (body example).";
  });
}

if (externalButton && externalDemo) {
  externalButton.addEventListener("click", () => {
    externalDemo.textContent = "Paragraph changed (external file example).";
  });
}
