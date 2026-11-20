// ========================================================
// TYPES DATA – 16 core personality types & 32 A/T variants
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

const identityVariants = {
  A: {
    code: "A",
    name: "Assertive",
    description: "Self-assured, even-tempered, and steady under pressure."
  },
  T: {
    code: "T",
    name: "Turbulent",
    description: "Self-aware, detail-sensitive, and strongly driven to keep improving."
  }
};

// All 16 core Healer archetypes mapped to their 4-letter codes
const personalityTypesData = [
  // ---------------- 1. ANALYSTS ----------------
  {
    id: "architect", code: "INTJ", category: "Analysts",
    roleTag: "Strategic Planner", name: "Architect",
    tagline: "Imaginative and strategic thinkers with a long-term plan for everything.",
    short: "Strategic minds with a plan for everything.",
    features: ["Systems Thinking", "Deep Focus", "Future Vision", "Independent"]
  },
  {
    id: "logician", code: "INTP", category: "Analysts",
    roleTag: "Innovative Theorist", name: "Logician",
    tagline: "Inventive problem-solvers with an unquenchable thirst for knowledge and logic.",
    short: "Curious inventors of bold new ideas.",
    features: ["Analytical Depth", "Curious Mind", "Pattern Finder", "Original Ideas"]
  },
  {
    id: "commander", code: "ENTJ", category: "Analysts",
    roleTag: "Decisive Leader", name: "Commander",
    tagline: "Bold, imaginative, and strong-willed leaders who always find or make a way.",
    short: "Bold leaders who make their own way.",
    features: ["Natural Leader", "Goal-Driven", "Decisive Action", "Big-Picture Strategy"]
  },
  {
    id: "debater", code: "ENTP", category: "Analysts",
    roleTag: "Agile Challenger", name: "Debater",
    tagline: "Smart and curious thinkers who cannot resist an intellectual challenge or brainstorm.",
    short: "Quick thinkers who love a challenge.",
    features: ["Quick Thinker", "Brainstormer", "Fearless Ideas", "Charismatic Wit"]
  },

  // ---------------- 2. DIPLOMATS ----------------
  {
    id: "advocate", code: "INFJ", category: "Diplomats",
    roleTag: "Insightful Guide", name: "Advocate",
    tagline: "Quiet and mystical, yet very inspiring and tireless idealists who care deeply.",
    short: "Quiet idealists who care deeply.",
    features: ["Deep Empathy", "Purpose-Driven", "Insightful Listener", "Strong Values"]
  },
  {
    id: "mediator", code: "INFP", category: "Diplomats",
    roleTag: "Creative Idealist", name: "Mediator",
    tagline: "Poetic, kind, and altruistic souls, always eager to help a meaningful cause.",
    short: "Gentle dreamers with a kind heart.",
    features: ["Creative Soul", "Kindhearted", "Open-Minded", "Inner Harmony"]
  },
  {
    id: "protagonist", code: "ENFJ", category: "Diplomats",
    roleTag: "Inspiring Mentor", name: "Protagonist",
    tagline: "Charismatic and inspiring communicators, able to uplift and unite everyone around them.",
    short: "Inspiring voices who unite people.",
    features: ["Warm Mentor", "Team Unifier", "Encouraging", "Expressive Vision"]
  },
  {
    id: "campaigner", code: "ENFP", category: "Diplomats",
    roleTag: "Free Spirit", name: "Campaigner",
    tagline: "Enthusiastic, creative, and sociable free spirits who always find a reason to smile.",
    short: "Joyful free spirits full of ideas.",
    features: ["Infectious Joy", "Creative Spark", "People Connector", "Optimistic"]
  },

  // ---------------- 3. SENTINELS ----------------
  {
    id: "logistician", code: "ISTJ", category: "Sentinels",
    roleTag: "Reliable Organizer", name: "Logistician",
    tagline: "Practical and fact-minded individuals whose reliability cannot be doubted.",
    short: "Reliable organizers you can trust.",
    features: ["Rock-Solid Trust", "Methodical", "High Integrity", "Clear Structure"]
  },
  {
    id: "defender", code: "ISFJ", category: "Sentinels",
    roleTag: "Caring Protector", name: "Defender",
    tagline: "Very dedicated and warm protectors, always ready to support the people they care for.",
    short: "Warm protectors who always show up.",
    features: ["Supportive Care", "Patient Effort", "Detail-Focused", "Loyal Heart"]
  },
  {
    id: "executive", code: "ESTJ", category: "Sentinels",
    roleTag: "System Coordinator", name: "Executive",
    tagline: "Excellent administrators, unsurpassed at managing projects, workflows, and teams.",
    short: "Natural managers of people and plans.",
    features: ["Strong Organizer", "Clear Direction", "Structured Execution", "Dependable Lead"]
  },
  {
    id: "consul", code: "ESFJ", category: "Sentinels",
    roleTag: "Community Host", name: "Consul",
    tagline: "Extraordinarily caring, social, and welcoming people who love helping communities thrive.",
    short: "Welcoming hosts who build community.",
    features: ["Community Spirit", "Warm Hospitality", "Team Harmony", "Helpful Action"]
  },

  // ---------------- 4. EXPLORERS ----------------
  {
    id: "virtuoso", code: "ISTP", category: "Explorers",
    roleTag: "Master Crafter", name: "Virtuoso",
    tagline: "Bold and practical experimenters, masters of tools, craft, and hands-on troubleshooting.",
    short: "Hands-on makers who master any tool.",
    features: ["Hands-On Builder", "Cool Under Pressure", "Practical Logic", "Adaptable"]
  },
  {
    id: "adventurer", code: "ISFP", category: "Explorers",
    roleTag: "Artistic Explorer", name: "Adventurer",
    tagline: "Flexible and charming artists, always ready to explore and experience something new.",
    short: "Free artists who chase new experiences.",
    features: ["Aesthetic Eye", "Gentle Freedom", "Creative Discovery", "Present-Focused"]
  },
  {
    id: "entrepreneur", code: "ESTP", category: "Explorers",
    roleTag: "Dynamic Doer", name: "Entrepreneur",
    tagline: "Smart, energetic, and perceptive people who truly enjoy living on the fast edge of action.",
    short: "Energetic doers who thrive on action.",
    features: ["Bold Action", "Fast Problem-Solver", "Resourceful", "High Momentum"]
  },
  {
    id: "entertainer", code: "ESFP", category: "Explorers",
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
  const safeAccent = accent || "#7C63F6";
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">` +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${safeAccent}" stop-opacity=".9"/>` +
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

// Add family description + character image to every core type
personalityTypesData.forEach(t => {
  t.categoryDesc = categoryDescriptions[t.category];
  t.img = CHAR_IMG_FOLDER + t.id + CHAR_IMG_TRY[0];
  t.imgHTML =
    `<i class="spark s1"></i><i class="spark s2"></i><i class="spark s3"></i>` +
    `<img class="char-img" src="${t.img}" alt="${t.name} character" ` +
    `width="600" height="800" decoding="async" ` +
    `data-id="${t.id}" data-name="${t.name}" data-accent="${t.accent || "#7C63F6"}" data-try="0" ` +
    `loading="lazy" draggable="false" onerror="charImgFallback(this)">`;
});

// Build all 32 supported personality variants (16 core types × Assertive/Turbulent)
const personalityVariantsData = {};
personalityTypesData.forEach(baseType => {
  ["A", "T"].forEach(variantCode => {
    const fullCode = `${baseType.code}-${variantCode}`;
    const identity = identityVariants[variantCode];
    personalityVariantsData[fullCode] = {
      ...baseType,
      coreCode: baseType.code,
      code: fullCode,
      displayTitle: `${fullCode} – ${baseType.name}`,
      identity
    };
  });
});

// ========================================================
// STRENGTHS & WEAKNESSES – all 16 personality types
// ========================================================
const personalityStrengthsWeaknesses = {
  // ---------------- 1. ANALYSTS ----------------
  architect: {
    strengths: [
      { title: "Long-Term Vision", desc: "You see how small steps today connect to big goals in the future." },
      { title: "Independent Thinker", desc: "You trust facts and logic instead of blindly following the crowd." },
      { title: "High Determination", desc: "Once you set a goal, you stay focused until you finish it." },
      { title: "Calm Problem-Solver", desc: "You break complex problems into clear, smart plans." }
    ],
    weaknesses: [
      { title: "Overly Critical", desc: "You can be too harsh when others do not meet your high standards." },
      { title: "Dismissive of Emotions", desc: "Focusing only on logic can sometimes make you overlook feelings." },
      { title: "Struggles with Routine", desc: "Repeating simple rules without a clear reason quickly frustrates you." },
      { title: "Hard to Open Up", desc: "Sharing personal emotions with others does not always feel natural." }
    ]
  },
  logician: {
    strengths: [
      { title: "Creative Problem-Solver", desc: "You spot fresh ideas and hidden connections that others miss." },
      { title: "Open-Minded", desc: "You welcome new facts and are willing to change your view when proven right." },
      { title: "Deep Curiosity", desc: "You love learning how systems, concepts, and ideas really work." },
      { title: "Objective & Fair", desc: "You make decisions based on truth rather than personal bias." }
    ],
    weaknesses: [
      { title: "Overthinking", desc: "Thinking through every angle can delay taking real action." },
      { title: "Unfinished Projects", desc: "You sometimes lose interest once the exciting puzzle part is solved." },
      { title: "Private & Distant", desc: "Getting lost in your thoughts can make you seem hard to reach." },
      { title: "Dislikes Strict Rules", desc: "Tight schedules and daily details can feel draining to maintain." }
    ]
  },
  commander: {
    strengths: [
      { title: "Natural Leadership", desc: "You organize people and turn big visions into clear action." },
      { title: "Strong Confidence", desc: "You trust your skills and speak up clearly in tough moments." },
      { title: "Highly Efficient", desc: "You spot wasted time quickly and find faster, better ways to work." },
      { title: "Goal-Focused", desc: "Obstacles push you to work smarter rather than give up." }
    ],
    weaknesses: [
      { title: "Impatient", desc: "Slow progress or people who hesitate can quickly test your patience." },
      { title: "Blunt Communication", desc: "Direct honesty can sometimes feel too sharp to sensitive people." },
      { title: "Stubborn Streak", desc: "You may hold tightly to your own way when you think it is best." },
      { title: "Hard to Relax", desc: "Constant drive can make it difficult to slow down and rest." }
    ]
  },
  debater: {
    strengths: [
      { title: "Quick Thinker", desc: "Your mind connects ideas fast, making you great at brainstorming." },
      { title: "Charismatic Energy", desc: "Your wit and humor make conversations lively and engaging." },
      { title: "Fearless Explorer", desc: "You are not afraid to question old habits and test bold ideas." },
      { title: "Highly Adaptable", desc: "Unexpected changes rarely slow you down." }
    ],
    weaknesses: [
      { title: "Loves Arguing Too Much", desc: "Debating for fun can sometimes feel exhausting to others." },
      { title: "Easily Distracted", desc: "Chasing the next exciting idea makes finishing boring tasks harder." },
      { title: "Insensitive Moments", desc: "Teasing or sharp jokes can accidentally hurt someone's feelings." },
      { title: "Dislikes Routine", desc: "Following the same schedule every day quickly drains your spark." }
    ]
  },

  // ---------------- 2. DIPLOMATS ----------------
  advocate: {
    strengths: [
      { title: "Deep Empathy", desc: "You genuinely understand what people feel even before they speak." },
      { title: "Purpose-Driven", desc: "You care deeply about making a real, positive difference." },
      { title: "Insightful Vision", desc: "You read between the lines and sense what truly matters." },
      { title: "Quiet Determination", desc: "Your gentle nature hides strong willpower for causes you love." }
    ],
    weaknesses: [
      { title: "Sensitive to Criticism", desc: "Harsh feedback can hit close to home and stay with you." },
      { title: "Prone to Burnout", desc: "Carrying everyone else's problems can quietly drain your energy." },
      { title: "Very Private", desc: "You listen to everyone, yet rarely let others see your own struggles." },
      { title: "Perfectionism", desc: "High ideals can make you feel dissatisfied even when you do well." }
    ]
  },
  mediator: {
    strengths: [
      { title: "Genuine Kindness", desc: "You treat people with warmth, patience, and deep respect." },
      { title: "Rich Creativity", desc: "You express feelings and ideas in imaginative, unique ways." },
      { title: "True to Yourself", desc: "Your strong inner values keep you honest and authentic." },
      { title: "Open-Hearted", desc: "You accept people as they are without rushing to judge." }
    ],
    weaknesses: [
      { title: "Too Self-Critical", desc: "You can be much harder on yourself than you ever are on others." },
      { title: "Avoids Conflict", desc: "Keeping the peace can stop you from speaking up for your own needs." },
      { title: "Daydreaming Over Doing", desc: "Big dreams can sometimes be hard to turn into daily habits." },
      { title: "Takes Things Personally", desc: "Small misunderstandings can weigh heavily on your mood." }
    ]
  },
  protagonist: {
    strengths: [
      { title: "Inspiring Communicator", desc: "Your words naturally lift people up and bring teams together." },
      { title: "Warm & Supportive", desc: "You spot the best in others and help them grow." },
      { title: "Reliable Leader", desc: "People trust you to guide groups with heart and clarity." },
      { title: "Socially Aware", desc: "You quickly read the mood of a room and make everyone feel welcome." }
    ],
    weaknesses: [
      { title: "People-Pleasing", desc: "Trying to keep everyone happy can leave your own needs last." },
      { title: "Overly Idealistic", desc: "Expecting the best from everyone can sometimes lead to disappointment." },
      { title: "Takes On Too Much", desc: "Saying yes to every request can stretch your energy too thin." },
      { title: "Tough Self-Doubt", desc: "When someone is upset, you may blame yourself too quickly." }
    ]
  },
  campaigner: {
    strengths: [
      { title: "Infectious Enthusiasm", desc: "Your positive energy sparks excitement in the people around you." },
      { title: "Creative & Curious", desc: "You are always full of fresh ideas and exciting possibilities." },
      { title: "Natural Connector", desc: "You make friends easily and bring different people together." },
      { title: "Warm Empathy", desc: "You genuinely care about people's stories and feelings." }
    ],
    weaknesses: [
      { title: "Loses Focus Easily", desc: "New ideas can pull you away before older tasks are finished." },
      { title: "Overthinks Reactions", desc: "You can worry too much about whether people are happy with you." },
      { title: "Dislikes Boring Details", desc: "Paperwork and strict routines quickly drain your motivation." },
      { title: "Gets Overwhelmed", desc: "Saying yes to too many fun plans can leave you feeling stressed." }
    ]
  },

  // ---------------- 3. SENTINELS ----------------
  logistician: {
    strengths: [
      { title: "Rock-Solid Reliability", desc: "When you make a promise, people know they can count on you." },
      { title: "Calm & Practical", desc: "You handle pressure steadily by focusing on clear facts." },
      { title: "Strong Organization", desc: "You build order, clear steps, and dependable systems." },
      { title: "Honest & Direct", desc: "You value integrity and say exactly what you mean." }
    ],
    weaknesses: [
      { title: "Resistant to Change", desc: "Sudden shifts away from proven methods can feel uncomfortable." },
      { title: "Sticks Too Strictly to Rules", desc: "Following the book can sometimes make you less flexible." },
      { title: "Blames Self Easily", desc: "You feel personally responsible whenever plans go off track." },
      { title: "Can Seem Too Serious", desc: "Focusing heavily on duty can make it hard to loosen up." }
    ]
  },
  defender: {
    strengths: [
      { title: "Deeply Supportive", desc: "You notice what loved ones need and step in without being asked." },
      { title: "Loyal & Dependable", desc: "You stand by the people you care about through thick and thin." },
      { title: "Eye for Details", desc: "You remember small personal touches that make others feel valued." },
      { title: "Patient & Hardworking", desc: "You put steady, quiet effort into doing things the right way." }
    ],
    weaknesses: [
      { title: "Hard to Say No", desc: "Helping everyone else can leave you exhausted and overworked." },
      { title: "Hides Own Feelings", desc: "You often bottle up stress instead of asking others for help." },
      { title: "Uncomfortable with Change", desc: "Breaking familiar traditions or routines can feel stressful." },
      { title: "Undervalues Own Work", desc: "Your humble nature can stop you from claiming the credit you deserve." }
    ]
  },
  executive: {
    strengths: [
      { title: "Strong Organizer", desc: "You turn messy situations into clear schedules and results." },
      { title: "Dependable Leader", desc: "You lead by example and follow through on every commitment." },
      { title: "Direct & Honest", desc: "People always know where they stand with you." },
      { title: "Dedicated Worker", desc: "You take pride in finishing tasks accurately and on time." }
    ],
    weaknesses: [
      { title: "Inflexible at Times", desc: "You can be quick to dismiss untested or unusual approaches." },
      { title: "Too Focused on Results", desc: "Pushing for goals can make you overlook people's emotional pace." },
      { title: "Hard to Relax", desc: "Feeling responsible for everything makes switching off difficult." },
      { title: "Controlling Under Stress", desc: "When things get chaotic, you may try to micromanage the details." }
    ]
  },
  consul: {
    strengths: [
      { title: "Warm Hospitality", desc: "You make everyone feel welcomed, included, and cared for." },
      { title: "Strong Team Player", desc: "You bring harmony and steady cooperation to any group." },
      { title: "Practical Helper", desc: "You show love through real, thoughtful actions every day." },
      { title: "Loyal & Dutiful", desc: "You take your promises to friends and family seriously." }
    ],
    weaknesses: [
      { title: "Needs Approval", desc: "Feeling unappreciated or criticized can hurt your confidence." },
      { title: "Too Selfless", desc: "Putting everyone else first can leave little time for yourself." },
      { title: "Dislikes Conflict", desc: "You may avoid tough talks just to keep things smooth." },
      { title: "Worries About Opinions", desc: "Caring deeply about social harmony can make you overthink what others think." }
    ]
  },

  // ---------------- 4. EXPLORERS ----------------
  virtuoso: {
    strengths: [
      { title: "Hands-On Mastery", desc: "You learn fastest by building, fixing, and testing things yourself." },
      { title: "Cool Under Pressure", desc: "In emergencies, you stay calm and act with clear logic." },
      { title: "Practical Creativity", desc: "You find clever, real-world solutions with whatever tools are nearby." },
      { title: "Flexible & Easygoing", desc: "You adapt quickly without getting stuck on rigid rules." }
    ],
    weaknesses: [
      { title: "Easily Bored", desc: "Once you master something, you quickly crave a new challenge." },
      { title: "Hard to Read", desc: "Keeping emotions private can make others unsure of what you feel." },
      { title: "Dislikes Long Commitments", desc: "Being tied down to strict long-term plans can feel suffocating." },
      { title: "Takes Unplanned Risks", desc: "Living in the moment can sometimes lead to impulsive choices." }
    ]
  },
  adventurer: {
    strengths: [
      { title: "Artistic & Aesthetic Eye", desc: "You naturally notice beauty, color, and style in everyday life." },
      { title: "Gentle & Caring", desc: "You show kindness through quiet warmth rather than loud words." },
      { title: "Lives in the Present", desc: "You fully enjoy real moments instead of stressing over every rule." },
      { title: "Open & Curious", desc: "You love trying fresh experiences and expressing your unique style." }
    ],
    weaknesses: [
      { title: "Avoids Long-Term Planning", desc: "Strict schedules and far-off plans can feel stressful to stick to." },
      { title: "Easily Stressed by Conflict", desc: "Harsh arguments or criticism can quickly overwhelm you." },
      { title: "Unpredictable Moods", desc: "Your motivation rises and falls strongly with how inspired you feel." },
      { title: "Too Independent", desc: "You may pull away rather than explain what is bothering you." }
    ]
  },
  entrepreneur: {
    strengths: [
      { title: "Bold & Action-Ready", desc: "You jump straight into challenges while others are still hesitating." },
      { title: "Sharp Observer", desc: "You catch small details and opportunities in the moment." },
      { title: "High Energy & Social", desc: "Your confidence and fun spirit naturally attract people." },
      { title: "Resourceful Solver", desc: "You think on your feet and find fast, practical fixes." }
    ],
    weaknesses: [
      { title: "Impatient with Theory", desc: "Long talks and slow planning quickly make you restless." },
      { title: "Impulsive Decisions", desc: "Acting fast can sometimes mean missing long-term consequences." },
      { title: "Misses Bigger Picture", desc: "Focusing on today's win can hide tomorrow's bigger goal." },
      { title: "Blunt Under Pressure", desc: "Fast, direct feedback can occasionally catch people off guard." }
    ]
  },
  entertainer: {
    strengths: [
      { title: "Vibrant Presence", desc: "You light up the room and make ordinary moments feel fun." },
      { title: "Warm & Approachable", desc: "People feel instantly comfortable and energized around you." },
      { title: "Spontaneous & Bold", desc: "You are always ready to try new adventures and enjoy life." },
      { title: "Strong People Skills", desc: "You quickly sense how others feel and know how to cheer them up." }
    ],
    weaknesses: [
      { title: "Easily Bored by Routine", desc: "Quiet, repetitive tasks quickly drain your focus." },
      { title: "Avoids Difficult Talks", desc: "You prefer keeping things light instead of facing serious conflict." },
      { title: "Weak Long-Term Planning", desc: "Living for today can make saving or planning ahead harder." },
      { title: "Sensitive to Rejection", desc: "Even though you seem carefree, harsh judgment can sting deeply." }
    ]
  }
};

// Attach strengths & weaknesses to all 16 core types and all 32 variants
personalityTypesData.forEach(t => {
  const sw = personalityStrengthsWeaknesses[t.id] || { strengths: [], weaknesses: [] };
  t.strengths = sw.strengths;
  t.weaknesses = sw.weaknesses;
});

if (typeof personalityVariantsData !== "undefined") {
  Object.values(personalityVariantsData).forEach(variant => {
    const sw = personalityStrengthsWeaknesses[variant.id] || { strengths: [], weaknesses: [] };
    variant.strengths = sw.strengths;
    variant.weaknesses = sw.weaknesses;
  });
}