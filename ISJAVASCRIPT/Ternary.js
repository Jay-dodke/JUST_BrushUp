const voteButton = document.getElementById("vote-demo-btn");
const shipButton = document.getElementById("ship-demo-btn");

const voteOutput = document.getElementById("vote-output");
const shipOutput = document.getElementById("ship-output");

if (voteButton && voteOutput) {
  voteButton.addEventListener("click", () => {
    const age = 20;
    const canVote = age >= 18 ? "Yes" : "No";
    voteOutput.textContent = `Age ${age}. Can vote? ${canVote}`;
  });
}

if (shipButton && shipOutput) {
  shipButton.addEventListener("click", () => {
    const total = 42;
    const message = total >= 50
      ? "Free shipping"
      : "Add items for free shipping";
    shipOutput.textContent = `Total $${total}: ${message}`;
  });
}
