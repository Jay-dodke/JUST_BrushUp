const cartButton = document.getElementById("cart-demo-btn");
const scoreButton = document.getElementById("score-demo-btn");
const ticketButton = document.getElementById("ticket-demo-btn");

const cartOutput = document.getElementById("cart-output");
const scoreOutput = document.getElementById("score-output");
const ticketOutput = document.getElementById("ticket-output");

if (cartButton && cartOutput) {
  cartButton.addEventListener("click", () => {
    const taxRate = 0.07;
    let cartTotal = 24.99;
    cartTotal = cartTotal + 10.0;
    const tax = cartTotal * taxRate;
    const finalTotal = cartTotal + tax;
    cartOutput.textContent = `Cart total: $${finalTotal.toFixed(2)} (tax included)`;
  });
}

if (scoreButton && scoreOutput) {
  scoreButton.addEventListener("click", () => {
    let score = 10;
    score = 12;
    const player = { name: "Ava", points: 3 };
    player.points = 4;
    scoreOutput.textContent = `Score is ${score}, ${player.name} has ${player.points} points.`;
  });
}

if (ticketButton && ticketOutput) {
  ticketButton.addEventListener("click", () => {
    const eventName = "City Jazz Night";
    let ticketPrice = 45;
    let seatsLeft = 120;
    const isSoldOut = false;
    const status = isSoldOut ? "Sold Out" : `${seatsLeft} seats left`;
    ticketOutput.textContent = `${eventName}: $${ticketPrice} - ${status}`;
  });
}
