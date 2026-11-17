// ========================================================
// CHARACTERS – premium 2.5D (glossy clay-style) healer characters
// Same config as before, so types-data.js needs NO change
// ========================================================

let _charUid = 0;

// lighten (+) or darken (−) a #hex colour. amt: -1 … 1
function _shade(hex, amt) {
  const n = parseInt(hex.replace("#", ""), 16);
  const f = c => Math.round(amt < 0 ? c * (1 + amt) : c + (255 - c) * amt);
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}

function createFullBodyCharacterSVG(config) {
  const id = "c" + (++_charUid);
  const u = name => `url(#${id}${name})`;

  const hairPaths = {
    short:  `<path d="M62 52 C60 24, 120 24, 118 52 C108 38, 72 38, 62 52Z" fill="${u("hair")}"/>`,
    spiky:  `<path d="M62 50 L68 26 L80 38 L90 22 L100 38 L112 26 L118 50 C108 38, 72 38, 62 50Z" fill="${u("hair")}"/>`,
    wavy:   `<path d="M60 60 C54 22, 126 22, 120 60 C116 42, 100 36, 90 40 C80 36, 64 42, 60 60Z" fill="${u("hair")}"/>`,
    parted: `<path d="M62 50 C64 22, 116 22, 118 50 C104 34, 80 40, 62 50Z" fill="${u("hair")}"/>`
  };

  const props = {
    orb:       `<circle class="prop-pulse" cx="148" cy="116" r="10" fill="${u("acc")}"/><circle cx="145" cy="113" r="3" fill="#fff" opacity=".8"/>`,
    wand:      `<line x1="136" y1="140" x2="156" y2="104" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/><circle class="prop-pulse" cx="156" cy="104" r="5.5" fill="${u("acc")}"/>`,
    heart:     `<path class="prop-pulse" d="M148 112 C148 106, 157 106, 157 112 C157 118, 148 125, 148 125 C148 125, 139 118, 139 112 C139 106, 148 106, 148 112 Z" fill="${u("acc")}"/>`,
    star:      `<polygon class="prop-pulse" points="148,100 152,110 162,114 152,118 148,128 144,118 134,114 144,110" fill="${u("acc")}"/>`,
    clipboard: `<rect class="prop-pulse" x="138" y="108" width="18" height="22" rx="4" fill="${u("acc")}" stroke="#fff" stroke-width="2"/>`,
    shield:    `<path class="prop-pulse" d="M138 106 L156 106 L156 118 C156 126, 147 132, 147 132 C147 132, 138 126, 138 118 Z" fill="${u("acc")}"/>`,
    compass:   `<circle class="prop-pulse" cx="148" cy="116" r="11" fill="${u("acc")}" stroke="#fff" stroke-width="2"/><polygon points="148,108 151,116 148,124 145,116" fill="#fff"/>`,
    spark:     `<polygon class="prop-pulse" points="148,102 157,120 139,120" fill="${u("acc")}"/>`
  };

  return `
  <svg class="fullbody-svg" viewBox="0 0 180 240" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${id}coat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${_shade(config.coat, .3)}"/>
        <stop offset=".55" stop-color="${config.coat}"/>
        <stop offset="1" stop-color="${_shade(config.coat, -.3)}"/>
      </linearGradient>
      <linearGradient id="${id}pants" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${_shade(config.pants, .25)}"/>
        <stop offset="1" stop-color="${_shade(config.pants, -.3)}"/>
      </linearGradient>
      <radialGradient id="${id}skin" cx=".35" cy=".3" r=".85">
        <stop offset="0" stop-color="${_shade(config.skin, .4)}"/>
        <stop offset=".6" stop-color="${config.skin}"/>
        <stop offset="1" stop-color="${_shade(config.skin, -.18)}"/>
      </radialGradient>
      <linearGradient id="${id}hair" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${_shade(config.hair, .35)}"/>
        <stop offset=".5" stop-color="${config.hair}"/>
        <stop offset="1" stop-color="${_shade(config.hair, -.3)}"/>
      </linearGradient>
      <radialGradient id="${id}acc" cx=".35" cy=".3" r=".8">
        <stop offset="0" stop-color="${_shade(config.accent, .55)}"/>
        <stop offset=".55" stop-color="${config.accent}"/>
        <stop offset="1" stop-color="${_shade(config.accent, -.25)}"/>
      </radialGradient>
      <radialGradient id="${id}glow">
        <stop offset="0" stop-color="${config.accent}" stop-opacity=".55"/>
        <stop offset="1" stop-color="${config.accent}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="${id}shoe" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#475569"/><stop offset="1" stop-color="#0f172a"/>
      </linearGradient>
      <linearGradient id="${id}gloss" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="${id}shadow">
        <stop offset="0" stop-color="#0f172a" stop-opacity=".3"/>
        <stop offset="1" stop-color="#0f172a" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <!-- ground shadow + soft aura -->
    <ellipse class="char-ground" cx="90" cy="226" rx="48" ry="9" fill="${u("shadow")}"/>
    <circle class="char-aura-ring" cx="90" cy="112" r="68" fill="${config.aura}"/>

    <g class="char-body-float">
      <!-- legs & glossy shoes -->
      <rect x="73" y="164" width="14" height="48" rx="7" fill="${u("pants")}"/>
      <rect x="93" y="164" width="14" height="48" rx="7" fill="${u("pants")}"/>
      <ellipse cx="78" cy="214" rx="12" ry="6.5" fill="${u("shoe")}"/>
      <ellipse cx="102" cy="214" rx="12" ry="6.5" fill="${u("shoe")}"/>
      <ellipse cx="74" cy="211.5" rx="5" ry="1.8" fill="#fff" opacity=".28"/>
      <ellipse cx="98" cy="211.5" rx="5" ry="1.8" fill="#fff" opacity=".28"/>

      <!-- left arm -->
      <g class="char-arm-left">
        <rect x="48" y="98" width="14" height="54" rx="7" fill="${u("coat")}"/>
        <circle cx="55" cy="154" r="6.5" fill="${u("skin")}"/>
      </g>

      <!-- torso -->
      <path d="M62 98 Q62 88 74 88 H106 Q118 88 118 98 L114 164 Q113 172 105 172 H75 Q67 172 66 164 Z" fill="${u("coat")}"/>
      <path d="M68 96 Q68 91 75 91 H82 Q76 130 77 166 H72 Q68 166 68 160Z" fill="${u("gloss")}"/>
      <!-- healer emblem -->
      <circle cx="90" cy="124" r="12" fill="${u("acc")}" stroke="#fff" stroke-opacity=".7" stroke-width="1.5"/>
      <path d="M90 115 L92.5 121.5 L99 124 L92.5 126.5 L90 133 L87.5 126.5 L81 124 L87.5 121.5Z" fill="#fff"/>

      <!-- right arm + prop -->
      <g class="char-arm-right">
        <rect x="118" y="96" width="14" height="52" rx="7" fill="${u("coat")}" transform="rotate(-18 125 96)"/>
        <circle cx="136" cy="140" r="6.5" fill="${u("skin")}"/>
        <circle cx="148" cy="116" r="20" fill="${u("glow")}"/>
        ${props[config.prop] || props.orb}
      </g>

      <!-- neck & head -->
      <rect x="84" y="78" width="12" height="16" rx="5" fill="${_shade(config.skin, -.12)}"/>
      <ellipse cx="90" cy="56" rx="27" ry="28" fill="${u("skin")}"/>
      <ellipse cx="78" cy="40" rx="10" ry="5" fill="#fff" opacity=".28" transform="rotate(-20 78 40)"/>
      ${hairPaths[config.hairStyle] || hairPaths.short}

      <!-- cheeks -->
      <circle cx="72" cy="68" r="4.5" fill="#fb7185" opacity=".28"/>
      <circle cx="108" cy="68" r="4.5" fill="#fb7185" opacity=".28"/>

      <!-- glasses -->
      ${config.glasses ? `
        <rect x="69" y="51" width="18" height="13" rx="4" fill="#fff" fill-opacity=".35" stroke="#1e1b4b" stroke-width="2.2"/>
        <rect x="93" y="51" width="18" height="13" rx="4" fill="#fff" fill-opacity=".35" stroke="#1e1b4b" stroke-width="2.2"/>
        <line x1="87" y1="57" x2="93" y2="57" stroke="#1e1b4b" stroke-width="2.2"/>` : ""}

      <!-- glossy blinking eyes -->
      <g class="char-eye"><ellipse cx="79" cy="58" rx="3" ry="4.2" fill="#0f172a"/><circle cx="80" cy="56.5" r="1.1" fill="#fff"/></g>
      <g class="char-eye"><ellipse cx="101" cy="58" rx="3" ry="4.2" fill="#0f172a"/><circle cx="102" cy="56.5" r="1.1" fill="#fff"/></g>

      <!-- smile -->
      <path d="M83 70 Q90 76 97 70" stroke="#7c2d12" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    </g>
  </svg>`;
}