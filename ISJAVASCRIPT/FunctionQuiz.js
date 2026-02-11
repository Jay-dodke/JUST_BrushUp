const q1Btn = document.getElementById("q1-btn");
const q2Btn = document.getElementById("q2-btn");
const q1Output = document.getElementById("q1-output");
const q2Output = document.getElementById("q2-output");

if (q1Btn && q1Output) {
  q1Btn.addEventListener("click", () => {
    q1Output.textContent = "Answer: 5";
  });
}

if (q2Btn && q2Output) {
  q2Btn.addEventListener("click", () => {
    q2Output.textContent = '"name" is parameter, "Riya" is argument.';
  });
}
