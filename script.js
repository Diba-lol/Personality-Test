// ================= 1. GET USER NAME FROM URL =================
const urlParams = new URLSearchParams(window.location.search);
const currentUserName = urlParams.get("userName") || "Explorer";

// ================= 2. 20 PSYCHOMETRIC STATEMENTS =================
// 4 Dimensions: innovation (5), structure (5), analysis (5), empathy (5)
const questions = [
  { id: 0, text: "You thrive in fast-paced environments where ideas change and evolve daily.", dim: "innovation" },
  { id: 1, text: "You find comfort in predictable schedules, routines, and established guidelines.", dim: "structure" },
  { id: 2, text: "You rely on cold data and objective facts rather than intuition when making key decisions.", dim: "analysis" },
  { id: 3, text: "You immediately notice when someone in the room feels unheard, excluded, or upset.", dim: "empathy" },
  { id: 4, text: "You enjoy taking calculated risks on creative ideas that haven't been tried before.", dim: "innovation" },
  { id: 5, text: "You systematically double-check your code and tasks to prevent any minor flaws before submitting.", dim: "structure" },
  { id: 6, text: "In disagreements, solving the root technical problem is far more critical than soothing emotions.", dim: "analysis" },
  { id: 7, text: "You feel deeply motivated when your daily work directly relieves another human being's stress.", dim: "empathy" },
  { id: 8, text: "You prefer crafting visually stunning, interactive user experiences over working on background data.", dim: "innovation" },
  { id: 9, text: "You like breaking down massive endeavors into neat checklists before writing a single line of code.", dim: "structure" },
  { id: 10, text: "You find it easy to disconnect your personal feelings to analyze an argument with pure logic.", dim: "analysis" },
  { id: 11, text: "You prioritize personal authenticity and moral principles far above sheer corporate status.", dim: "empathy" },
  { id: 12, text: "You get restless when forced to follow repetitive, strictly documented procedures.", dim: "innovation" },
  { id: 13, text: "You keep your workspace, code repositories, and project folders impeccably organized.", dim: "structure" },
  { id: 14, text: "You enjoy discussing abstract systems, algorithms, and models more than casual everyday talk.", dim: "analysis" },
  { id: 15, text: "You naturally make time to mentor or assist teammates even when facing tight deadlines.", dim: "empathy" },
  { id: 16, text: "You frequently imagine how digital tools and interfaces will function five to ten years into the future.", dim: "innovation" },
  { id: 17, text: "You get frustrated when team members deviate from agreed-upon project architecture without notice.", dim: "structure" },
  { id: 18, text: "You evaluate ideas strictly by their objective efficiency and practical return on effort.", dim: "analysis" },
  { id: 19, text: "You trust your genuine internal convictions more than external social approval or authority.", dim: "empathy" }
];

// 7-Point Custom Segmented Scale (-3 to +3)
const scaleOptions = [
  { val: 3, label: "+3", type: "chip-agree", hint: "Strongly Agree" },
  { val: 2, label: "+2", type: "chip-agree", hint: "Agree" },
  { val: 1, label: "+1", type: "chip-agree", hint: "Slightly Agree" },
  { val: 0, label: "0", type: "chip-neutral", hint: "Neutral" },
  { val: -1, label: "-1", type: "chip-disagree", hint: "Slightly Disagree" },
  { val: -2, label: "-2", type: "chip-disagree", hint: "Disagree" },
  { val: -3, label: "-3", type: "chip-disagree", hint: "Strongly Disagree" }
];

const answers = {};

// DOM Elements
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("resultsScreen");
const questionsContainer = document.getElementById("questionsContainer");
const progressBarFill = document.getElementById("progressBarFill");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const submitQuizBtn = document.getElementById("submitQuizBtn");

// ================= 3. RENDER 20 QUESTIONS =================
function renderQuestions() {
  if (!questionsContainer) return;
  questionsContainer.innerHTML = "";

  questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-item";
    card.id = `qCard_${q.id}`;
    card.style.setProperty("--i", Math.min(idx, 8));

    const top = document.createElement("div");
    top.className = "q-top";
    top.innerHTML = `<span class="q-num"><b>${String(idx + 1).padStart(2, "0")}</b> / ${questions.length}</span>`;

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

    scaleOptions.forEach(opt => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `rating-chip ${opt.type}`;
      chip.dataset.level = Math.abs(opt.val);
      chip.dataset.tone = opt.type.replace("chip-", "");
      chip.title = opt.hint;
      chip.setAttribute("aria-label", opt.hint);
      chip.setAttribute("aria-pressed", "false");
      chip.innerHTML = '<span class="chip-core"></span>';
      chip.addEventListener("click", () => handleChoice(q.id, opt.val, card, chip));
      track.appendChild(chip);
    });

    const readout = document.createElement("div");
    readout.className = "scale-readout";
    readout.setAttribute("aria-live", "polite");
    readout.textContent = "Tap a circle to answer";

    wrapper.append(labels, track, readout);
    card.append(top, statement, wrapper);
    questionsContainer.appendChild(card);
  });
}

function handleChoice(questionId, val, cardElement, selectedChip) {
  answers[questionId] = val;
  cardElement.classList.add("answered");

  cardElement.querySelectorAll(".rating-chip").forEach(c => {
    c.classList.remove("active");
    c.setAttribute("aria-pressed", "false");
  });
  selectedChip.classList.add("active");
  selectedChip.setAttribute("aria-pressed", "true");

  const readout = cardElement.querySelector(".scale-readout");
  readout.textContent = selectedChip.title;
  readout.dataset.tone = selectedChip.dataset.tone;

  const answeredCount = Object.keys(answers).length;
  const percentage = Math.round((answeredCount / questions.length) * 100);
  progressBarFill.style.width = `${percentage}%`;
  progressText.textContent = `Progress: ${answeredCount} / ${questions.length} answered`;
  progressPercent.textContent = `${percentage}%`;

  submitQuizBtn.disabled = answeredCount !== questions.length;
}

// ================= 4. COMPUTE 20-QUESTION RESULTS =================
function generateResults() {
  let scores = { innovation: 0, structure: 0, analysis: 0, empathy: 0 };

  questions.forEach(q => {
    if (answers[q.id] !== undefined) {
      scores[q.dim] += answers[q.id];
    }
  });

  // Normalize each dimension (range: -15 to +15 mapped to 45% - 96%)
  const normalize = (score) => Math.min(96, Math.max(42, Math.round(68 + (score / 15) * 26)));

  const traits = [
    { name: "Creative Problem Solving & Vision", val: normalize(scores.innovation) },
    { name: "System Architecture & Structure", val: normalize(scores.structure) },
    { name: "Logical & Analytical Rigor", val: normalize(scores.analysis) },
    { name: "Empathy & Human Alignment", val: normalize(scores.empathy) }
  ];

  // Render Traits
  const traitsList = document.getElementById("traitsList");
  traitsList.innerHTML = traits.map(t => `
    <div class="trait-row">
      <div class="trait-meta">
        <span>${t.name}</span>
        <span>${t.val}%</span>
      </div>
      <div class="trait-track">
        <div class="trait-fill" style="width: ${t.val}%"></div>
      </div>
    </div>
  `).join("");

  const strengthsList = document.getElementById("strengthsList");
  const weaknessesList = document.getElementById("weaknessesList");
  const careersGrid = document.getElementById("careersGrid");
  const titleEl = document.getElementById("resultTypeTitle");
  const taglineEl = document.getElementById("resultTypeTagline");

  // Determine Archetype
  if (scores.innovation >= scores.structure) {
    titleEl.textContent = `${currentUserName}: The Innovative Architect`;
    taglineEl.textContent = "Creative, fast-learning, and driven to design innovative and intuitive digital solutions.";
    strengthsList.innerHTML = `
      <li>High aptitude for modern frontend architecture, interactive UI, and fluid animations.</li>
      <li>Quick at translating abstract user ideas into polished, functional prototypes.</li>
      <li>Natural problem-solver when designing creative workarounds for complex logic.</li>
    `;
    weaknessesList.innerHTML = `
      <li>Can get restless when confined to rigid, repetitive documentation without creative freedom.</li>
      <li>May over-iterate on visual micro-details instead of delivering minimum viable features.</li>
    `;
    careersGrid.innerHTML = `
      <div class="career-pill">Frontend Web Developer</div>
      <div class="career-pill">UI / UX Product Designer</div>
      <div class="career-pill">Creative Technologist</div>
      <div class="career-pill">Web Applications Engineer</div>
    `;
  } else {
    titleEl.textContent = `${currentUserName}: The Methodical Systems Strategist`;
    taglineEl.textContent = "Structured, dependable, and focused on building reliable, scalable systems.";
    strengthsList.innerHTML = `
      <li>Exceptional discipline with clean code architecture, Git workflows, and version control.</li>
      <li>Thorough systematic debugging skills with strong attention to edge-case handling.</li>
      <li>High dependability and consistent delivery in structured engineering sprints.</li>
    `;
    weaknessesList.innerHTML = `
      <li>Can feel hesitant to change direction when project requirements shift abruptly.</li>
      <li>May spend excess time perfecting system plans before building the first prototype.</li>
    `;
    careersGrid.innerHTML = `
      <div class="career-pill">Software Systems Engineer</div>
      <div class="career-pill">Full-Stack Application Developer</div>
      <div class="career-pill">Technical Project Coordinator</div>
      <div class="career-pill">QA & Test Automation Specialist</div>
    `;
  }

  // Switch screens
  quizScreen.style.display = "none";
  resultsScreen.style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Init
renderQuestions();
if (submitQuizBtn) {
  submitQuizBtn.addEventListener("click", generateResults);
}