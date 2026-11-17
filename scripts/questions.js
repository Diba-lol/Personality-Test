// ========================================================
// QUESTIONS – the 20 statements and the 7-point answer scale
// ========================================================

const questions = [
  // Energy axis (Introvert vs Extrovert)
  { id: 0, text: "You feel energized and excited after attending lively social gatherings or group events.", axis: "energy", polarity: "E" },
  { id: 1, text: "After a busy day around people, you need quiet alone time to recharge your mental battery.", axis: "energy", polarity: "I" },
  { id: 2, text: "You enjoy initiating conversations with new people at events, classes, or cafes.", axis: "energy", polarity: "E" },
  { id: 3, text: "You prefer deep one-on-one conversations over chatting in a large noisy crowd.", axis: "energy", polarity: "I" },
  { id: 4, text: "Thinking out loud and brainstorming with a group helps you generate ideas faster.", axis: "energy", polarity: "E" },
  { id: 5, text: "You prefer to fully think through your ideas privately before sharing them with others.", axis: "energy", polarity: "I" },
  { id: 6, text: "You quickly feel restless if you spend an entire weekend alone without social plans.", axis: "energy", polarity: "E" },
  { id: 7, text: "Working independently in a calm, distraction-free space brings out your best focus.", axis: "energy", polarity: "I" },
  { id: 8, text: "You naturally step up to speak, lead, or present in front of a group.", axis: "energy", polarity: "E" },
  { id: 9, text: "You prefer expressing your thoughts through writing or creative work rather than speaking.", axis: "energy", polarity: "I" },

  // Style axis (Analysts / Diplomats / Sentinels / Explorers)
  { id: 10, text: "When making decisions, objective logic and facts matter more to you than emotions.", axis: "style", group: "Analysts", variant: "structured" },
  { id: 11, text: "You instinctively sense when someone in the room is feeling stressed or left out.", axis: "style", group: "Diplomats", variant: "structured" },
  { id: 12, text: "You love having a clear schedule, organized routines, and dependable structure.", axis: "style", group: "Sentinels", variant: "structured" },
  { id: 13, text: "You love spontaneous adventures and adapting on the fly rather than rigid plans.", axis: "style", group: "Explorers", variant: "open" },
  { id: 14, text: "You enjoy questioning assumptions and exploring unconventional theories.", axis: "style", group: "Analysts", variant: "open" },
  { id: 15, text: "Maintaining harmony, kindness, and creative self-expression is your highest priority.", axis: "style", group: "Diplomats", variant: "open" },
  { id: 16, text: "People can always count on you to support and protect the people you care about.", axis: "style", group: "Sentinels", variant: "open" },
  { id: 17, text: "You get excited by hands-on troubleshooting and building practical things.", axis: "style", group: "Explorers", variant: "structured" },
  { id: 18, text: "You stay calm and objective during high-pressure situations by focusing on solutions.", axis: "style", group: "Analysts", variant: "structured" },
  { id: 19, text: "Your personal authenticity and inner values guide every major choice you make.", axis: "style", group: "Diplomats", variant: "open" }
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