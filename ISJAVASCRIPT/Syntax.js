const statementButton = document.getElementById("statement-demo-btn");
const expressionButton = document.getElementById("expression-demo-btn");
const blockButton = document.getElementById("block-demo-btn");
const commentButton = document.getElementById("comment-demo-btn");

const statementOutput = document.getElementById("statement-output");
const expressionOutput = document.getElementById("expression-output");
const blockOutput = document.getElementById("block-output");
const commentOutput = document.getElementById("comment-output");

if (statementButton && statementOutput) {
  statementButton.addEventListener("click", () => {
    let x = 5;
    let y = 6;
    let z = x + y;
    statementOutput.textContent = `x = ${x}, y = ${y}, z = ${z}`;
  });
}

if (expressionButton && expressionOutput) {
  expressionButton.addEventListener("click", () => {
    const numberResult = 5 * 10;
    const textResult = "Hello" + " " + "World";
    expressionOutput.textContent = `5 * 10 = ${numberResult}; ${textResult}`;
  });
}

if (blockButton && blockOutput) {
  blockButton.addEventListener("click", () => {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 18) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
    blockOutput.textContent = `Hour: ${hour}. ${greeting}.`;
  });
}

if (commentButton && commentOutput) {
  commentButton.addEventListener("click", () => {
    commentOutput.textContent = "Comments are ignored by JavaScript when it runs.";
  });
}
