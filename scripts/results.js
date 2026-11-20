// ========================================================
// RESULTS – deterministic 5-dimension scoring on results.html
// Needs: types-data.js, questions.js
// ========================================================

function calculateDimensionResults(savedAnswers) {
  return personalityDimensions.map(dim => {
    const dimQuestions = questions.filter(q => q.dimension === dim.key);

    let totalAdjustedScore = 0;
    dimQuestions.forEach(q => {
      const rawResponse = Number(savedAnswers[q.id] ?? 0);
      const clamped = Math.max(-3, Math.min(3, rawResponse));
      const adjusted = (q.side === "left" ? -clamped : clamped) * q.weight;
      totalAdjustedScore += adjusted;
    });

    // Exact formula: Right-trait % = 50 + (Total adjusted score / 72 * 100)
    const rightRaw = 50 + (totalAdjustedScore / 72) * 100;
    const isBalanced = rightRaw === 50;

    const rightPct = isBalanced ? 50 : Math.round(rightRaw);
    const leftPct = 100 - rightPct;

    let selectedLetter;
    let dominantName;

    if (isBalanced) {
      selectedLetter = dim.left.code;
      dominantName = "Balanced";
    } else if (rightPct > leftPct) {
      selectedLetter = dim.right.code;
      dominantName = dim.right.name;
    } else {
      selectedLetter = dim.left.code;
      dominantName = dim.left.name;
    }

    return {
      key: dim.key,
      label: dim.label,
      totalAdjustedScore,
      left: { ...dim.left, pct: leftPct },
      right: { ...dim.right, pct: rightPct },
      selectedLetter,
      dominantName,
      isBalanced
    };
  });
}

function renderResultsPage() {
  const rawSubmission = localStorage.getItem("healerQuizSubmission");

  // If user visits results.html directly without taking the test, send them to home
  if (!rawSubmission) {
    window.location.replace("index.html");
    return;
  }

  let submission;
  try {
    submission = JSON.parse(rawSubmission);
  } catch {
    window.location.replace("index.html");
    return;
  }

  const userName = submission.userName || "Explorer";
  const savedAnswers = submission.answers || {};

  const dimensionResults = calculateDimensionResults(savedAnswers);
  const byKey = Object.fromEntries(dimensionResults.map(d => [d.key, d]));

  // Combine letters from all 5 dimensions -> 4-letter core type + "-" + 5th identity letter
  const coreCode =
    byKey.energy.selectedLetter +
    byKey.mind.selectedLetter +
    byKey.nature.selectedLetter +
    byKey.tactics.selectedLetter;

  const identityCode = byKey.identity.selectedLetter;
  const fullCode = `${coreCode}-${identityCode}`;

  const matchedProfile =
    personalityVariantsData[fullCode] ||
    personalityVariantsData["INTJ-A"];

  // Update browser tab title dynamically
  document.title = `Healer | ${matchedProfile.code} – ${matchedProfile.name}`;

  // ---------- Header & character ----------
  const badgeEl = document.getElementById("dominantEnergyBadge");
  const isIntrovertDominant = byKey.energy.left.pct >= byKey.energy.right.pct;
  badgeEl.textContent = `${matchedProfile.code} • ${matchedProfile.identity.name.toUpperCase()}`;
  badgeEl.className = `energy-main-pill ${isIntrovertDominant ? "pill-intro" : "pill-extro"}`;

  document.getElementById("resultTypeTitle").textContent =
    `${userName}: ${matchedProfile.code} – ${matchedProfile.name}`;

  document.getElementById("resultRoleGroup").textContent =
    `${matchedProfile.category} Family • ${matchedProfile.roleTag} • ${matchedProfile.identity.name} (${matchedProfile.identity.code})`;

  document.getElementById("characterStage").innerHTML = matchedProfile.imgHTML;
  document.getElementById("resultTypeTagline").textContent = matchedProfile.tagline;

  // ---------- 5-Dimension breakdown (minimal unique rail) ----------
  const dimensionsContainer = document.getElementById("dimensionsContainer");
  dimensionsContainer.innerHTML = dimensionResults
    .map(dim => {
      const winner = dim.isBalanced
        ? "balanced"
        : dim.left.pct > dim.right.pct
          ? "left"
          : "right";

      const leftState = winner === "left" ? "is-winner" : winner === "balanced" ? "is-balanced" : "is-muted";
      const rightState = winner === "right" ? "is-winner" : winner === "balanced" ? "is-balanced" : "is-muted";

      return `
        <div class="trait-bar-row" data-dim="${dim.key}" data-winner="${winner}">
          <div class="trait-bar-meta">
            <span class="trait-side trait-left ${leftState}">
              <strong id="dim-${dim.key}-left-pct" class="trait-pct">0%</strong>
              <span class="trait-name">${dim.left.name}</span>
            </span>
            <span class="trait-side trait-right ${rightState}">
              <span class="trait-name">${dim.right.name}</span>
              <strong id="dim-${dim.key}-right-pct" class="trait-pct">0%</strong>
            </span>
          </div>

          <div class="trait-rail-wrap">
            <div class="trait-rail">
              <div id="dim-${dim.key}-left-bar" class="trait-fill-left ${leftState}" style="width: 50%;"></div>
              <div id="dim-${dim.key}-right-bar" class="trait-fill-right ${rightState}" style="width: 50%;"></div>
            </div>
            <span id="dim-${dim.key}-orb" class="trait-orb is-${winner}" style="left: 50%;"></span>
          </div>
        </div>
      `;
    })
    .join("");

  animateDimensionMeters(dimensionResults);

  // ---------- Deterministic summary ----------
  const balancedDims = dimensionResults.filter(d => d.isBalanced).map(d => d.label);
  const balancedNote = balancedDims.length
    ? ` Your ${balancedDims.join(", ")} ${balancedDims.length === 1 ? "dimension is" : "dimensions are"} evenly balanced at 50% / 50%.`
    : "";

  document.getElementById("ieSummaryText").textContent =
    `Your answers map directly to ${matchedProfile.code} – ${matchedProfile.name} (${matchedProfile.category} Family). As a ${matchedProfile.identity.name} (${matchedProfile.identity.code}) variant, you tend to be ${matchedProfile.identity.description.toLowerCase()}${balancedNote}`;

  // ---------- Key features ----------
  document.getElementById("keyFeaturesGrid").innerHTML = matchedProfile.features
    .map(feat => `
      <div class="key-feature-pill">
        <span class="feat-dot">✦</span>
        <span>${feat}</span>
      </div>
    `)
    .join("");

  // ---------- Strengths & Weaknesses cards ----------
  const strengthsEl = document.getElementById("strengthsList");
  const weaknessesEl = document.getElementById("weaknessesList");

  if (strengthsEl && matchedProfile.strengths) {
    strengthsEl.innerHTML = matchedProfile.strengths
      .map(item => `
        <li class="sw-item">
          <span class="sw-badge" aria-hidden="true">✓</span>
          <div class="sw-item-body">
            <strong class="sw-item-title">${item.title}</strong>
            <p class="sw-item-desc">${item.desc}</p>
          </div>
        </li>
      `)
      .join("");
  }

  if (weaknessesEl && matchedProfile.weaknesses) {
    weaknessesEl.innerHTML = matchedProfile.weaknesses
      .map(item => `
        <li class="sw-item">
          <span class="sw-badge" aria-hidden="true">!</span>
          <div class="sw-item-body">
            <strong class="sw-item-title">${item.title}</strong>
            <p class="sw-item-desc">${item.desc}</p>
          </div>
        </li>
      `)
      .join("");
  }
}

// Numbers count up from 0
function countUp(el, to, ms = 1200) {
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / ms, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased) + "%";
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Animate all 5 sleek rails + glowing orbs on load
function animateDimensionMeters(dimensionResults) {
  setTimeout(() => {
    dimensionResults.forEach(dim => {
      const leftBar = document.getElementById(`dim-${dim.key}-left-bar`);
      const rightBar = document.getElementById(`dim-${dim.key}-right-bar`);
      const orb = document.getElementById(`dim-${dim.key}-orb`);
      const leftNum = document.getElementById(`dim-${dim.key}-left-pct`);
      const rightNum = document.getElementById(`dim-${dim.key}-right-pct`);

      if (leftBar) leftBar.style.width = `${dim.left.pct}%`;
      if (rightBar) rightBar.style.width = `${dim.right.pct}%`;
      if (orb) orb.style.left = `${dim.left.pct}%`;
      if (leftNum) countUp(leftNum, dim.left.pct);
      if (rightNum) countUp(rightNum, dim.right.pct);
    });
  }, 300);
}

// Run only on results.html
if (document.getElementById("resultsScreen")) {
  renderResultsPage();
}