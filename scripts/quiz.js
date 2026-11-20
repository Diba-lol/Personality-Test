// ========================================================
// QUIZ – 5 Parts (12 Question Cards per Part)
//  • Smooth staggered card animations between parts
//  • Auto-scrolls gently to the next card after answering
//  • Highlights & scrolls to any skipped question on Next
// Needs: questions.js loaded first
// ========================================================

const urlParams = new URLSearchParams(window.location.search);
const currentUserName = urlParams.get("userName") || "Explorer";

// ---------- 5-Part Configuration ----------
const TOTAL_PARTS = 5;
const QUESTIONS_PER_PART = Math.ceil(questions.length / TOTAL_PARTS); // 12 per part

const PART_META = [
  { label: "Part 1", title: "Getting Started", subtitle: "Answer based on your first natural instinct." },
  { label: "Part 2", title: "How You Think", subtitle: "Explore how you process ideas and everyday choices." },
  { label: "Part 3", title: "Core Instincts", subtitle: "You are halfway through—keep going with your gut." },
  { label: "Part 4", title: "Inner Patterns", subtitle: "See how you balance plans, feelings, and freedom." },
  { label: "Part 5", title: "Final Stretch", subtitle: "Last 12 questions to unlock your full Healer blueprint." }
];

// ---------- State ----------
const answers = {};        // { questionId: value (-3..+3) }
let currentPart = 0;       // 0 to 4
let maxPartReached = 0;    // allows clicking back/forward on unlocked parts
let transitioning = false;
const LEAVE_MS = 110;

// ---------- DOM Elements ----------
const partStepper = document.getElementById("partStepper");
const partBanner = document.getElementById("partBanner");
const questionsContainer = document.getElementById("questionsContainer");
const partAlert = document.getElementById("partAlert");
const progressBarFill = document.getElementById("progressBarFill");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitQuizBtn = document.getElementById("submitQuizBtn");

// ---------- Helpers ----------
function getPartQuestions(partIndex) {
  const start = partIndex * QUESTIONS_PER_PART;
  return questions.slice(start, start + QUESTIONS_PER_PART);
}

function getPartAnsweredCount(partIndex) {
  return getPartQuestions(partIndex).filter(q => answers[q.id] !== undefined).length;
}

function isPartComplete(partIndex) {
  const partQs = getPartQuestions(partIndex);
  return partQs.every(q => answers[q.id] !== undefined);
}

function totalAnsweredCount() {
  return Object.keys(answers).length;
}

// ---------- Render 5-Part Stepper ----------
function renderStepper() {
  partStepper.innerHTML = PART_META.map((part, idx) => {
    const complete = isPartComplete(idx);
    const active = idx === currentPart;
    const unlocked = idx <= maxPartReached || complete;

    let stateClass = "";
    if (active) stateClass = "is-active";
    else if (complete) stateClass = "is-complete";
    else if (unlocked) stateClass = "is-unlocked";

    return `
      <button
        type="button"
        class="part-step ${stateClass}"
        data-part="${idx}"
        ${unlocked ? "" : "disabled"}
        aria-current="${active ? "step" : "false"}"
        title="${part.label}: ${part.title}"
      >
        <span class="part-step-dot">${complete && !active ? "✓" : idx + 1}</span>
        <span class="part-step-label">${part.label}</span>
      </button>
    `;
  }).join("");

  partStepper.querySelectorAll(".part-step:not(:disabled)").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPart = Number(btn.dataset.part);
      if (transitioning || targetPart === currentPart) return;
      switchPart(targetPart, targetPart > currentPart ? "next" : "prev");
    });
  });
}

// ---------- Render Current Part Banner ----------
function renderPartBanner() {
  const meta = PART_META[currentPart];
  const partQs = getPartQuestions(currentPart);
  const done = getPartAnsweredCount(currentPart);
  const startNum = currentPart * QUESTIONS_PER_PART + 1;
  const endNum = startNum + partQs.length - 1;

  partBanner.innerHTML = `
    <div class="part-banner-left">
      <span class="part-pill">${meta.label} of ${TOTAL_PARTS}</span>
      <h2 class="part-banner-title">${meta.title}</h2>
      <p class="part-banner-sub">${meta.subtitle}</p>
    </div>
    <div class="part-banner-stat">
      <span class="part-range">Q${startNum}–Q${endNum}</span>
      <strong class="part-done-count">${done} / ${partQs.length}</strong>
    </div>
  `;
}

// ---------- Render All 12 Cards in Active Part ----------
function renderPart(direction = "next") {
  const partQs = getPartQuestions(currentPart);
  const startIdx = currentPart * QUESTIONS_PER_PART;
  const fragment = document.createDocumentFragment();

  questionsContainer.className = `questions-list part-enter-${direction}`;
  hideAlert();

  partQs.forEach((q, localIdx) => {
    const globalNum = startIdx + localIdx + 1;

    const card = document.createElement("div");
    card.className = "question-item part-card";
    card.id = `q-card-${q.id}`;
    card.dataset.num = String(globalNum).padStart(2, "0");
    card.style.setProperty("--i", Math.min(localIdx, 3));

    const qTop = document.createElement("div");
    qTop.className = "q-top";
  

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
    track.setAttribute("aria-label", `Question ${globalNum}`);

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

      if (answers[q.id] === opt.val) {
        chip.classList.add("active");
        chip.setAttribute("aria-pressed", "true");
        readout.textContent = opt.hint;
        readout.dataset.tone = chip.dataset.tone;
        card.classList.add("answered");
      }

      chip.addEventListener("click", () => handleChoice(q, opt, card, chip, readout, localIdx));
      track.appendChild(chip);
    });

    wrapper.append(labels, track, readout);
    card.append(qTop, statement, wrapper);
    fragment.appendChild(card);
  });

  questionsContainer.replaceChildren(fragment);
  updateUI();
}

// ---------- Handle Clicking an Answer Circle ----------
function handleChoice(q, opt, card, chip, readout, localIdx) {
  const wasUnanswered = answers[q.id] === undefined;

  answers[q.id] = opt.val;
  card.classList.add("answered");
  card.classList.remove("needs-answer");

  card.querySelectorAll(".rating-chip").forEach(c => {
    c.classList.remove("active");
    c.setAttribute("aria-pressed", "false");
  });

  chip.classList.add("active");
  chip.setAttribute("aria-pressed", "true");
  readout.textContent = opt.hint;
  readout.dataset.tone = chip.dataset.tone;

  hideAlert();
  updateUI();

  // Gently auto-scroll to the next unanswered card (only on first-time answer)
  if (wasUnanswered) {
    const partQs = getPartQuestions(currentPart);
    const nextUnanswered = partQs.slice(localIdx + 1).find(item => answers[item.id] === undefined);

    setTimeout(() => {
      if (nextUnanswered) {
        const nextCard = document.getElementById(`q-card-${nextUnanswered.id}`);
        if (nextCard) {
          nextCard.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (isPartComplete(currentPart)) {
        // All 12 in this part answered -> bring Next/Submit button into view
        document.querySelector(".quiz-nav")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 170);
  }
}

// ---------- Switch Between Parts with Smooth Animation ----------
function switchPart(targetPart, direction) {
  transitioning = true;
  questionsContainer.classList.remove("part-enter-next", "part-enter-prev");
  questionsContainer.classList.add(`part-leave-${direction}`);

  setTimeout(() => {
    currentPart = targetPart;
    if (currentPart > maxPartReached) maxPartReached = currentPart;

    // Reset to top instantly while faded out (removes the long scroll delay)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    renderPart(direction);

    // Smoothly animate the new part banner in with the cards
    partBanner.classList.remove("banner-pop");
    void partBanner.offsetWidth;
    partBanner.classList.add("banner-pop");

    transitioning = false;
  }, LEAVE_MS);
}

// ---------- Validate Current Part Before Moving Forward ----------
function validateCurrentPart() {
  const partQs = getPartQuestions(currentPart);
  const missing = partQs.filter(q => answers[q.id] === undefined);

  if (missing.length === 0) return true;

  const firstMissed = missing[0];
  const missedCard = document.getElementById(`q-card-${firstMissed.id}`);
  const missedNumber = questions.findIndex(q => q.id === firstMissed.id) + 1;

  if (missedCard) {
    missedCard.classList.remove("needs-answer");
    void missedCard.offsetWidth; // restart shake animation
    missedCard.classList.add("needs-answer");
    missedCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  showAlert(
    `Please answer Question ${missedNumber} (${missing.length} remaining in Part ${currentPart + 1}) to continue.`
  );
  return false;
}

function showAlert(message) {
  partAlert.textContent = message;
  partAlert.hidden = false;
}

function hideAlert() {
  partAlert.hidden = true;
  partAlert.textContent = "";
}

// ---------- Update Progress Bar, Stepper, Banner & Nav Buttons ----------
function updateUI() {
  const count = totalAnsweredCount();
  const pct = Math.round((count / questions.length) * 100);

  progressBarFill.style.width = `${pct}%`;
  progressText.textContent = `Progress: ${count} / ${questions.length} answered`;
  progressPercent.textContent = `${pct}%`;

  renderStepper();
  renderPartBanner();

  const isFirst = currentPart === 0;
  const isLast = currentPart === TOTAL_PARTS - 1;

  prevBtn.hidden = isFirst;
  nextBtn.hidden = isLast;
  submitQuizBtn.hidden = !isLast;

  if (!isLast) {
    nextBtn.textContent = `Continue to Part ${currentPart + 2} →`;
  }
}

// ---------- Button Events ----------
prevBtn.addEventListener("click", () => {
  if (transitioning || currentPart === 0) return;
  switchPart(currentPart - 1, "prev");
});

nextBtn.addEventListener("click", () => {
  if (transitioning) return;
  if (!validateCurrentPart()) return;
  switchPart(currentPart + 1, "next");
});

submitQuizBtn.addEventListener("click", () => {
  if (transitioning) return;
  if (!validateCurrentPart()) return;

  // Double-check if any earlier part has a missing answer
  for (let p = 0; p < TOTAL_PARTS; p++) {
    if (!isPartComplete(p)) {
      switchPart(p, "prev");
      setTimeout(() => validateCurrentPart(), LEAVE_MS + 100);
      return;
    }
  }

  const submission = {
    userName: currentUserName,
    answers: answers
  };
  localStorage.setItem("healerQuizSubmission", JSON.stringify(submission));
  window.location.href = "results.html";
});

// ---------- Start at Part 1 ----------
renderPart("next");