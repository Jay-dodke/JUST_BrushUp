const timeButton = document.getElementById("show-time");
const timeOutput = document.getElementById("time-output");

document.getElementById("xyz").addEventListener("click", () => {
  alert("button was clicked");
});

if (timeButton && timeOutput) {
  timeButton.addEventListener("click", () => {
    const now = new Date();
    timeOutput.textContent = now.toLocaleString();
  });
}

if (40 > 20) {
  console.log("40 is greater than 20");
} else {
  console.log("40 is not greater than 20");
}
