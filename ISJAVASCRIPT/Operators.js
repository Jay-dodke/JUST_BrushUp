const mathButton = document.getElementById("math-demo-btn");
const assignButton = document.getElementById("assign-demo-btn");
const compareButton = document.getElementById("compare-demo-btn");
const deliveryButton = document.getElementById("delivery-demo-btn");

const mathOutput = document.getElementById("math-output");
const assignOutput = document.getElementById("assign-output");
const compareOutput = document.getElementById("compare-output");
const deliveryOutput = document.getElementById("delivery-output");

if (mathButton && mathOutput) {
  mathButton.addEventListener("click", () => {
    const total = 12 + 8;
    const discount = total - 5;
    const boxes = 3 * 4;
    const split = 24 / 3;
    const remainder = 10 % 3;
    mathOutput.textContent = `Total: ${total}, Discounted: ${discount}, Boxes: ${boxes}, Split: ${split}, Remainder: ${remainder}`;
  });
}

if (assignButton && assignOutput) {
  assignButton.addEventListener("click", () => {
    let points = 5;
    points += 3;
    points -= 2;
    assignOutput.textContent = `Points after updates: ${points}`;
  });
}

if (compareButton && compareOutput) {
  compareButton.addEventListener("click", () => {
    const loose = 5 == "5";
    const strict = 5 === "5";
    const greater = 7 > 3;
    compareOutput.textContent = `5 == "5" → ${loose}, 5 === "5" → ${strict}, 7 > 3 → ${greater}`;
  });
}

if (deliveryButton && deliveryOutput) {
  deliveryButton.addEventListener("click", () => {
    const subtotal = 28;
    const deliveryFee = 4;
    const freeDeliveryLimit = 30;
    const freeDelivery = subtotal >= freeDeliveryLimit;
    const total = freeDelivery ? subtotal : subtotal + deliveryFee;
    deliveryOutput.textContent = freeDelivery
      ? `Subtotal $${subtotal}: Free delivery. Total $${total}.`
      : `Subtotal $${subtotal}: Delivery $${deliveryFee}. Total $${total}.`;
  });
}
