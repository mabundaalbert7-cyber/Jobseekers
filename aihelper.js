const $ = (id) => document.getElementById(id);
const MODEL = "gpt-5.4-nano";

function textOf(r) {
  if (typeof r === "string") return r;
  const c = r && r.message && r.message.content;
  if (typeof c === "string") return c;
  if (Array.isArray(c)) return c.map((x) => x.text || "").join("");
  return "";
}

async function ask(messages) {
  if (typeof puter === "undefined") throw new Error("noPuter");
  let r;
  try { r = await puter.ai.chat(messages, { model: MODEL }); }
  catch (e) { r = await puter.ai.chat(messages); }
  const t = textOf(r).trim();
  if (!t) throw new Error("empty");
  return t;
}

const ERR = "Sorry, the AI could not answer. Check your internet, sign in to Puter when the window opens, then try again.";

// Tabs
document.querySelectorAll("[data-tab]").forEach((b) => {
  b.onclick = () => {
    document.querySelectorAll("[data-tab]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    ["cv", "assistant", "interview"].forEach((t) => ($("p-" + t).hidden = t !== b.dataset.tab));
  };
});

// CV helper
$("cvGo").onclick = async () => {
  const job = $("cvJob").value.trim(), notes = $("cvNotes").value.trim();
  if (!notes) { $("cvOut").textContent = "Please tell me a little about yourself first."; return; }
  $("cvGo").disabled = true; $("cvOut").textContent = "Writing...";
  const prompt = "Write text for a South African CV in simple, clear English.\nJob wanted: " + (job || "not said") +
    "\nAbout the person: " + notes +
    "\n\nGive: 1) An 'About me' paragraph of 2 to 3 sentences. 2) Four or five bullet points of skills or work done, each starting with a strong verb." +
    "\nUse ONLY the facts given. Do not invent employers, dates or qualifications. Plain text only.";
  try { $("cvOut").textContent = await ask([{ role: "user", content: prompt }]); $("cvCopy").hidden = false; }
  catch (e) { $("cvOut").textContent = ERR; }
  $("cvGo").disabled = false;
};
$("cvCopy").onclick = async () => {
  try { await navigator.clipboard.writeText($("cvOut").textContent); $("cvCopy").textContent = "Copied"; setTimeout(() => ($("cvCopy").textContent = "Copy text"), 1500); } catch (e) {}
};

// Chat helper
function bubble(log, who, text) {
  const d = document.createElement("div");
  d.className = "b " + who; d.textContent = text;
  log.appendChild(d); log.scrollTop = log.scrollHeight;
  return d;
}

function makeChat(log, input, btn) {
  let hist = [];
  async function send(text, hidden) {
    if (!hist.length) return;
    if (!hidden) bubble(log, "me", text);
    hist.push({ role: "user", content: text });
    const wait = bubble(log, "ai", "...");
    btn.disabled = true;
    try { const a = await ask(hist); hist.push({ role: "assistant", content: a }); wait.textContent = a; }
    catch (e) { hist.pop(); wait.textContent = ERR; }
    btn.disabled = false; log.scrollTop = log.scrollHeight;
  }
  const go = () => { const t = input.value.trim(); if (!t) return; input.value = ""; send(t, false); };
  btn.onclick = go;
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  return { start(system, first) { hist = [{ role: "system", content: system }]; log.textContent = ""; if (first) send(first, true); } };
}

// Job assistant
const cats = [...new Set(JOBS.map((j) => j.type))].join(", ");
const comps = [...new Set(JOBS.filter((j) => j.type !== "Job search").map((j) => j.company))].slice(0, 40).join(", ");
const assistant = makeChat($("aLog"), $("aIn"), $("aSend"));
assistant.start(
  "You are a friendly job helper for job seekers in Pretoria, South Africa. Use simple English. If you need more information, ask at most two short questions (skills, experience, languages, transport). " +
  "Then suggest 3 to 5 types of jobs they could apply for and 3 search words to use on job sites. This website has these categories: " + cats + ". Companies on the site include: " + comps + ". " +
  "Never invent specific vacancies; tell them to tap Apply on the jobs page. Never ask for ID numbers, bank details or passwords. Keep each answer under 150 words."
);
bubble($("aLog"), "ai", "Hi! Tell me about yourself: what work have you done, what are you good at, and what job do you want? I will suggest jobs to look for.");

// Interview practice
const interview = makeChat($("iLog"), $("iIn"), $("iSend"));
$("iStart").onclick = () => {
  const job = $("iJob").value.trim();
  if (!job) { $("iJob").focus(); return; }
  interview.start(
    "You are a friendly interviewer helping a South African job seeker practise for a " + job + " interview. Use simple English. Ask ONE question at a time. " +
    "After each answer, give short feedback (what was good, what to improve) and a better example answer in 2 to 3 sentences, then ask the next question. " +
    "After 5 questions give a score out of 10 and 3 tips. Never ask for ID numbers or private details.",
    "Please start the interview with the first question."
  );
};
