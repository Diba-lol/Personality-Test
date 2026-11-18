// ========================================================
// TYPES DATA – all 16 personality types (4 per family)
// Characters are IMAGES:  images/characters/<id>.webp
// ========================================================

const CHAR_IMG_FOLDER = "images/characters/";
const CHAR_IMG_EXT = ".webp";          // change to ".png" if your files are PNG

const categoryDescriptions = {
  Analysts: "Rational, strategic, and intellectually curious thinkers who love solving complex problems.",
  Diplomats: "Empathetic, idealistic, and purpose-driven individuals focused on human potential and harmony.",
  Sentinels: "Practical, observant, and dependable pillars known for order, stability, and dedication.",
  Explorers: "Spontaneous, adaptable, and hands-on creators who thrive on freedom and real-world action."
};

// accent = glow colour behind the character
const personalityTypesData = [
  // ---------------- 1. ANALYSTS ----------------
  {
    id: "architect", category: "Analysts", fitEnergy: "I", fitVariant: "structured",
    roleTag: "Strategic Planner", name: "Architect",
    tagline: "Imaginative and strategic thinkers with a long-term plan for everything.",
    short: "Strategic minds with a plan for everything.",
    features: ["Systems Thinking", "Deep Focus", "Future Vision", "Independent"]
  },
  {
    id: "logician", category: "Analysts", fitEnergy: "I", fitVariant: "open",
    roleTag: "Innovative Theorist", name: "Logician",
    tagline: "Inventive problem-solvers with an unquenchable thirst for knowledge and logic.",
    short: "Curious inventors of bold new ideas.",
    features: ["Analytical Depth", "Curious Mind", "Pattern Finder", "Original Ideas"]
  },
  {
    id: "commander", category: "Analysts", fitEnergy: "E", fitVariant: "structured",
    roleTag: "Decisive Leader", name: "Commander",
    tagline: "Bold, imaginative, and strong-willed leaders who always find or make a way.",
    short: "Bold leaders who make their own way.",
    features: ["Natural Leader", "Goal-Driven", "Decisive Action", "Big-Picture Strategy"]
  },
  {
    id: "debater", category: "Analysts", fitEnergy: "E", fitVariant: "open",
    roleTag: "Agile Challenger", name: "Debater",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge or brainstorm.",
    short: "Quick thinkers who love a challenge.",
    features: ["Quick Thinker", "Brainstormer", "Fearless Ideas", "Charismatic Wit"]
  },

  // ---------------- 2. DIPLOMATS ----------------
  {
    id: "advocate", category: "Diplomats", fitEnergy: "I", fitVariant: "structured",
    roleTag: "Insightful Guide", name: "Advocate",
    tagline: "Quiet and mystical, yet very inspiring and tireless idealists who care deeply.",
    short: "Quiet idealists who care deeply.",
    features: ["Deep Empathy", "Purpose-Driven", "Insightful Listener", "Strong Values"]
  },
  {
    id: "mediator", category: "Diplomats", fitEnergy: "I", fitVariant: "open",
    roleTag: "Creative Idealist", name: "Mediator",
    tagline: "Poetic, kind, and altruistic souls, always eager to help a meaningful cause.",
    short: "Gentle dreamers with a kind heart.",
    features: ["Creative Soul", "Kindhearted", "Open-Minded", "Inner Harmony"]
  },
  {
    id: "protagonist", category: "Diplomats", fitEnergy: "E", fitVariant: "structured",
    roleTag: "Inspiring Mentor", name: "Protagonist",
    tagline: "Charismatic and inspiring communicators, able to uplift and unite everyone around them.",
    short: "Inspiring voices who unite people.",
    features: ["Warm Mentor", "Team Unifier", "Encouraging", "Expressive Vision"]
  },
  {
    id: "campaigner", category: "Diplomats", fitEnergy: "E", fitVariant: "open",
    roleTag: "Free Spirit", name: "Campaigner",
    tagline: "Enthusiastic, creative, and sociable free spirits who always find a reason to smile.",
    short: "Joyful free spirits full of ideas.",
    features: ["Infectious Joy", "Creative Spark", "People Connector", "Optimistic"]
  },

  // ---------------- 3. SENTINELS ----------------
  {
    id: "logistician", category: "Sentinels", fitEnergy: "I", fitVariant: "structured",
    roleTag: "Reliable Organizer", name: "Logistician",
    tagline: "Practical and fact-minded individuals whose reliability cannot be doubted.",
    short: "Reliable organizers you can trust.",
    features: ["Rock-Solid Trust", "Methodical", "High Integrity", "Clear Structure"]
  },
  {
    id: "defender", category: "Sentinels", fitEnergy: "I", fitVariant: "open",
    roleTag: "Caring Protector", name: "Defender",
    tagline: "Very dedicated and warm protectors, always ready to support the people they care for.",
    short: "Warm protectors who always show up.",
    features: ["Supportive Care", "Patient Effort", "Detail-Focused", "Loyal Heart"]
  },
  {
    id: "executive", category: "Sentinels", fitEnergy: "E", fitVariant: "structured",
    roleTag: "System Coordinator", name: "Executive",
    tagline: "Excellent administrators, unsurpassed at managing projects, workflows, and teams.",
    short: "Natural managers of people and plans.",
    features: ["Strong Organizer", "Clear Direction", "Structured Execution", "Dependable Lead"]
  },
  {
    id: "consul", category: "Sentinels", fitEnergy: "E", fitVariant: "open",
    roleTag: "Community Host", name: "Consul",
    tagline: "Extraordinarily caring, social, and welcoming people who love helping communities thrive.",
    short: "Welcoming hosts who build community.",
    features: ["Community Spirit", "Warm Hospitality", "Team Harmony", "Helpful Action"]
  },

  // ---------------- 4. EXPLORERS ----------------
  {
    id: "virtuoso", category: "Explorers", fitEnergy: "I", fitVariant: "structured",
    roleTag: "Master Crafter", name: "Virtuoso",
    tagline: "Bold and practical experimenters, masters of tools, craft, and hands-on troubleshooting.",
    short: "Hands-on makers who master any tool.",
    features: ["Hands-On Builder", "Cool Under Pressure", "Practical Logic", "Adaptable"]
  },
  {
    id: "adventurer", category: "Explorers", fitEnergy: "I", fitVariant: "open",
    roleTag: "Artistic Explorer", name: "Adventurer",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    short: "Free artists who chase new experiences.",
    features: ["Aesthetic Eye", "Gentle Freedom", "Creative Discovery", "Present-Focused"]
  },
  {
    id: "entrepreneur", category: "Explorers", fitEnergy: "E", fitVariant: "structured",
    roleTag: "Dynamic Doer", name: "Entrepreneur",
    tagline: "Smart, energetic, and perceptive people who truly enjoy living on the fast edge of action.",
    short: "Energetic doers who thrive on action.",
    features: ["Bold Action", "Fast Problem-Solver", "Resourceful", "High Momentum"]
  },
  {
    id: "entertainer", category: "Explorers", fitEnergy: "E", fitVariant: "open",
    roleTag: "Joyful Performer", name: "Entertainer",
    tagline: "Spontaneous, energetic, and enthusiastic people—life is never boring around them.",
    short: "Spontaneous stars who light up a room.",
    features: ["Vibrant Energy", "Social Magnet", "Spontaneous Fun", "Uplifting Presence"]
  }
];

// ---------- image loader: tries other extensions, then a placeholder ----------
const CHAR_IMG_TRY = [CHAR_IMG_EXT, ".webp", ".png", ".jpg", ".jpeg"]
  .filter((e, i, a) => a.indexOf(e) === i);

function charPlaceholder(name, accent) {
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${accent}" stop-opacity=".9"/>` +
    `<stop offset="1" stop-color="#7C63F6" stop-opacity=".9"/></linearGradient></defs>` +
    `<circle cx="150" cy="190" r="92" fill="url(#g)"/>` +
    `<text x="150" y="222" text-anchor="middle" font-family="Arial, sans-serif" ` +
    `font-size="96" font-weight="800" fill="#fff">${name.charAt(0)}</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

window.charImgFallback = function (img) {
  const next = (parseInt(img.dataset.try || "0", 10)) + 1;
  if (next < CHAR_IMG_TRY.length) {
    img.dataset.try = next;
    img.src = CHAR_IMG_FOLDER + img.dataset.id + CHAR_IMG_TRY[next];
  } else {
    img.onerror = null;
    img.src = charPlaceholder(img.dataset.name, img.dataset.accent);
    console.warn("Character image missing:", img.dataset.id);
  }
};

// add family description + character image to every type
personalityTypesData.forEach(t => {
  t.categoryDesc = categoryDescriptions[t.category];
  t.img = CHAR_IMG_FOLDER + t.id + CHAR_IMG_TRY[0];
  t.imgHTML =
    `<i class="spark s1"></i><i class="spark s2"></i><i class="spark s3"></i>` +
    `<img class="char-img" src="${t.img}" alt="${t.name} character" ` +
    `data-id="${t.id}" data-name="${t.name}" data-accent="${t.accent}" data-try="0" ` +
    `loading="lazy" draggable="false" onerror="charImgFallback(this)">`;
});