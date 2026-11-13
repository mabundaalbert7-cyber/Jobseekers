const $ = (id) => document.getElementById(id);
const list = $("list"), empty = $("empty"), count = $("count");
const search = $("search"), locSel = $("location"), typeSel = $("type");

function fillOptions(select, values) {
  [...new Set(values)].sort().forEach((v) => {
    const o = document.createElement("option");
    o.value = v; o.textContent = v;
    select.appendChild(o);
  });
}

function isNew(dateStr) {
  const days = (Date.now() - new Date(dateStr).getTime()) / 86400000;
  return days >= 0 && days <= 7;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return isNaN(d) ? "" : d.toLocaleDateString(undefined, { day: "numeric", month: "short" });
}

function render() {
  const q = search.value.trim().toLowerCase();
  const rows = JOBS
    .filter((j) => (!locSel.value || j.location === locSel.value))
    .filter((j) => (!typeSel.value || j.type === typeSel.value))
    .filter((j) => !q || (j.title + " " + j.company).toLowerCase().includes(q))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  list.innerHTML = "";
  rows.forEach((j) => {
    const li = document.createElement("li");
    li.className = "job";

    const info = document.createElement("div");
    info.className = "info";

    const h = document.createElement("h2");
    h.textContent = j.title;
    if (isNew(j.date)) {
      const tag = document.createElement("span");
      tag.className = "new"; tag.textContent = "New";
      h.appendChild(tag);
    }

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = [j.company, j.location, j.type, formatDate(j.date)].filter(Boolean).join(" • ");

    info.append(h, meta);

    const a = document.createElement("a");
    a.className = "apply";
    a.href = j.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "Apply";
    a.setAttribute("aria-label", "Apply for " + j.title + " at " + j.company);

    a.addEventListener("click", (e) => {
      if (!window.__authEnabled) return;
      if (!window.__authReady) { e.preventDefault(); alert("One moment, checking your login. Tap Apply again."); return; }
      if (!window.__user) { e.preventDefault(); location.href = "login.html?apply=1"; }
    });

    li.append(info, a);
    list.appendChild(li);
  });

  empty.hidden = rows.length > 0;
  count.textContent = rows.length + (rows.length === 1 ? " job" : " jobs");
}

fillOptions(locSel, JOBS.map((j) => j.location));
fillOptions(typeSel, JOBS.map((j) => j.type));
[search, locSel, typeSel].forEach((el) => el.addEventListener("input", render));
render();

document.addEventListener("authchange", () => {
  $("gate").hidden = !window.__authEnabled || !!window.__user;
});
