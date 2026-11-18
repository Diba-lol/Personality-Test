// ========================================================
// TYPES PAGE – 16 character images, 4 per family, no cards
// Needs: types-data.js loaded first
// ========================================================

const FAMILIES = ["Analysts", "Diplomats", "Sentinels", "Explorers"];

function renderPersonalityTypesDirectory(filterCategory = "ALL") {
  const container = document.getElementById("typesDirectoryContainer");
  if (!container) return;

  container.innerHTML = FAMILIES.map((catName, idx) => {
    if (filterCategory !== "ALL" && filterCategory !== catName) return "";

    const items = personalityTypesData.filter(t => t.category === catName);

    return `
      <section class="category-banner-section">
        <div class="category-header" data-word="${catName}">
          <span class="category-eyebrow"><b>0${idx + 1}</b> Family · ${items.length} types</span>
          <h2 class="category-big-title">${catName}</h2>
          <p class="category-subtitle">${items[0].categoryDesc}</p>
        </div>

        <div class="char-row">
          ${items.map((item, i) => `
            <article class="char-float" style="--acc:${item.accent}; --i:${i}">
              <div class="fullbody-character-stage">${item.imgHTML}</div>
              <span class="char-role">${item.roleTag}</span>
              <h3 class="char-name">${item.name}</h3>
              <p class="char-desc">${item.short}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

// Called by the filter buttons (onclick="filterTypes(...)")
window.filterTypes = function (categoryValue, btnEl) {
  document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  renderPersonalityTypesDirectory(categoryValue);
};

// ---------- smooth 3D tilt that follows the mouse (desktop only) ----------
(function enableTilt() {
  const container = document.getElementById("typesDirectoryContainer");
  if (!container) return;

  container.addEventListener("pointermove", e => {
    if (e.pointerType !== "mouse") return;
    const card = e.target.closest(".char-float");
    if (!card) return;
    const stage = card.querySelector(".fullbody-character-stage");
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;    // -0.5 … 0.5
    const y = (e.clientY - r.top) / r.height - 0.5;
    stage.style.setProperty("--ry", (x * 16).toFixed(2) + "deg");
    stage.style.setProperty("--rx", (-y * 10).toFixed(2) + "deg");
  });

  container.addEventListener("pointerout", e => {
    const card = e.target.closest(".char-float");
    if (!card || card.contains(e.relatedTarget)) return;
    const stage = card.querySelector(".fullbody-character-stage");
    stage.style.setProperty("--ry", "0deg");
    stage.style.setProperty("--rx", "0deg");
  });
})();

renderPersonalityTypesDirectory("ALL");