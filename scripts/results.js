// ========================================================
// RESULTS – deterministic 5-dimension scoring on results.html
// Needs: types-data.js, questions.js
// ========================================================

const CAREER_PATHS_BY_TYPE = {
  INTJ: {
    workStyle: "Autonomous & Strategic",
    clarity: "You thrive in roles where you can design long-term systems, solve complex problems independently, and see measurable results.",
    paths: [
      { field: "Strategy", title: "Management Consultant", reason: "Turns complex organizational problems into clear, high-impact roadmaps." },
      { field: "Finance", title: "Investment Strategist", reason: "Rewards deep pattern recognition, independent research, and long-range forecasting." },
      { field: "Design & Build", title: "Principal Architect", reason: "Blends structural logic with original vision to shape lasting physical spaces." }
    ]
  },
  INTP: {
    workStyle: "Analytical & Exploratory",
    clarity: "You do your best work when given intellectual freedom to investigate root causes, test theories, and build original frameworks.",
    paths: [
      { field: "Research", title: "Economic & Policy Analyst", reason: "Lets you dissect complex data and uncover how large-scale systems behave." },
      { field: "Academia", title: "University Professor / Researcher", reason: "Offers deep autonomy to explore ideas and publish original findings." },
      { field: "Law & Logic", title: "Intellectual Property Strategist", reason: "Matches your sharp logical precision with novel, unconventional concepts." }
    ]
  },
  ENTJ: {
    workStyle: "Decisive & High-Impact",
    clarity: "You excel when leading ambitious initiatives, organizing people and resources, and turning bold goals into reality.",
    paths: [
      { field: "Executive", title: "Operations Director", reason: "Puts you in charge of scaling teams, streamlining execution, and driving results." },
      { field: "Business", title: "Venture Capitalist / Founder", reason: "Rewards bold decision-making, high-stakes negotiation, and strategic growth." },
      { field: "Law", title: "Corporate Attorney", reason: "Leverages your persuasive clarity, structured thinking, and competitive drive." }
    ]
  },
  ENTP: {
    workStyle: "Dynamic & Idea-Driven",
    clarity: "You stay energized in fast-moving environments where you can debate ideas, spot untapped opportunities, and pioneer new approaches.",
    paths: [
      { field: "Entrepreneurship", title: "Business Strategist & Founder", reason: "Gives you the freedom to spot market gaps and pitch disruptive concepts." },
      { field: "Media", title: "Creative Director", reason: "Channels your rapid ideation and storytelling into memorable campaigns." },
      { field: "Advisory", title: "Political or Brand Consultant", reason: "Combines sharp debate skills with quick-thinking problem solving." }
    ]
  },
  INFJ: {
    workStyle: "Purpose-Led & Insightful",
    clarity: "You are most fulfilled in meaningful work that helps people grow, brings clarity to human behavior, and aligns with your core values.",
    paths: [
      { field: "Mental Health", title: "Clinical Psychologist", reason: "Uses your deep empathy and intuition to guide individuals through real change." },
      { field: "Writing", title: "Author & Editorial Strategist", reason: "Lets you translate complex emotions and human truths into impactful stories." },
      { field: "Impact", title: "Nonprofit Program Director", reason: "Connects your long-term vision directly to lasting community impact." }
    ]
  },
  INFP: {
    workStyle: "Authentic & Creative",
    clarity: "You flourish in supportive, values-driven spaces where you can express originality and make a genuine difference in people's lives.",
    paths: [
      { field: "Counseling", title: "Art or Behavioral Therapist", reason: "Pairs your compassionate listening with creative, human-centered healing." },
      { field: "Storytelling", title: "Screenwriter / Documentary Producer", reason: "Gives voice to meaningful perspectives and emotionally resonant narratives." },
      { field: "Education", title: "Curriculum & Learning Designer", reason: "Allows you to craft engaging, empathetic learning experiences." }
    ]
  },
  ENFJ: {
    workStyle: "Collaborative & Inspiring",
    clarity: "You shine in people-first leadership roles where mentoring, clear communication, and uniting a team around a shared mission matter most.",
    paths: [
      { field: "Leadership", title: "People & Culture Director", reason: "Empowers you to shape healthy organizations and help talent thrive." },
      { field: "Communications", title: "Public Relations Director", reason: "Harnesses your natural warmth and persuasion to build lasting trust." },
      { field: "Coaching", title: "Executive Leadership Coach", reason: "Directly channels your ability to see and unlock potential in others." }
    ]
  },
  ENFP: {
    workStyle: "Expressive & People-Centered",
    clarity: "You thrive in flexible, energetic environments that welcome fresh ideas, human connection, and variety over rigid routine.",
    paths: [
      { field: "Media", title: "Journalist / Podcast Host", reason: "Lets you explore diverse stories, interview fascinating people, and spark curiosity." },
      { field: "Marketing", title: "Brand Storyteller", reason: "Turns your enthusiasm and originality into campaigns people genuinely connect with." },
      { field: "Experiences", title: "Creative Event Producer", reason: "Blends big-picture imagination with high-energy collaboration." }
    ]
  },
  ISTJ: {
    workStyle: "Structured & Dependable",
    clarity: "You perform best in clear, well-organized environments where accuracy, integrity, and proven methods are valued and rewarded.",
    paths: [
      { field: "Finance", title: "Chartered Accountant / Auditor", reason: "Rewards your precision, discipline, and commitment to getting every detail right." },
      { field: "Logistics", title: "Supply Chain Manager", reason: "Puts your practical planning and reliability at the heart of smooth operations." },
      { field: "Governance", title: "Compliance & Risk Officer", reason: "Matches your respect for clear standards, fairness, and thorough documentation." }
    ]
  },
  ISFJ: {
    workStyle: "Supportive & Detail-Oriented",
    clarity: "You feel most rewarded in steady, respectful environments where your practical care and attention to detail directly help others.",
    paths: [
      { field: "Healthcare", title: "Clinical Nurse / Healthcare Coordinator", reason: "Combines hands-on compassion with calm, dependable organization." },
      { field: "Education", title: "Academic Advisor / Educator", reason: "Lets you mentor individuals patiently and create a structured space to grow." },
      { field: "Operations", title: "Client Relations Manager", reason: "Rewards your memory for details, loyalty, and genuine care for people." }
    ]
  },
  ESTJ: {
    workStyle: "Organized & Results-Driven",
    clarity: "You excel in structured leadership roles where clear expectations, decisive action, and efficient teamwork deliver tangible outcomes.",
    paths: [
      { field: "Management", title: "Project & Operations Manager", reason: "Leverages your talent for organizing timelines, people, and budgets cleanly." },
      { field: "Finance", title: "Corporate Financial Officer", reason: "Matches your practical judgment, accountability, and focus on measurable growth." },
      { field: "Public Sector", title: "Hospital or Institutional Administrator", reason: "Puts your leadership and structure to work keeping vital systems running." }
    ]
  },
  ESFJ: {
    workStyle: "Harmonious & Community-Focused",
    clarity: "You thrive in warm, team-oriented settings where building strong relationships, organizing people, and serving others come together.",
    paths: [
      { field: "Hospitality", title: "Hospitality & Guest Experience Director", reason: "Turns your attentiveness and warmth into unforgettable service." },
      { field: "People", title: "Human Resources Manager", reason: "Balances clear organizational policies with genuine care for employee wellbeing." },
      { field: "Community", title: "Corporate Event & Community Lead", reason: "Brings people together through thoughtful planning and high energy." }
    ]
  },
  ISTP: {
    workStyle: "Hands-On & Pragmatic",
    clarity: "You do your best work in practical, action-oriented roles where you can troubleshoot real-world problems independently without micromanagement.",
    paths: [
      { field: "Engineering", title: "Robotics / Mechanical Specialist", reason: "Directly engages your love for understanding how physical systems work and improving them." },
      { field: "Aviation", title: "Commercial Pilot / Air Traffic Controller", reason: "Rewards calm focus, sharp spatial awareness, and decisive action under pressure." },
      { field: "Investigation", title: "Forensic Analyst", reason: "Combines methodical observation with real-world problem solving." }
    ]
  },
  ISFP: {
    workStyle: "Tactile & Expressive",
    clarity: "You flourish in calm, flexible environments where you can create tangible beauty, work with your hands, and stay true to your aesthetic sense.",
    paths: [
      { field: "Spaces", title: "Interior & Spatial Designer", reason: "Lets you transform everyday environments through color, texture, and harmony." },
      { field: "Visual Arts", title: "Photographer / Art Director", reason: "Captures emotion and subtle detail through a deeply personal visual lens." },
      { field: "Wellness", title: "Physical Therapist / Nutritionist", reason: "Pairs gentle, one-on-one care with practical, hands-on healing." }
    ]
  },
  ESTP: {
    workStyle: "Fast-Paced & Action-Oriented",
    clarity: "You thrive in high-energy, real-time environments where quick thinking, persuasion, and bold execution beat sitting behind a desk all day.",
    paths: [
      { field: "Sales & Deals", title: "Real Estate Broker / Negotiator", reason: "Rewards your sharp read of people, confidence, and love for closing high-value deals." },
      { field: "Business", title: "Entrepreneur / Franchise Owner", reason: "Gives you direct control, fast feedback, and room to take calculated risks." },
      { field: "Sports & Action", title: "Sports Management / Performance Director", reason: "Matches your competitive energy with live, high-stakes environments." }
    ]
  },
  ESFP: {
    workStyle: "Energetic & People-First",
    clarity: "You shine in lively, interactive roles where your natural charisma, spontaneity, and ability to lift the room create immediate impact.",
    paths: [
      { field: "Entertainment", title: "Event Host / Media Presenter", reason: "Puts your natural stage presence and ability to engage audiences front and center." },
      { field: "Hospitality", title: "Travel & Experience Curator", reason: "Blends your love for adventure and people into memorable real-world journeys." },
      { field: "Brand", title: "Publicity & Talent Manager", reason: "Harnesses your social intuition and energy to build buzz and connections." }
    ]
  }
};

const LIFE_TOOLKIT_BY_FAMILY = {
  Analysts: {
    matches: [
      { code: "ENFP", name: "Campaigner", why: "Brings warmth, curiosity, and fresh energy that balances your logical depth." },
      { code: "ENTJ", name: "Commander", why: "Matches your strategic ambition and respects direct, honest debate." },
      { code: "INFJ", name: "Advocate", why: "Shares your love for deep, meaningful conversations beyond small talk." }
    ],
    communication: {
      style: "Direct, logical, and idea-focused. You prefer clarity over sugarcoating and love exploring how systems work.",
      bestWith: "People who give you space to think, ask sharp questions, and value honest feedback.",
      watchOut: "Pausing to acknowledge emotions before jumping straight into problem-solving builds much stronger trust."
    },
    habits: [
      { title: "Ship Before Perfect", desc: "Set a 48-hour deadline on decisions so over-analysis doesn't stall your best ideas." },
      { title: "Say the Quiet Appreciation", desc: "Share one genuine compliment a day—people can't read the respect you hold internally." },
      { title: "Schedule Recharge Blocks", desc: "Protect uninterrupted solo focus time so social fatigue doesn't build up." }
    ]
  },
  Diplomats: {
    matches: [
      { code: "INTJ", name: "Architect", why: "Grounds your big-hearted vision with calm structure and deep loyalty." },
      { code: "ENFJ", name: "Protagonist", why: "Mirrors your empathy and shared drive to make a meaningful impact." },
      { code: "INFP", name: "Mediator", why: "Creates a safe, authentic space where you feel completely understood." }
    ],
    communication: {
      style: "Warm, empathetic, and meaning-driven. You read between the lines and care deeply about tone and intent.",
      bestWith: "People who listen actively, respect your values, and communicate with sincerity.",
      watchOut: "Avoid saying 'yes' just to keep the peace—clear boundaries actually protect your relationships."
    },
    habits: [
      { title: "Practice Gentle Boundaries", desc: "Use a clear, kind 'I don't have the bandwidth this week' without over-explaining." },
      { title: "Turn Vision into 1 Step", desc: "Write down one tiny physical action each morning to move your big dreams forward." },
      { title: "Protect Emotional Energy", desc: "Take 15 minutes after heavy conversations to reset and separate others' stress from yours." }
    ]
  },
  Sentinels: {
    matches: [
      { code: "ISFP", name: "Adventurer", why: "Adds spontaneity and creative calm while appreciating your steady reliability." },
      { code: "ESTJ", name: "Executive", why: "Shares your respect for follow-through, clear plans, and practical results." },
      { code: "ESFJ", name: "Consul", why: "Builds a loyal, supportive partnership grounded in trust and consistency." }
    ],
    communication: {
      style: "Clear, practical, and dependable. You value concrete facts, kept promises, and straightforward expectations.",
      bestWith: "People who follow through on their word and appreciate structured, respectful dialogue.",
      watchOut: "Leave a little room for unconventional ideas—sometimes the messy brainstorm leads to a better system."
    },
    habits: [
      { title: "Delegate One Task Weekly", desc: "You don't have to carry every responsibility alone—let others step up and learn." },
      { title: "Plan Unplanned Time", desc: "Block one open afternoon a week with zero checklist to recharge your creativity." },
      { title: "Celebrate Progress", desc: "Pause to recognize what you've already built instead of immediately jumping to the next task." }
    ]
  },
  Explorers: {
    matches: [
      { code: "ISFJ", name: "Defender", why: "Offers steady warmth and grounding while cheering on your bold energy." },
      { code: "ENTP", name: "Debater", why: "Matches your fast pace, humor, and appetite for real-world adventure." },
      { code: "ESTP", name: "Entrepreneur", why: "Thrives alongside you in action-oriented, zero-drama environments." }
    ],
    communication: {
      style: "Energetic, observant, and real-time. You prefer action over endless meetings and keep conversations lively.",
      bestWith: "People who are flexible, direct, and ready to experience things hands-on.",
      watchOut: "Slow down for long-term commitments—sharing your plan ahead of time helps others feel secure."
    },
    habits: [
      { title: "Use the 10-Minute Rule", desc: "When a routine task feels boring, commit to just 10 minutes—momentum handles the rest." },
      { title: "Track One Long-Term Goal", desc: "Keep a single visible milestone for the next 90 days so your energy compounds." },
      { title: "Pause Before Big Leaps", desc: "Sleep on major decisions for 24 hours to pair your sharp instincts with foresight." }
    ]
  }
};

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

  // ---------- Header & character (Front of Flip Card) ----------
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

  // ---------- Flip card back-side definition + watermark + visual bars ----------
  const flipBackCode = document.getElementById("flipBackCode");
  if (flipBackCode) {
    flipBackCode.textContent = matchedProfile.code;
    document.getElementById("flipBackFamily").textContent = `${matchedProfile.category} Family`;
    document.getElementById("flipBackTitle").textContent = matchedProfile.name;
    document.getElementById("flipBackRole").textContent = matchedProfile.roleTag;

    const coreDef = matchedProfile.short || matchedProfile.tagline;
    const familyNote = matchedProfile.categoryDesc ? ` ${matchedProfile.categoryDesc}` : "";
    document.getElementById("flipBackDefinition").textContent = `${coreDef}${familyNote}`;

    document.getElementById("flipBackIdentityLabel").textContent =
      `${matchedProfile.identity.name} (${matchedProfile.identity.code}) Identity`;
    document.getElementById("flipBackIdentityDesc").textContent = matchedProfile.identity.description;

    document.getElementById("flipBackTags").innerHTML = (matchedProfile.features || [])
      .slice(0, 3)
      .map(feat => `<span class="flip-tag">✦ ${feat}</span>`)
      .join("");

    // Giant subtle watermark behind the back card
    const watermarkEl = document.getElementById("flipBackWatermark");
    if (watermarkEl) watermarkEl.textContent = coreCode;

    // 3 visual animated stat bars using the user's dominant dimensions
    const flipStatsEl = document.getElementById("flipBackStats");
    if (flipStatsEl) {
      const topThree = [byKey.mind, byKey.nature, byKey.tactics].map(d => {
        const isRight = d.right.pct >= d.left.pct;
        return {
          name: isRight ? d.right.name : d.left.name,
          pct: isRight ? d.right.pct : d.left.pct
        };
      });

      flipStatsEl.innerHTML = topThree
        .map((stat, i) => `
          <div class="flip-stat-item" style="--stagger:${i * 120}ms">
            <div class="flip-stat-head">
              <span>${stat.name}</span>
              <strong>${stat.pct}%</strong>
            </div>
            <div class="flip-stat-track">
              <span class="flip-stat-fill" style="--target-w:${stat.pct}%"></span>
            </div>
          </div>
        `)
        .join("");
    }
  }

  // Reliable hover + tap flip triggers for Character Card
  const flipCardEl = document.getElementById("characterFlipCard");
  if (flipCardEl) {
    flipCardEl.addEventListener("mouseenter", () => {
      flipCardEl.classList.add("is-flipped");
    });
    flipCardEl.addEventListener("mouseleave", () => {
      flipCardEl.classList.remove("is-flipped");
    });
    flipCardEl.addEventListener("click", () => {
      flipCardEl.classList.toggle("is-flipped");
    });
  }

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

  // ---------- Upgraded Key Features (interactive numbered tiles) ----------
  document.getElementById("keyFeaturesGrid").innerHTML = matchedProfile.features
    .map((feat, idx) => `
      <div class="key-feature-pill">
        <div class="feat-top">
          <span class="feat-dot">✦</span>
          <span class="feat-num">0${idx + 1}</span>
        </div>
        <span class="feat-label">${feat}</span>
      </div>
    `)
    .join("");

  // ---------- Click-to-Flip Strengths & Weaknesses cards ----------
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

  // Update front-cover count badges
  const sCountEl = document.getElementById("strengthsCountBadge");
  const wCountEl = document.getElementById("weaknessesCountBadge");
  if (sCountEl && matchedProfile.strengths) {
    sCountEl.textContent = `${matchedProfile.strengths.length} Key Strengths`;
  }
  if (wCountEl && matchedProfile.weaknesses) {
    wCountEl.textContent = `${matchedProfile.weaknesses.length} Growth Zones`;
  }

  // Click (or Enter/Space) to flip Strengths & Weaknesses cards
  document.querySelectorAll(".sw-flip-card").forEach(card => {
    const toggleFlip = () => {
      const flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-expanded", String(flipped));
    };

    card.addEventListener("click", toggleFlip);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFlip();
      }
    });
  });

  // ---------- Career Path Clarity (deep clarity + interactive focus) ----------
  const careerData = CAREER_PATHS_BY_TYPE[coreCode] || CAREER_PATHS_BY_TYPE["INTJ"];
  const careerClarityEl = document.getElementById("careerClarityNote");
  const careerBadgeEl = document.getElementById("careerWorkStyleBadge");
  const careerGridEl = document.getElementById("careerPathsGrid");

  if (careerClarityEl) careerClarityEl.textContent = careerData.clarity;
  if (careerBadgeEl) careerBadgeEl.textContent = `Ideal Style: ${careerData.workStyle}`;

  if (careerGridEl) {
    careerGridEl.innerHTML = careerData.paths
      .map((path, idx) => `
        <article class="career-path-item ${idx === 0 ? "is-selected" : ""}" tabindex="0">
          <div class="career-item-top">
            <span class="career-field-tag">${path.field}</span>
            <span class="career-index">0${idx + 1}</span>
          </div>
          <h4 class="career-item-title">${path.title}</h4>
          <p class="career-item-reason">${path.reason}</p>
          <div class="career-clarity-meta">
            <span class="clarity-chip"><strong>Fit:</strong> ${careerData.workStyle.split("&")[0].trim()}</span>
            <span class="clarity-chip"><strong>Focus:</strong> ${path.field}</span>
          </div>
        </article>
      `)
      .join("");

    // Click any career card to highlight it as active focus
    careerGridEl.querySelectorAll(".career-path-item").forEach(card => {
      card.addEventListener("click", () => {
        careerGridEl.querySelectorAll(".career-path-item").forEach(c => c.classList.remove("is-selected"));
        card.classList.add("is-selected");
      });
    });
  }

  // ---------- Personal Life & Growth Toolkit (Interactive Tabs) ----------
  const toolkitData = LIFE_TOOLKIT_BY_FAMILY[matchedProfile.category] || LIFE_TOOLKIT_BY_FAMILY["Analysts"];
  const toolkitContentEl = document.getElementById("toolkitContent");
  const toolkitTabs = document.querySelectorAll(".toolkit-tab");

  function renderToolkitTab(tabName) {
    if (!toolkitContentEl) return;

    if (tabName === "matches") {
      toolkitContentEl.innerHTML = `
        <div class="toolkit-grid">
          ${toolkitData.matches.map(m => `
            <div class="toolkit-tile">
              <div class="toolkit-tile-top">
                <span class="match-code-pill">${m.code}</span>
                <span class="match-label">Natural Synergy</span>
              </div>
              <h4 class="toolkit-tile-title">${m.name}</h4>
              <p class="toolkit-tile-text">${m.why}</p>
            </div>
          `).join("")}
        </div>
      `;
    } else if (tabName === "comm") {
      const c = toolkitData.communication;
      toolkitContentEl.innerHTML = `
        <div class="toolkit-grid">
          <div class="toolkit-tile">
            <span class="comm-kicker">Your Natural Style</span>
            <h4 class="toolkit-tile-title">How You Express</h4>
            <p class="toolkit-tile-text">${c.style}</p>
          </div>
          <div class="toolkit-tile">
            <span class="comm-kicker">Best Environment</span>
            <h4 class="toolkit-tile-title">Who You Click With</h4>
            <p class="toolkit-tile-text">${c.bestWith}</p>
          </div>
          <div class="toolkit-tile">
            <span class="comm-kicker">Pro Tip</span>
            <h4 class="toolkit-tile-title">Blind Spot to Watch</h4>
            <p class="toolkit-tile-text">${c.watchOut}</p>
          </div>
        </div>
      `;
    } else {
      toolkitContentEl.innerHTML = `
        <div class="toolkit-grid">
          ${toolkitData.habits.map((h, i) => `
            <div class="toolkit-tile">
              <span class="comm-kicker">Habit 0${i + 1}</span>
              <h4 class="toolkit-tile-title">${h.title}</h4>
              <p class="toolkit-tile-text">${h.desc}</p>
            </div>
          `).join("")}
        </div>
      `;
    }
  }

  toolkitTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      toolkitTabs.forEach(b => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderToolkitTab(btn.dataset.tab);
    });
  });

  renderToolkitTab("matches");
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