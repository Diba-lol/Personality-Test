// ========================================================
// TYPES PAGE – 16 floating characters, 4 per chain
// Needs: characters.js, types-data.js loaded first
// ========================================================

function renderPersonalityTypesDirectory(filterCategory = "ALL") {
  const container = document.getElementById("typesDirectoryContainer");
  if (!container) return;

  const categories = ["Analysts", "Diplomats", "Sentinels", "Explorers"];

  container.innerHTML = categories.map(catName => {
    if (filterCategory !== "ALL" && filterCategory !== catName) return "";

    const items = personalityTypesData.filter(t => t.category === catName);

    return `
      <section class="category-banner-section">
        <div class="category-header">
          <h2 class="category-big-title">${catName}</h2>
          <p class="category-subtitle">${items[0].categoryDesc}</p>
        </div>

        <div class="char-chain-row">
          ${items.map(item => `
            <article class="char-float">
              <div class="fullbody-character-stage">${item.svg}</div>
              <span class="char-role">${item.roleTag}</span>
              <h3 class="char-name">${item.name}</h3>
              <p class="char-desc">${item.tagline}</p>
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

renderPersonalityTypesDirectory("ALL");