const $ = (id) => document.getElementById(id);
const list = $("list"), empty = $("empty"), count = $("count");
const search = $("search"), locSel = $("location"), chips = $("chips");
let activeType = "";

const COLORS = ["#0e8f6b", "#13446b", "#b45309", "#7c3aed", "#be123c", "#0369a1", "#4d7c0f", "#c2410c"];
function colorFor(s) { let h = 0; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return COLORS[h % COLORS.length]; }
function initials(s) { return s.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase() || "J"; }
function isNew(d) { const n = (Date.now() - new Date(d).getTime()) / 86400000; return n >= 0 && n <= 7; }
function fmt(d) { const x = new Date(d); return isNaN(x) ? "" : x.toLocaleDateString(undefined, { day: "numeric", month: "short" }); }

function fillLocations() {
  [...new Set(JOBS.map((j) => j.location))].sort().forEach((v) => {
    const o = document.createElement("option"); o.value = v; o.textContent = v; locSel.appendChild(o);
  });
}

function buildChips() {
  chips.textContent = "";
  ["", ...new Set(JOBS.map((j) => j.type))].forEach((t) => {
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip"; b.textContent = t || "All jobs";
    b.setAttribute("aria-pressed", String(t === activeType));
    b.onclick = () => { activeType = t; buildChips(); render(); };
    chips.appendChild(b);
  });
}

function render() {
  const q = search.value.trim().toLowerCase();
  const rows = JOBS
    .filter((j) => !locSel.value || j.location === locSel.value)
    .filter((j) => !activeType || j.type === activeType)
    .filter((j) => !q || (j.title + " " + j.company).toLowerCase().includes(q))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  list.textContent = "";
  rows.forEach((j) => {
    const li = document.createElement("li"); li.className = "job";

    const av = document.createElement("div");
    av.className = "avatar"; av.textContent = initials(j.company); av.style.background = colorFor(j.company);
    av.setAttribute("aria-hidden", "true");

    const info = document.createElement("div"); info.className = "info";
    const h = document.createElement("h2"); h.textContent = j.title;
    if (isNew(j.date)) { const t = document.createElement("span"); t.className = "new"; t.textContent = "NEW"; h.appendChild(t); }
    const meta = document.createElement("p"); meta.className = "meta";
    meta.textContent = [j.company, j.location, fmt(j.date)].filter(Boolean).join(" • ");
    const pill = document.createElement("span"); pill.className = "pill"; pill.textContent = j.type;
    info.append(h, meta, pill);

    const a = document.createElement("a");
    a.className = "apply"; a.href = j.link; a.target = "_blank"; a.rel = "noopener noreferrer"; a.textContent = "Apply";
    a.setAttribute("aria-label", "Apply for " + j.title + " at " + j.company);
    a.addEventListener("click", (e) => {
      if (!window.__authEnabled) return;
      if (!window.__authReady) { e.preventDefault(); alert("One moment, checking your login. Tap Apply again."); return; }
      if (!window.__user) { e.preventDefault(); location.href = "login.html?apply=1"; }
    });

    li.append(av, info, a);
    list.appendChild(li);
  });

  empty.hidden = rows.length > 0;
  count.textContent = rows.length + (rows.length === 1 ? " job" : " jobs") + " found";
}

fillLocations();
buildChips();
search.addEventListener("input", render);
locSel.addEventListener("input", render);
render();

document.addEventListener("authchange", () => {
  $("gate").hidden = !window.__authEnabled || !!window.__user;
});
