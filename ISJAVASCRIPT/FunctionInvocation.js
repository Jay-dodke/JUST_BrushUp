const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

function markAttendance() {
  return "Attendance marked for today.";
}

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = markAttendance();
  });
}
