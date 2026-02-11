const dayButton = document.getElementById("day-demo-btn");
const drinkButton = document.getElementById("drink-demo-btn");

const dayOutput = document.getElementById("day-output");
const drinkOutput = document.getElementById("drink-output");

if (dayButton && dayOutput) {
  dayButton.addEventListener("click", () => {
    const day = 3;
    let name = "";
    switch (day) {
      case 1:
        name = "Monday";
        break;
      case 2:
        name = "Tuesday";
        break;
      case 3:
        name = "Wednesday";
        break;
      case 4:
        name = "Thursday";
        break;
      case 5:
        name = "Friday";
        break;
      default:
        name = "Weekend";
    }
    dayOutput.textContent = `Day ${day}: ${name}`;
  });
}

if (drinkButton && drinkOutput) {
  drinkButton.addEventListener("click", () => {
    const size = "M";
    let price = 0;
    switch (size) {
      case "S":
        price = 2;
        break;
      case "M":
        price = 3;
        break;
      case "L":
        price = 4;
        break;
      default:
        price = 0;
    }
    drinkOutput.textContent = `Size ${size}: $${price}`;
  });
}
