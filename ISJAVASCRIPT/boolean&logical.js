const boolButton = document.getElementById("bool-demo-btn");
const andButton = document.getElementById("and-demo-btn");
const orButton = document.getElementById("or-demo-btn");
const notButton = document.getElementById("not-demo-btn");

const boolOutput = document.getElementById("bool-output");
const andOutput = document.getElementById("and-output");
const orOutput = document.getElementById("or-output");
const notOutput = document.getElementById("not-output");

if (boolButton && boolOutput) {
  boolButton.addEventListener("click", () => {
    const isOpen = true;
    const isClosed = false;
    boolOutput.textContent = `isOpen = ${isOpen}, isClosed = ${isClosed}`;
  });
}

if (andButton && andOutput) {
  andButton.addEventListener("click", () => {
    const hasTicket = true;
    const hasID = true;
    const canEnter = hasTicket && hasID;
    andOutput.textContent = `Ticket: ${hasTicket}, ID: ${hasID}, Entry: ${canEnter}`;
  });
}

if (orButton && orOutput) {
  orButton.addEventListener("click", () => {
    const hasCash = false;
    const hasCard = true;
    const canPay = hasCash || hasCard;
    orOutput.textContent = `Cash: ${hasCash}, Card: ${hasCard}, Can pay: ${canPay}`;
  });
}

if (notButton && notOutput) {
  notButton.addEventListener("click", () => {
    const isMuted = false;
    const soundOn = !isMuted;
    notOutput.textContent = `Muted: ${isMuted}, Sound on: ${soundOn}`;
  });
}
