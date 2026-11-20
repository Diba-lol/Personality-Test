const FAMILIES = ["Analysts", "Diplomats", "Sentinels", "Explorers"];

let charObserver;
let scrollRevealObserver;

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

  observeVisibleCharacters();
  initScrollReveal();
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

// ---------- pause off-screen character animations for 60 FPS ----------
function observeVisibleCharacters() {
  if (charObserver) charObserver.disconnect();
  const cards = document.querySelectorAll(".char-float");
  if (!("IntersectionObserver" in window)) return;

  charObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("is-offscreen", !entry.isIntersecting);
      });
    },
    { rootMargin: "120px 0px" }
  );

  cards.forEach(card => charObserver.observe(card));
}

// ---------- GPU-accelerated scroll reveal ----------
function initScrollReveal() {
  if (scrollRevealObserver) scrollRevealObserver.disconnect();

  const headers = document.querySelectorAll(".category-header");
  const cards = document.querySelectorAll(".char-float");
  const targets = [...headers, ...cards];

  if (!targets.length) return;

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  headers.forEach(header => {
    header.classList.add("scroll-reveal");
    header.style.setProperty("--reveal-delay", "0ms");
  });

  cards.forEach((card, idx) => {
    card.classList.add("scroll-reveal");
    card.style.setProperty("--reveal-delay", `${(idx % 4) * 70}ms`);
  });

  scrollRevealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        scrollRevealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  targets.forEach(el => scrollRevealObserver.observe(el));
}

// Initial render
renderPersonalityTypesDirectory("ALL");