const basicBtn = document.getElementById("run-basic-btn");
const privateBtn = document.getElementById("run-private-btn");
const compareBtn = document.getElementById("run-compare-btn");

const basicOutput = document.getElementById("basic-output");
const privateOutput = document.getElementById("private-output");
const compareOutput = document.getElementById("compare-output");

if (basicBtn && basicOutput) {
  basicBtn.addEventListener("click", () => {
    const wm = new WeakMap();
    const user = { id: 101, name: "Asha" };

    wm.set(user, { role: "Admin", active: true });
    const role = wm.get(user)?.role;
    const hasBeforeDelete = wm.has(user);
    wm.delete(user);
    const hasAfterDelete = wm.has(user);

    basicOutput.textContent = `role: ${role} | has before delete: ${hasBeforeDelete} | has after delete: ${hasAfterDelete}`;
  });
}

if (privateBtn && privateOutput) {
  privateBtn.addEventListener("click", () => {
    const privateData = new WeakMap();

    class Account {
      constructor(owner, balance) {
        privateData.set(this, { owner, balance });
      }

      deposit(amount) {
        const data = privateData.get(this);
        data.balance += amount;
      }

      getSummary() {
        const data = privateData.get(this);
        return `${data.owner} has balance ${data.balance}`;
      }
    }

    const a1 = new Account("Ravi", 5000);
    a1.deposit(1200);

    privateOutput.textContent = `${a1.getSummary()} | direct private access: ${String(a1.balance)}`;
  });
}

if (compareBtn && compareOutput) {
  compareBtn.addEventListener("click", () => {
    const map = new Map();
    map.set("token", "abc123");

    const weak = new WeakMap();
    const objKey = { id: 1 };
    weak.set(objKey, "session-1");

    let primitiveError = "";
    try {
      weak.set("token", "abc123");
    } catch (error) {
      primitiveError = error.name;
    }

    compareOutput.textContent = `Map string-key value: ${map.get("token")} | WeakMap object-key value: ${weak.get(objKey)} | primitive key in WeakMap: ${primitiveError}`;
  });
}
