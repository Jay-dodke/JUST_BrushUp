const basicBtn = document.getElementById("run-basic-btn");
const iterationBtn = document.getElementById("run-iteration-btn");
const objectBtn = document.getElementById("run-object-btn");

const basicOutput = document.getElementById("basic-output");
const iterationOutput = document.getElementById("iteration-output");
const objectOutput = document.getElementById("object-output");

if (basicBtn && basicOutput) {
  basicBtn.addEventListener("click", () => {
    const marks = new Map();
    marks.set("Asha", 88);
    marks.set("Ravi", 73);
    marks.set("Asha", 92);

    const asha = marks.get("Asha");
    const hasRavi = marks.has("Ravi");
    const deleted = marks.delete("Ravi");
    const total = marks.size;

    basicOutput.textContent = `Asha: ${asha} | has Ravi: ${hasRavi} | delete Ravi: ${deleted} | size now: ${total}`;
  });
}

if (iterationBtn && iterationOutput) {
  iterationBtn.addEventListener("click", () => {
    const prices = new Map([
      ["Pen", 10],
      ["Book", 40],
      ["Bag", 350],
    ]);

    const keys = [...prices.keys()].join(", ");
    const values = [...prices.values()].join(", ");
    const entries = [...prices.entries()]
      .map(([k, v]) => `${k}:${v}`)
      .join(" | ");

    let total = 0;
    prices.forEach((value) => {
      total += value;
    });

    iterationOutput.textContent = `keys -> ${keys} | values -> ${values} | entries -> ${entries} | total price: ${total}`;
  });
}

if (objectBtn && objectOutput) {
  objectBtn.addEventListener("click", () => {
    const sessions = new Map();
    const userOne = { id: 101, name: "Ira" };
    const userTwo = { id: 102, name: "Rohan" };

    sessions.set(userOne, "online");
    sessions.set(userTwo, "offline");

    const userOneStatus = sessions.get(userOne);
    const beforeClear = sessions.size;
    sessions.clear();
    const sizeAfterClear = sessions.size;

    objectOutput.textContent = `${userOne.name} status: ${userOneStatus} | size before clear: ${beforeClear} | size after clear: ${sizeAfterClear}`;
  });
}
