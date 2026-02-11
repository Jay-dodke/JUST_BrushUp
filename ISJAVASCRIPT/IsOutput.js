const htmlButton = document.getElementById("html-demo-btn");
const textButton = document.getElementById("text-demo-btn");
const writeButton = document.getElementById("write-demo-btn");
const alertButton = document.getElementById("alert-demo-btn");
const consoleButton = document.getElementById("console-demo-btn");
const printButton = document.getElementById("print-demo-btn");

const htmlOutput = document.getElementById("html-output");
const textOutput = document.getElementById("text-output");
const consoleStatus = document.getElementById("console-status");

if (htmlButton && htmlOutput) {
  htmlButton.addEventListener("click", () => {
    htmlOutput.innerHTML = "<span class=\"highlight\">Hello World</span> with innerHTML.";
  });
}

if (textButton && textOutput) {
  textButton.addEventListener("click", () => {
    textOutput.innerText = "Hello World with innerText.";
  });
}

if (writeButton) {
  writeButton.addEventListener("click", () => {
    const demoWindow = window.open("", "writeDemo", "width=420,height=240");
    if (!demoWindow) {
      alert("Popup blocked. Allow popups to see the document.write demo.");
      return;
    }
    demoWindow.document.write("<h2>document.write() demo</h2><p>5 + 6 = 11</p>");
    demoWindow.document.close();
  });
}

if (alertButton) {
  alertButton.addEventListener("click", () => {
    alert(5 + 6);
  });
}

if (consoleButton) {
  consoleButton.addEventListener("click", () => {
    console.log(5 + 6);
    if (consoleStatus) {
      consoleStatus.textContent = "Logged 11 to the console.";
    }
  });
}

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
