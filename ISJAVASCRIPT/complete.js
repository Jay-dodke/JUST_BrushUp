const lessonNames = [
  "ArrayConst",
  "ArrayIterations",
  "ArrayMethods",
  "ArrayReference",
  "Arrays",
  "ArraySearch",
  "ArraySort",
  "BigInt",
  "Bitwise",
  "boolean&logical",
  "FunctionArguments",
  "FunctionArrow",
  "FunctionExpressions",
  "FunctionIntro",
  "FunctionInvocation",
  "FunctionParameters",
  "FunctionQuiz",
  "FunctionReturns",
  "FunctionStudyPath",
  "introduction",
  "Isdate",
  "IsIfElse",
  "IsMapsweakMap",
  "IsOutput",
  "Issetlogic",
  "IsSetMethod",
  "IsSetWeakSet",
  "JSHoisting",
  "JSScope",
  "JSStrictMode",
  "Loops",
  "MapMethod",
  "Maps",
  "Number",
  "NumberMethods",
  "NumberProperties",
  "NumberReference",
  "ObjectConstructor",
  "ObjectDisplay",
  "ObjectIntro",
  "ObjectMethod",
  "ObjectProperty",
  "ObjectThis",
  "Operators",
  "Setrefernce",
  "String",
  "Switch",
  "Syntax",
  "Temporal",
  "Ternary",
  "Variable",
  "Whareto",
];

const classifyGroup = (name) => {
  if (name.startsWith("Array")) return "Array";
  if (name.startsWith("Function")) return "Function";
  if (name.startsWith("Object")) return "Object";
  if (name.startsWith("Number")) return "Number";
  if (name.startsWith("Map") || name.includes("Map") || name.includes("Set")) return "Map/Set";
  if (name.startsWith("JS")) return "Core JS";
  if (name.startsWith("Is")) return "Basics";
  return "Other";
};

const titleize = (name) => name.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/&/g, " & ");

const lessons = lessonNames
  .map((name) => ({
    id: name,
    title: titleize(name),
    group: classifyGroup(name),
    html: `${name}.html`,
    css: `${name}.css`,
    js: `${name}.js`,
    txt: `${name}.txt`,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

const state = {
  query: "",
  group: "All",
};

const statsEl = document.getElementById("stats");
const inputEl = document.getElementById("search-input");
const filtersEl = document.getElementById("group-filters");
const gridEl = document.getElementById("lesson-grid");
const emptyEl = document.getElementById("empty-state");

const groups = ["All", ...new Set(lessons.map((item) => item.group))];

const renderStats = (visibleCount) => {
  const groupCount = groups.length - 1;
  statsEl.innerHTML = [
    `<span>Total Lessons: ${lessons.length}</span>`,
    `<span>Visible: ${visibleCount}</span>`,
    `<span>Groups: ${groupCount}</span>`,
  ].join("");
};

const renderFilters = () => {
  filtersEl.textContent = "";
  const fragment = document.createDocumentFragment();

  for (const group of groups) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = group;
    btn.dataset.group = group;
    if (state.group === group) {
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
    } else {
      btn.setAttribute("aria-selected", "false");
    }
    fragment.appendChild(btn);
  }

  filtersEl.appendChild(fragment);
};

const renderCards = () => {
  const query = state.query.trim().toLowerCase();

  const filtered = lessons.filter((item) => {
    const byGroup = state.group === "All" || item.group === state.group;
    const text = `${item.id} ${item.title} ${item.group}`.toLowerCase();
    const byQuery = !query || text.includes(query);
    return byGroup && byQuery;
  });

  gridEl.textContent = "";
  const fragment = document.createDocumentFragment();

  for (const item of filtered) {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2 class="card-title">${item.title}</h2>
      <p class="card-meta">Group: ${item.group}</p>
      <div class="card-actions">
        <a class="primary" href="${item.html}">Open Lesson</a>
        <a href="${item.css}">CSS</a>
        <a href="${item.js}">JS</a>
        <a href="${item.txt}">TXT</a>
      </div>
    `;
    fragment.appendChild(li);
  }

  gridEl.appendChild(fragment);
  emptyEl.hidden = filtered.length !== 0;
  renderStats(filtered.length);
};

inputEl.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-group]");
  if (!button) return;
  state.group = button.dataset.group;
  renderFilters();
  renderCards();
});

renderFilters();
renderCards();
