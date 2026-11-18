// ========================================================
// RESULTS – calculates the score and shows the result screen
// Needs: characters.js, types-data.js, questions.js, quiz.js
// ========================================================

function generateResults() {
  let extrovertScore = 0;
  let structuredScore = 0;
  const groupScores = { Analysts: 0, Diplomats: 0, Sentinels: 0, Explorers: 0 };

  questions.forEach(q => {
    const val = answers[q.id] || 0;
    if (q.axis === "energy") {
      extrovertScore += (q.polarity === "E") ? val : -val;
    } else if (q.axis === "style") {
      groupScores[q.group] += val;
      structuredScore += (q.variant === "structured") ? val : -val;
    }
  });

  // Introvert vs Extrovert percentage (kept between 6% and 94%)
  let extrovertPct = Math.round(50 + (extrovertScore / 30) * 44);
  extrovertPct = Math.min(94, Math.max(6, extrovertPct));
  const introvertPct = 100 - extrovertPct;

  const isIntrovertLeaning = introvertPct >= 50;
  const fitEnergyCode = isIntrovertLeaning ? "I" : "E";
  const fitVariantCode = structuredScore >= 0 ? "structured" : "open";

  // Highest scoring family
  const topCategory = Object.keys(groupScores).reduce((a, b) =>
    groupScores[a] >= groupScores[b] ? a : b
  );

  // Best matching archetype out of the 16
  const matchedProfile =
    personalityTypesData.find(
      t => t.category === topCategory && t.fitEnergy === fitEnergyCode && t.fitVariant === fitVariantCode
    ) ||
    personalityTypesData.find(t => t.category === topCategory) ||
    personalityTypesData[0];

  // ---------- Fill the result screen ----------
  const badgeEl = document.getElementById("dominantEnergyBadge");
  badgeEl.textContent = isIntrovertLeaning
    ? `INTROVERT LEANING (${introvertPct}%)`
    : `EXTROVERT LEANING (${extrovertPct}%)`;
  badgeEl.className = `energy-main-pill ${isIntrovertLeaning ? "pill-intro" : "pill-extro"}`;

  document.getElementById("resultTypeTitle").textContent = `${currentUserName}: The ${matchedProfile.name}`;
  document.getElementById("resultRoleGroup").textContent =
    `Recommended Match • ${matchedProfile.category} Family (${matchedProfile.roleTag})`;
  document.getElementById("characterStage").innerHTML = matchedProfile.imgHTML;
  document.getElementById("resultTypeTagline").textContent = matchedProfile.tagline;

  // document.getElementById("introvertPctText").textContent = `${introvertPct}%`;
  // document.getElementById("extrovertPctText").textContent = `${extrovertPct}%`;
  // document.getElementById("introvertBar").style.width = `${introvertPct}%`;
  // document.getElementById("extrovertBar").style.width = `${extrovertPct}%`;

  animateMeter(introvertPct, extrovertPct);

  document.getElementById("ieSummaryText").textContent = isIntrovertLeaning
    ? `You currently lean ${introvertPct}% toward Introversion and ${extrovertPct}% toward Extroversion. While everyone adapts across both energies depending on the situation, your natural comfort zone thrives in deep focus and meaningful connections—making "${matchedProfile.name}" an ideal personality fit for you.`
    : `You currently lean ${extrovertPct}% toward Extroversion and ${introvertPct}% toward Introversion. While everyone balances quiet time with social energy, your natural momentum shines when engaging and collaborating actively—making "${matchedProfile.name}" an ideal personality fit for you.`;

  document.getElementById("keyFeaturesGrid").innerHTML = matchedProfile.features
    .map(feat => `
      <div class="key-feature-pill">
        <span class="feat-dot">✦</span>
        <span>${feat}</span>
      </div>
    `).join("");

  // ---------- Switch screens ----------
  document.getElementById("quizScreen").style.display = "none";
  document.getElementById("resultsScreen").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// numbers count up from 0
function countUp(el, to, ms = 1300) {
  const start = performance.now();
  function tick(now) {
    const p = Math.min((now - start) / ms, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * eased) + "%";
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// bars grow from 0 after the results screen is visible
function animateMeter(introPct, extroPct) {
  const iBar = document.getElementById("introvertBar");
  const eBar = document.getElementById("extrovertBar");
  iBar.style.width = "0%";
  eBar.style.width = "0%";

  setTimeout(() => {
    iBar.style.width = introPct + "%";
    eBar.style.width = extroPct + "%";
    countUp(document.getElementById("introvertPctText"), introPct);
    countUp(document.getElementById("extrovertPctText"), extroPct);
  }, 350);
}