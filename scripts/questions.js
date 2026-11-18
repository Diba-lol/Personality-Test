// ========================================================
// QUESTIONS – the 20 statements and the 7-point answer scale
// ========================================================

const questions = [
  // Energy axis (Introvert vs Extrovert)
  { id: 0, text: "Going to parties and being with groups makes you feel happy and full of energy.", axis: "energy", polarity: "E" },
  { id: 1, text: "After being around people all day, you need quiet time alone to rest your mind.", axis: "energy", polarity: "I" },
  { id: 2, text: "You like to be the first one to say hello and talk to new people.", axis: "energy", polarity: "E" },
  { id: 3, text: "You like talking to just one person more than talking in a big, loud group.", axis: "energy", polarity: "I" },
  { id: 4, text: "Talking with a group of people helps you think of good ideas faster.", axis: "energy", polarity: "E" },
  { id: 5, text: "You like to think quietly by yourself before you tell others your ideas.", axis: "energy", polarity: "I" },
  { id: 6, text: "You get bored quickly if you spend the whole weekend alone without seeing friends.", axis: "energy", polarity: "E" },
  { id: 7, text: "You work best when you are alone in a quiet place.", axis: "energy", polarity: "I" },
  { id: 8, text: "You like being the leader and talking in front of a group of people.", axis: "energy", polarity: "E" },
  { id: 9, text: "You like to write or draw your ideas instead of talking out loud.", axis: "energy", polarity: "I" },

  // Style axis (Analysts / Diplomats / Sentinels / Explorers)
  { id: 10, text: "When you make a choice, facts are more important to you than feelings.", axis: "style", group: "Analysts", variant: "structured" },
  { id: 11, text: "You easily notice when someone else is feeling sad or left out.", axis: "style", group: "Diplomats", variant: "structured" },
  { id: 12, text: "You like having a clear plan and keeping your life very organized.", axis: "style", group: "Sentinels", variant: "structured" },
  { id: 13, text: "You like doing fun things without planning them first.", axis: "style", group: "Explorers", variant: "open" },
  { id: 14, text: "You like to ask questions and learn about new or different things.", axis: "style", group: "Analysts", variant: "open" },
  { id: 15, text: "Being kind and keeping everyone happy is the most important thing to you.", axis: "style", group: "Diplomats", variant: "open" },
  { id: 16, text: "People can always trust you to take care of the ones you love.", axis: "style", group: "Sentinels", variant: "open" },
  { id: 17, text: "You like using your hands to fix problems or build things.", axis: "style", group: "Explorers", variant: "structured" },
  { id: 18, text: "When things get stressful, you stay calm and just look for a way to fix it.", axis: "style", group: "Analysts", variant: "structured" },
  { id: 19, text: "You always follow your heart and do what you believe is right.", axis: "style", group: "Diplomats", variant: "open" }
];

// 7-point scale (+3 to -3)
const scaleOptions = [
  { val: 3, level: "3", type: "chip-agree", hint: "Strongly Agree" },
  { val: 2, level: "2", type: "chip-agree", hint: "Agree" },
  { val: 1, level: "1", type: "chip-agree", hint: "Slightly Agree" },
  { val: 0, level: "0", type: "chip-neutral", hint: "Neutral" },
  { val: -1, level: "1", type: "chip-disagree", hint: "Slightly Disagree" },
  { val: -2, level: "2", type: "chip-disagree", hint: "Disagree" },
  { val: -3, level: "3", type: "chip-disagree", hint: "Strongly Disagree" }
];