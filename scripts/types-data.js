// ========================================================
// TYPES DATA – all 16 personality types (4 per family)
// Needs: characters.js loaded first
// ========================================================

const personalityTypesData = [
  // ---------------- 1. ANALYSTS ----------------
  {
    id: "architect",
    category: "Analysts",
    categoryDesc: "Rational, strategic, and intellectually curious thinkers who love solving complex problems.",
    fitEnergy: "I",
    fitVariant: "structured",
    roleTag: "Strategic Planner",
    name: "Architect",
    tagline: "Imaginative and strategic thinkers with a long-term plan for everything.",
    features: ["Systems Thinking", "Deep Focus", "Future Vision", "Independent"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(99, 102, 241, 0.12)", coat: "#312e81", accent: "#38bdf8", pants: "#1e1b4b",
      skin: "#fde68a", hair: "#1e1b4b", hairStyle: "short", glasses: true, prop: "orb"
    })
  },
  {
    id: "logician",
    category: "Analysts",
    categoryDesc: "Rational, strategic, and intellectually curious thinkers who love solving complex problems.",
    fitEnergy: "I",
    fitVariant: "open",
    roleTag: "Innovative Theorist",
    name: "Logician",
    tagline: "Inventive problem-solvers with an unquenchable thirst for knowledge and logic.",
    features: ["Analytical Depth", "Curious Mind", "Pattern Finder", "Original Ideas"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(124, 58, 237, 0.12)", coat: "#4c1d95", accent: "#a78bfa", pants: "#2e1065",
      skin: "#fed7aa", hair: "#312e81", hairStyle: "wavy", glasses: true, prop: "spark"
    })
  },
  {
    id: "commander",
    category: "Analysts",
    categoryDesc: "Rational, strategic, and intellectually curious thinkers who love solving complex problems.",
    fitEnergy: "E",
    fitVariant: "structured",
    roleTag: "Decisive Leader",
    name: "Commander",
    tagline: "Bold, imaginative, and strong-willed leaders who always find or make a way.",
    features: ["Natural Leader", "Goal-Driven", "Decisive Action", "Big-Picture Strategy"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(37, 99, 235, 0.12)", coat: "#1e3a8a", accent: "#facc15", pants: "#172554",
      skin: "#fde68a", hair: "#0f172a", hairStyle: "parted", glasses: false, prop: "wand"
    })
  },
  {
    id: "debater",
    category: "Analysts",
    categoryDesc: "Rational, strategic, and intellectually curious thinkers who love solving complex problems.",
    fitEnergy: "E",
    fitVariant: "open",
    roleTag: "Agile Challenger",
    name: "Debater",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge or brainstorm.",
    features: ["Quick Thinker", "Brainstormer", "Fearless Ideas", "Charismatic Wit"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(139, 92, 246, 0.12)", coat: "#5b21b6", accent: "#fbbf24", pants: "#3b0764",
      skin: "#fed7aa", hair: "#4c1d95", hairStyle: "spiky", glasses: false, prop: "star"
    })
  },

  // ---------------- 2. DIPLOMATS ----------------
  {
    id: "advocate",
    category: "Diplomats",
    categoryDesc: "Empathetic, idealistic, and purpose-driven individuals focused on human potential and harmony.",
    fitEnergy: "I",
    fitVariant: "structured",
    roleTag: "Insightful Guide",
    name: "Advocate",
    tagline: "Quiet and mystical, yet very inspiring and tireless idealists who care deeply.",
    features: ["Deep Empathy", "Purpose-Driven", "Insightful Listener", "Strong Values"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(16, 185, 129, 0.13)", coat: "#065f46", accent: "#6ee7b7", pants: "#064e3b",
      skin: "#fde68a", hair: "#064e3b", hairStyle: "wavy", glasses: false, prop: "heart"
    })
  },
  {
    id: "mediator",
    category: "Diplomats",
    categoryDesc: "Empathetic, idealistic, and purpose-driven individuals focused on human potential and harmony.",
    fitEnergy: "I",
    fitVariant: "open",
    roleTag: "Creative Idealist",
    name: "Mediator",
    tagline: "Poetic, kind, and altruistic souls, always eager to help a meaningful cause.",
    features: ["Creative Soul", "Kindhearted", "Open-Minded", "Inner Harmony"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(52, 211, 153, 0.14)", coat: "#059669", accent: "#fde047", pants: "#065f46",
      skin: "#fed7aa", hair: "#14532d", hairStyle: "parted", glasses: false, prop: "star"
    })
  },
  {
    id: "protagonist",
    category: "Diplomats",
    categoryDesc: "Empathetic, idealistic, and purpose-driven individuals focused on human potential and harmony.",
    fitEnergy: "E",
    fitVariant: "structured",
    roleTag: "Inspiring Mentor",
    name: "Protagonist",
    tagline: "Charismatic and inspiring communicators, able to uplift and unite everyone around them.",
    features: ["Warm Mentor", "Team Unifier", "Encouraging", "Expressive Vision"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(16, 185, 129, 0.14)", coat: "#10b981", accent: "#fef08a", pants: "#047857",
      skin: "#fde68a", hair: "#3f2e21", hairStyle: "short", glasses: false, prop: "wand"
    })
  },
  {
    id: "campaigner",
    category: "Diplomats",
    categoryDesc: "Empathetic, idealistic, and purpose-driven individuals focused on human potential and harmony.",
    fitEnergy: "E",
    fitVariant: "open",
    roleTag: "Free Spirit",
    name: "Campaigner",
    tagline: "Enthusiastic, creative, and sociable free spirits who always find a reason to smile.",
    features: ["Infectious Joy", "Creative Spark", "People Connector", "Optimistic"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(20, 184, 166, 0.14)", coat: "#0d9488", accent: "#fb923c", pants: "#115e59",
      skin: "#fed7aa", hair: "#134e4a", hairStyle: "spiky", glasses: false, prop: "orb"
    })
  },

  // ---------------- 3. SENTINELS ----------------
  {
    id: "logistician",
    category: "Sentinels",
    categoryDesc: "Practical, observant, and dependable pillars known for order, stability, and dedication.",
    fitEnergy: "I",
    fitVariant: "structured",
    roleTag: "Reliable Organizer",
    name: "Logistician",
    tagline: "Practical and fact-minded individuals whose reliability cannot be doubted.",
    features: ["Rock-Solid Trust", "Methodical", "High Integrity", "Clear Structure"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(14, 165, 233, 0.14)", coat: "#0369a1", accent: "#7dd3fc", pants: "#0c4a6e",
      skin: "#fde68a", hair: "#0f172a", hairStyle: "short", glasses: true, prop: "clipboard"
    })
  },
  {
    id: "defender",
    category: "Sentinels",
    categoryDesc: "Practical, observant, and dependable pillars known for order, stability, and dedication.",
    fitEnergy: "I",
    fitVariant: "open",
    roleTag: "Caring Protector",
    name: "Defender",
    tagline: "Very dedicated and warm protectors, always ready to support the people they care for.",
    features: ["Supportive Care", "Patient Effort", "Detail-Focused", "Loyal Heart"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(56, 189, 248, 0.14)", coat: "#0284c7", accent: "#bae6fd", pants: "#075985",
      skin: "#fed7aa", hair: "#1e293b", hairStyle: "wavy", glasses: false, prop: "shield"
    })
  },
  {
    id: "executive",
    category: "Sentinels",
    categoryDesc: "Practical, observant, and dependable pillars known for order, stability, and dedication.",
    fitEnergy: "E",
    fitVariant: "structured",
    roleTag: "System Coordinator",
    name: "Executive",
    tagline: "Excellent administrators, unsurpassed at managing projects, workflows, and teams.",
    features: ["Strong Organizer", "Clear Direction", "Structured Execution", "Dependable Lead"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(2, 132, 199, 0.14)", coat: "#1d4ed8", accent: "#38bdf8", pants: "#1e3a8a",
      skin: "#fde68a", hair: "#1e293b", hairStyle: "parted", glasses: true, prop: "clipboard"
    })
  },
  {
    id: "consul",
    category: "Sentinels",
    categoryDesc: "Practical, observant, and dependable pillars known for order, stability, and dedication.",
    fitEnergy: "E",
    fitVariant: "open",
    roleTag: "Community Host",
    name: "Consul",
    tagline: "Extraordinarily caring, social, and welcoming people who love helping communities thrive.",
    features: ["Community Spirit", "Warm Hospitality", "Team Harmony", "Helpful Action"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(14, 165, 233, 0.14)", coat: "#0ea5e9", accent: "#fda4af", pants: "#0369a1",
      skin: "#fed7aa", hair: "#0f172a", hairStyle: "short", glasses: false, prop: "heart"
    })
  },

  // ---------------- 4. EXPLORERS ----------------
  {
    id: "virtuoso",
    category: "Explorers",
    categoryDesc: "Spontaneous, adaptable, and hands-on creators who thrive on freedom and real-world action.",
    fitEnergy: "I",
    fitVariant: "structured",
    roleTag: "Master Crafter",
    name: "Virtuoso",
    tagline: "Bold and practical experimenters, masters of tools, craft, and hands-on troubleshooting.",
    features: ["Hands-On Builder", "Cool Under Pressure", "Practical Logic", "Adaptable"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(245, 158, 11, 0.15)", coat: "#b45309", accent: "#fcd34d", pants: "#78350f",
      skin: "#fde68a", hair: "#451a03", hairStyle: "short", glasses: true, prop: "compass"
    })
  },
  {
    id: "adventurer",
    category: "Explorers",
    categoryDesc: "Spontaneous, adaptable, and hands-on creators who thrive on freedom and real-world action.",
    fitEnergy: "I",
    fitVariant: "open",
    roleTag: "Artistic Explorer",
    name: "Adventurer",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    features: ["Aesthetic Eye", "Gentle Freedom", "Creative Discovery", "Present-Focused"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(217, 119, 6, 0.15)", coat: "#d97706", accent: "#fef08a", pants: "#78350f",
      skin: "#fed7aa", hair: "#451a03", hairStyle: "wavy", glasses: false, prop: "spark"
    })
  },
  {
    id: "entrepreneur",
    category: "Explorers",
    categoryDesc: "Spontaneous, adaptable, and hands-on creators who thrive on freedom and real-world action.",
    fitEnergy: "E",
    fitVariant: "structured",
    roleTag: "Dynamic Doer",
    name: "Entrepreneur",
    tagline: "Smart, energetic, and perceptive people who truly enjoy living on the fast edge of action.",
    features: ["Bold Action", "Fast Problem-Solver", "Resourceful", "High Momentum"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(234, 88, 12, 0.15)", coat: "#ea580c", accent: "#fde047", pants: "#7c2d12",
      skin: "#fde68a", hair: "#292524", hairStyle: "spiky", glasses: false, prop: "compass"
    })
  },
  {
    id: "entertainer",
    category: "Explorers",
    categoryDesc: "Spontaneous, adaptable, and hands-on creators who thrive on freedom and real-world action.",
    fitEnergy: "E",
    fitVariant: "open",
    roleTag: "Joyful Performer",
    name: "Entertainer",
    tagline: "Spontaneous, energetic, and enthusiastic people—life is never boring around them.",
    features: ["Vibrant Energy", "Social Magnet", "Spontaneous Fun", "Uplifting Presence"],
    svg: createFullBodyCharacterSVG({
      aura: "rgba(245, 158, 11, 0.15)", coat: "#f59e0b", accent: "#f472b6", pants: "#92400e",
      skin: "#fed7aa", hair: "#78350f", hairStyle: "parted", glasses: false, prop: "star"
    })
  }
];