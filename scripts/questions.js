// ========================================================
// QUESTIONS – 60 statements (5 sections × 12) & 7-point scale
// Dimensions:
//   1. Energy:   Introverted (I - left) / Extraverted (E - right)
//   2. Mind:     Intuitive (N - left)   / Observant (S - right)
//   3. Nature:   Thinking (T - left)    / Feeling (F - right)
//   4. Tactics:  Judging (J - left)     / Prospecting (P - right)
//   5. Identity: Assertive (A - left)   / Turbulent (T - right)
// ========================================================

const personalityDimensions = [
  {
    key: "energy",
    label: "Energy",
    left: { code: "I", name: "Introverted" },
    right: { code: "E", name: "Extraverted" }
  },
  {
    key: "mind",
    label: "Mind",
    left: { code: "N", name: "Intuitive" },
    right: { code: "S", name: "Observant" }
  },
  {
    key: "nature",
    label: "Nature",
    left: { code: "T", name: "Thinking" },
    right: { code: "F", name: "Feeling" }
  },
  {
    key: "tactics",
    label: "Tactics",
    left: { code: "J", name: "Judging" },
    right: { code: "P", name: "Prospecting" }
  },
  {
    key: "identity",
    label: "Identity",
    left: { code: "A", name: "Assertive" },
    right: { code: "T", name: "Turbulent" }
  }
];

const questions = [
  // ========================================================
  // Section 1 – Energy (Introverted [left] / Extraverted [right])
  // ========================================================
  { id: 0, dimension: "energy", trait: "E", side: "right", weight: 1.0, text: "You feel more energised after spending time with a group of people." },
  { id: 1, dimension: "energy", trait: "I", side: "left", weight: 1.0, text: "After a busy social event, you usually need some time alone to recharge." },
  { id: 2, dimension: "energy", trait: "E", side: "right", weight: 1.0, text: "Given the choice, you would rather spend your free time with friends than by yourself." },
  { id: 3, dimension: "energy", trait: "I", side: "left", weight: 1.0, text: "You prefer observing a conversation before joining in." },
  { id: 4, dimension: "energy", trait: "E", side: "right", weight: 1.0, text: "Starting a conversation with someone you have just met feels natural to you." },
  { id: 5, dimension: "energy", trait: "I", side: "left", weight: 1.0, text: "You often prefer expressing your thoughts privately rather than discussing them immediately." },
  { id: 6, dimension: "energy", trait: "E", side: "right", weight: 1.0, text: "Being around people for long periods usually leaves you feeling energised." },
  { id: 7, dimension: "energy", trait: "I", side: "left", weight: 1.0, text: "You find it easier to concentrate when you are working independently." },
  { id: 8, dimension: "energy", trait: "E", side: "right", weight: 1.0, text: "When something exciting happens, your first instinct is to share it with someone." },
  { id: 9, dimension: "energy", trait: "I", side: "left", weight: 1.0, text: "You are comfortable spending an entire day without much social interaction." },
  { id: 10, dimension: "energy", trait: "E", side: "right", weight: 1.0, text: "In group discussions, you naturally find yourself contributing ideas." },
  { id: 11, dimension: "energy", trait: "I", side: "left", weight: 1.0, text: "You prefer having a small number of meaningful conversations over interacting with many people." },

  // ========================================================
  // Section 2 – Mind (Intuitive [left] / Observant [right])
  // ========================================================
  { id: 12, dimension: "mind", trait: "N", side: "left", weight: 1.0, text: "You often imagine different possibilities beyond what is immediately in front of you." },
  { id: 13, dimension: "mind", trait: "S", side: "right", weight: 1.0, text: "When learning something new, you prefer practical examples over abstract explanations." },
  { id: 14, dimension: "mind", trait: "N", side: "left", weight: 1.0, text: "You enjoy exploring ideas even when they have no immediate practical use." },
  { id: 15, dimension: "mind", trait: "S", side: "right", weight: 1.0, text: "You usually pay close attention to specific facts and details." },
  { id: 16, dimension: "mind", trait: "N", side: "left", weight: 1.0, text: "You tend to look for hidden meanings or connections between seemingly unrelated things." },
  { id: 17, dimension: "mind", trait: "S", side: "right", weight: 1.0, text: "You trust information more when it comes from direct experience." },
  { id: 18, dimension: "mind", trait: "N", side: "left", weight: 1.0, text: "Thinking about what the future could look like excites you more than focusing on present routines." },
  { id: 19, dimension: "mind", trait: "S", side: "right", weight: 1.0, text: "You prefer instructions that clearly explain what needs to be done step by step." },
  { id: 20, dimension: "mind", trait: "N", side: "left", weight: 1.0, text: "You often think about the bigger picture before considering individual details." },
  { id: 21, dimension: "mind", trait: "S", side: "right", weight: 1.0, text: "You are more interested in what is real and observable than in theoretical possibilities." },
  { id: 22, dimension: "mind", trait: "N", side: "left", weight: 1.0, text: "You enjoy experimenting with unusual ideas and alternative ways of understanding things." },
  { id: 23, dimension: "mind", trait: "S", side: "right", weight: 1.0, text: "You prefer dealing with familiar methods that have already proved effective." },

  // ========================================================
  // Section 3 – Nature (Thinking [left] / Feeling [right])
  // ========================================================
  { id: 24, dimension: "nature", trait: "T", side: "left", weight: 1.0, text: "When making an important decision, logical consistency matters more to you than personal feelings." },
  { id: 25, dimension: "nature", trait: "F", side: "right", weight: 1.0, text: "You consider how a decision might affect other people's emotions before making it." },
  { id: 26, dimension: "nature", trait: "T", side: "left", weight: 1.0, text: "You prefer giving honest feedback, even when it may be uncomfortable to hear." },
  { id: 27, dimension: "nature", trait: "F", side: "right", weight: 1.0, text: "Maintaining harmony between people is important to you, even when disagreements arise." },
  { id: 28, dimension: "nature", trait: "T", side: "left", weight: 1.0, text: "You believe decisions should be based on objective facts rather than personal preferences." },
  { id: 29, dimension: "nature", trait: "F", side: "right", weight: 1.0, text: "You find it difficult to ignore someone's feelings when discussing a problem." },
  { id: 30, dimension: "nature", trait: "T", side: "left", weight: 1.0, text: "When resolving a disagreement, you focus more on finding the most logical solution." },
  { id: 31, dimension: "nature", trait: "F", side: "right", weight: 1.0, text: "You often adjust the way you communicate to avoid hurting someone's feelings." },
  { id: 32, dimension: "nature", trait: "T", side: "left", weight: 1.0, text: "You respect decisions that follow consistent principles, even when people disagree with them." },
  { id: 33, dimension: "nature", trait: "F", side: "right", weight: 1.0, text: "Personal values play a major role in the choices you make." },
  { id: 34, dimension: "nature", trait: "T", side: "left", weight: 1.0, text: "You can separate your emotions from a situation when evaluating what is fair." },
  { id: 35, dimension: "nature", trait: "F", side: "right", weight: 1.0, text: "Understanding someone's personal circumstances is important before judging their actions." },

  // ========================================================
  // Section 4 – Tactics (Judging [left] / Prospecting [right])
  // ========================================================
  { id: 36, dimension: "tactics", trait: "J", side: "left", weight: 1.0, text: "You prefer having a clear plan before starting an important task." },
  { id: 37, dimension: "tactics", trait: "P", side: "right", weight: 1.0, text: "You enjoy keeping your options open instead of deciding everything in advance." },
  { id: 38, dimension: "tactics", trait: "J", side: "left", weight: 1.0, text: "Completing tasks ahead of deadlines gives you a sense of satisfaction." },
  { id: 39, dimension: "tactics", trait: "P", side: "right", weight: 1.0, text: "You are comfortable changing your plans when something more interesting comes up." },
  { id: 40, dimension: "tactics", trait: "J", side: "left", weight: 1.0, text: "An organised schedule helps you feel in control of your day." },
  { id: 41, dimension: "tactics", trait: "P", side: "right", weight: 1.0, text: "You prefer deciding what to do as the situation develops." },
  { id: 42, dimension: "tactics", trait: "J", side: "left", weight: 1.0, text: "You feel uncomfortable when important tasks remain unfinished." },
  { id: 43, dimension: "tactics", trait: "P", side: "right", weight: 1.0, text: "You enjoy exploring different approaches rather than committing to one method immediately." },
  { id: 44, dimension: "tactics", trait: "J", side: "left", weight: 1.0, text: "You usually make decisions early so that you can move forward without uncertainty." },
  { id: 45, dimension: "tactics", trait: "P", side: "right", weight: 1.0, text: "Unexpected changes to your plans can sometimes feel exciting." },
  { id: 46, dimension: "tactics", trait: "J", side: "left", weight: 1.0, text: "You prefer knowing what to expect before entering a new situation." },
  { id: 47, dimension: "tactics", trait: "P", side: "right", weight: 1.0, text: "You work best when you have the freedom to adapt your approach along the way." },

  // ========================================================
  // Section 5 – Identity (Assertive [left] / Turbulent [right])
  // ========================================================
  { id: 48, dimension: "identity", trait: "A", side: "left", weight: 1.0, text: "You generally remain confident in your decisions, even when others question them." },
  { id: 49, dimension: "identity", trait: "T", side: "right", weight: 1.0, text: "You often replay past mistakes in your mind and wonder what you could have done differently." },
  { id: 50, dimension: "identity", trait: "A", side: "left", weight: 1.0, text: "Criticism rarely affects your confidence for very long." },
  { id: 51, dimension: "identity", trait: "T", side: "right", weight: 1.0, text: "You sometimes worry about whether you are meeting your own expectations." },
  { id: 52, dimension: "identity", trait: "A", side: "left", weight: 1.0, text: "Even when things go wrong, you usually trust yourself to handle the situation." },
  { id: 53, dimension: "identity", trait: "T", side: "right", weight: 1.0, text: "You frequently compare your progress with the progress of others." },
  { id: 54, dimension: "identity", trait: "A", side: "left", weight: 1.0, text: "You can move on from a setback without letting it affect your overall self-confidence." },
  { id: 55, dimension: "identity", trait: "T", side: "right", weight: 1.0, text: "You tend to overthink decisions after making them." },
  { id: 56, dimension: "identity", trait: "A", side: "left", weight: 1.0, text: "You usually feel comfortable with who you are, even when you make mistakes." },
  { id: 57, dimension: "identity", trait: "T", side: "right", weight: 1.0, text: "Small setbacks can sometimes make you question your abilities." },
  { id: 58, dimension: "identity", trait: "A", side: "left", weight: 1.0, text: "You rarely feel the need to prove your worth to other people." },
  { id: 59, dimension: "identity", trait: "T", side: "right", weight: 1.0, text: "You often push yourself because you feel that you could be doing better." }
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