const $ = (id) => document.getElementById(id);
const KEY = "cvDraft";
const FIELDS = ["name", "title", "phone", "email", "location", "summary", "skills", "languages"];
const JOB_KEYS = [["role", "Job title"], ["company", "Company"], ["dates", "Dates (e.g. Jan 2023 - Dec 2024)"], ["details", "What you did (one point per line)"]];
const SCHOOL_KEYS = [["qual", "Qualification (e.g. Matric)"], ["school", "School or college"], ["year", "Year finished"]];

function addEntry(listId, keys, data = {}) {
  const box = document.createElement("div");
  box.className = "entry";
  const rm = document.createElement("button");
  rm.type = "button"; rm.className = "rm"; rm.textContent = "Remove";
  rm.onclick = () => { box.remove(); update(); };
  box.appendChild(rm);
  keys.forEach(([k, label]) => {
    const lab = document.createElement("label");
    lab.textContent = label;
    const input = document.createElement(k === "details" ? "textarea" : "input");
    if (k === "details") input.rows = 3;
    input.dataset.k = k;
    input.value = data[k] || "";
    lab.appendChild(input);
    box.appendChild(lab);
  });
  $(listId).appendChild(box);
}

function readEntries(listId) {
  return [...$(listId).querySelectorAll(".entry")].map((box) => {
    const o = {};
    box.querySelectorAll("[data-k]").forEach((i) => (o[i.dataset.k] = i.value.trim()));
    return o;
  }).filter((o) => Object.values(o).some(Boolean));
}

function getData() {
  const d = {};
  FIELDS.forEach((f) => (d[f] = $(f).value.trim()));
  d.jobs = readEntries("jobs");
  d.schools = readEntries("schools");
  return d;
}

function h(tag, text, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
}

function section(cv, title) { cv.appendChild(h("h2", title)); }
const list = (s) => s.split(",").map((x) => x.trim()).filter(Boolean);

function render(d) {
  const cv = $("cv");
  cv.textContent = "";
  if (!d.name && !d.title && !d.jobs.length && !d.schools.length && !d.summary && !d.skills) {
    cv.appendChild(h("p", "Your CV will appear here as you type.", "placeholder"));
    return;
  }
  cv.appendChild(h("h1", d.name || "Your Name"));
  if (d.title) cv.appendChild(h("p", d.title, "role"));
  const contact = [d.phone, d.email, d.location].filter(Boolean).join("  |  ");
  if (contact) cv.appendChild(h("p", contact, "contact"));

  if (d.summary) { section(cv, "About me"); cv.appendChild(h("p", d.summary)); }

  if (d.jobs.length) {
    section(cv, "Work experience");
    d.jobs.forEach((j) => {
      const item = h("div", undefined, "item");
      item.appendChild(h("b", [j.role, j.company].filter(Boolean).join(", ")));
      if (j.dates) item.appendChild(h("span", j.dates, "sub"));
      const pts = (j.details || "").split("\n").map((x) => x.trim()).filter(Boolean);
      if (pts.length) { const ul = h("ul"); pts.forEach((p) => ul.appendChild(h("li", p))); item.appendChild(ul); }
      cv.appendChild(item);
    });
  }

  if (d.schools.length) {
    section(cv, "Education");
    d.schools.forEach((s) => {
      const item = h("div", undefined, "item");
      item.appendChild(h("b", [s.qual, s.school].filter(Boolean).join(", ")));
      if (s.year) item.appendChild(h("span", s.year, "sub"));
      cv.appendChild(item);
    });
  }

  if (d.skills) { section(cv, "Skills"); const ul = h("ul"); list(d.skills).forEach((s) => ul.appendChild(h("li", s))); cv.appendChild(ul); }
  if (d.languages) { section(cv, "Languages"); cv.appendChild(h("p", list(d.languages).join(", "))); }
  section(cv, "References");
  cv.appendChild(h("p", "Available on request"));
}

function update() {
  const d = getData();
  render(d);
  try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {}
}

function load() {
  let d = null;
  try { d = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
  if (d) FIELDS.forEach((f) => ($(f).value = d[f] || ""));
  (d && d.jobs && d.jobs.length ? d.jobs : [{}]).forEach((j) => addEntry("jobs", JOB_KEYS, j));
  (d && d.schools && d.schools.length ? d.schools : [{}]).forEach((s) => addEntry("schools", SCHOOL_KEYS, s));
  update();
}

document.addEventListener("input", update);
$("addJob").onclick = () => addEntry("jobs", JOB_KEYS);
$("addSchool").onclick = () => addEntry("schools", SCHOOL_KEYS);
$("download").onclick = () => {
  const d = getData();
  if (!d.name) { alert("Please type your full name first."); $("name").focus(); return; }
  document.title = "CV - " + d.name;
  window.print();
};
$("clear").onclick = () => {
  if (!confirm("Clear everything you typed?")) return;
  try { localStorage.removeItem(KEY); } catch (e) {}
  FIELDS.forEach((f) => ($(f).value = ""));
  $("jobs").textContent = ""; $("schools").textContent = "";
  addEntry("jobs", JOB_KEYS); addEntry("schools", SCHOOL_KEYS);
  update();
};
load();
