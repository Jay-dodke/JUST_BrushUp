const runBtn = document.getElementById("run-btn");
const output = document.getElementById("output");

const studentFeeStatus = function (paid) {
  return paid ? "Fee Paid" : "Fee Pending";
};

if (runBtn && output) {
  runBtn.addEventListener("click", () => {
    output.textContent = `Aman: ${studentFeeStatus(true)}, Riya: ${studentFeeStatus(false)}`;
  });
}
