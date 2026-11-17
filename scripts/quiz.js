// ========================================================
// QUIZ – ONE question at a time
//  • answer a question  → auto-moves to the next one
//  • Previous button → go back and change an answer
// Needs: questions.js loaded first
// ========================================================

// ---------- User name from the URL (?userName=...) ----------
const urlParams = new URLSearchParams(window.location.search);
const currentUserName = urlParams.get("userName") || "Explorer";

// ---------- State ----------
const answers = {};          // { questionId: value }
let currentIndex = 0;        // which question is on screen
let advancing = false;       // true during the short "auto-next" pause
const AUTO_NEXT_MS = 380;   // pause so the user sees the selected answer
const LEAVE_MS = 300;       // old card exit animation

// ---------- DOM elements ----------
const questionsContainer = document.getElementById("questionsContainer");
const progressBarFill = document.getElementById("progressBarFill");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const submitQuizBtn = document.getElementById("submitQuizBtn");
const prevBtn = document.getElementById("prevBtn");

const answeredCount = () => Object.keys(answers).length;

// ---------- Show one question ----------
function renderQuestion(direction = "next") {
  const q = questions[currentIndex];

  const card = document.createElement("div");
  card.className = `question-item slide-${direction}`;
  card.dataset.num = String(currentIndex + 1).padStart(2, "0");

  const qTop = document.createElement("div");
  qTop.className = "q-top";
  qTop.innerHTML = `<span class="q-num"><b>${String(currentIndex + 1).padStart(2, "0")}</b> / ${questions.length}</span>`;

  const statement = document.createElement("p");
  statement.className = "statement-text";
  statement.textContent = q.text;

  const wrapper = document.createElement("div");
  wrapper.className = "rating-spectrum-wrapper";

  const labels = document.createElement("div");
  labels.className = "spectrum-labels";
  labels.innerHTML = `<span class="lbl-agree">Agree</span><span class="lbl-disagree">Disagree</span>`;

  const track = document.createElement("div");
  track.className = "spectrum-track";
  track.setAttribute("role", "group");
  track.setAttribute("aria-label", "Your answer");

  const readout = document.createElement("div");
  readout.className = "scale-readout";
  readout.setAttribute("aria-live", "polite");
  readout.textContent = "Tap a circle to answer";

  scaleOptions.forEach(opt => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `rating-chip ${opt.type}`;
    chip.dataset.level = opt.level;
    chip.dataset.tone = opt.type.replace("chip-", "");
    chip.title = opt.hint;
    chip.setAttribute("aria-label", opt.hint);
    chip.setAttribute("aria-pressed", "false");
    chip.innerHTML = '<span class="chip-core"></span>';

    // an answer already given → show it when the user comes back
    if (answers[q.id] === opt.val) {
      chip.classList.add("active");
      chip.setAttribute("aria-pressed", "true");
      readout.textContent = opt.hint;
      readout.dataset.tone = chip.dataset.tone;
      card.classList.add("answered");
    }

    chip.addEventListener("click", () => handleChoice(q, opt, card, chip, readout));
    track.appendChild(chip);
  });

  wrapper.append(labels, track, readout);
  card.append(qTop, statement, wrapper);
  questionsContainer.replaceChildren(card);

  updateProgress();
  updateNav();
}

// ---------- When an answer circle is clicked ----------
function handleChoice(q, opt, card, chip, readout) {
  if (advancing) return;

  answers[q.id] = opt.val;
  card.classList.add("answered");
  card.querySelectorAll(".rating-chip").forEach(c => {
    c.classList.remove("active");
    c.setAttribute("aria-pressed", "false");
  });
  chip.classList.add("active");
  chip.setAttribute("aria-pressed", "true");
  readout.textContent = opt.hint;
  readout.dataset.tone = chip.dataset.tone;

  updateProgress();
  updateNav();

  // go to the next question automatically (not after the last one)
  if (currentIndex < questions.length - 1) {
    advancing = true;
    setTimeout(() => changeQuestion(currentIndex + 1, "next"), AUTO_NEXT_MS);
  }
}

// ---------- Change question with an exit + enter animation ----------
function changeQuestion(newIndex, direction) {
  advancing = true;
  const oldCard = questionsContainer.firstElementChild;
  if (oldCard) oldCard.classList.add(`leave-${direction}`);

  setTimeout(() => {
    currentIndex = newIndex;
    advancing = false;
    renderQuestion(direction);
  }, oldCard ? LEAVE_MS : 0);
}

// ---------- Progress bar ----------
function updateProgress() {
  const count = answeredCount();
  const pct = Math.round((count / questions.length) * 100);
  progressBarFill.style.width = `${pct}%`;
  progressText.textContent = `Progress: ${count} / ${questions.length} answered`;
  progressPercent.textContent = `${pct}%`;
}

// ---------- Previous / Finish buttons ----------
function updateNav() {
  const isLast = currentIndex === questions.length - 1;

  prevBtn.disabled = currentIndex === 0;
  prevBtn.hidden = currentIndex === 0;     // no Previous on the first question
  submitQuizBtn.hidden = !isLast;
  submitQuizBtn.disabled = answeredCount() !== questions.length;
}

// ---------- Previous button ----------
prevBtn.addEventListener("click", () => {
  if (advancing || currentIndex === 0) return;
  changeQuestion(currentIndex - 1, "prev");
});

// ---------- Keyboard: ← goes back ----------
document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft" && !prevBtn.hidden) prevBtn.click();
});

// ---------- Start ----------
renderQuestion("next");

if (submitQuizBtn) {
  // arrow function: generateResults is loaded later from results.js
  submitQuizBtn.addEventListener("click", () => generateResults());
}