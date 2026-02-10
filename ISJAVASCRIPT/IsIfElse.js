const ifButton = document.getElementById("if-demo-btn");
const ifElseButton = document.getElementById("if-else-demo-btn");
const ifElseIfButton = document.getElementById("if-else-if-demo-btn");
const shippingButton = document.getElementById("shipping-demo-btn");

const ifOutput = document.getElementById("if-output");
const ifElseOutput = document.getElementById("if-else-output");
const ifElseIfOutput = document.getElementById("if-else-if-output");
const shippingOutput = document.getElementById("shipping-output");

if (ifButton && ifOutput) {
  ifButton.addEventListener("click", () => {
    const score = 72;
    let result = "Fail";
    if (score >= 60) {
      result = "Pass";
    }
    ifOutput.textContent = `Score ${score}: ${result}`;
  });
}

if (ifElseButton && ifElseOutput) {
  ifElseButton.addEventListener("click", () => {
    const isMember = true;
    let price = 12;
    if (isMember) {
      price = 8;
    } else {
      price = 12;
    }
    ifElseOutput.textContent = isMember
      ? `Member price: $${price}`
      : `Regular price: $${price}`;
  });
}

if (ifElseIfButton && ifElseIfOutput) {
  ifElseIfButton.addEventListener("click", () => {
    const temp = 70;
    let advice = "";
    if (temp >= 85) {
      advice = "Hot";
    } else if (temp >= 65) {
      advice = "Warm";
    } else {
      advice = "Cool";
    }
    ifElseIfOutput.textContent = `Temp ${temp}°F: ${advice}`;
  });
}

if (shippingButton && shippingOutput) {
  shippingButton.addEventListener("click", () => {
    const orderTotal = 42;
    let status = "";
    if (orderTotal >= 50) {
      status = "Free shipping";
    } else {
      status = "Add items to get free shipping";
    }
    shippingOutput.textContent = `Total $${orderTotal}: ${status}`;
  });
}
