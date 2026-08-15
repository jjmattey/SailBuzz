/* Night Watch Quiz — chart-style SVG scenes for questions */

const GFX_DEFS = `
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#050B14"/><stop offset="1" stop-color="#0B1A2C"/>
  </linearGradient>
  <linearGradient id="seaG" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0A1626"/><stop offset="1" stop-color="#04090F"/>
  </linearGradient>
  <filter id="glow" x="-150%" y="-150%" width="400%" height="400%">
    <feGaussianBlur stdDeviation="7" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="softglow" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur stdDeviation="3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>`;

function seaScene(inner, horizonY = 210) {
  return `<svg viewBox="0 0 800 340" class="gfx-svg" role="img">
    ${GFX_DEFS}
    <rect width="800" height="${horizonY}" fill="url(#sky)"/>
    <rect y="${horizonY}" width="800" height="${340 - horizonY}" fill="url(#seaG)"/>
    <line x1="0" y1="${horizonY}" x2="800" y2="${horizonY}" stroke="#16283E" stroke-width="1.5"/>
    <circle cx="700" cy="52" r="17" fill="#EDE6D6" opacity="0.85"/>
    <circle cx="693" cy="47" r="15" fill="#050B14"/>
    ${stars()}
    ${inner}
  </svg>`;
}

const DAY_DEFS = `
<defs>
  <linearGradient id="dsky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7FB2DE"/><stop offset="1" stop-color="#CBE6F6"/>
  </linearGradient>
  <linearGradient id="dsea" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2E6E9E"/><stop offset="1" stop-color="#1C4A73"/>
  </linearGradient>
  <filter id="softglow" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur stdDeviation="3" result="b"/>
    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
</defs>`;

function dayScene(inner, horizonY = 210) {
  const cloud = (x, y, s) => `<g fill="#FFFFFF" opacity="0.85" transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="34" ry="13"/><ellipse cx="24" cy="-7" rx="24" ry="11"/><ellipse cx="-22" cy="-5" rx="20" ry="10"/></g>`;
  return `<svg viewBox="0 0 800 340" class="gfx-svg" role="img">
    ${DAY_DEFS}
    <rect width="800" height="${horizonY}" fill="url(#dsky)"/>
    <rect y="${horizonY}" width="800" height="${340 - horizonY}" fill="url(#dsea)"/>
    <line x1="0" y1="${horizonY}" x2="800" y2="${horizonY}" stroke="#1B3E5E" stroke-width="1.5"/>
    <circle cx="700" cy="54" r="24" fill="#FFE9A8" stroke="#F5C452" stroke-width="3"/>
    ${cloud(150, 60, 1)}${cloud(420, 42, 0.8)}${cloud(600, 96, 0.6)}
    <path d="M 60 ${horizonY + 26} q 22 -8 44 0 t 44 0 t 44 0" stroke="#4C87B5" fill="none" stroke-width="2" opacity="0.7"/>
    <path d="M 540 ${horizonY + 44} q 22 -8 44 0 t 44 0" stroke="#4C87B5" fill="none" stroke-width="2" opacity="0.7"/>
    ${inner}
  </svg>`;
}

function stars() {
  let s = "";
  const pts = [[60,40],[130,90],[220,30],[310,70],[420,45],[500,95],[560,25],[640,110],[760,80],[90,140],[360,120],[470,150]];
  for (const [x, y] of pts) s += `<circle cx="${x}" cy="${y}" r="1.3" fill="#8FA3BC" opacity="0.7"/>`;
  return s;
}

function navLight(x, y, color) {
  const c = { red: "#FF4757", green: "#2EE38A", white: "#FFF4D6", yellow: "#FFC845" }[color];
  return `<g filter="url(#glow)">
      <circle cx="${x}" cy="${y}" r="9" fill="${c}"/>
      <circle cx="${x}" cy="${y}" r="4" fill="#FFFFFF" opacity="0.9"/>
    </g>
    <ellipse cx="${x}" cy="252" rx="24" ry="4" fill="${c}" opacity="0.16"/>
    <ellipse cx="${x}" cy="268" rx="16" ry="3" fill="${c}" opacity="0.10"/>`;
}

/* g.lights = [{x,y,color}] positioned in a 800x340 night scene */
function gfxLights(g) {
  const inner = g.lights.map(l => navLight(l.x, l.y, l.color)).join("");
  return seaScene(`<text x="24" y="322" class="gfx-cap">SEEN AT NIGHT · SHAPE OF VESSEL NOT VISIBLE</text>` + inner);
}

/* Buoys — IALA A */
function gfxBuoy(g) {
  const cx = 400, waterY = 258;
  let body = "", topmark = "", cap = "";
  const cone = (x, y, up, fill = "#111820") =>
    up ? `<path d="M ${x-16} ${y} L ${x+16} ${y} L ${x} ${y-26} Z" fill="${fill}" stroke="#2A3B52"/>`
       : `<path d="M ${x-16} ${y-26} L ${x+16} ${y-26} L ${x} ${y} Z" fill="${fill}" stroke="#2A3B52"/>`;
  const pillar = (bands) => {
    let h = 118, y = waterY - h, out = "";
    const seg = h / bands.length;
    bands.forEach((c, i) => {
      out += `<rect x="${cx-26}" y="${y + i*seg}" width="52" height="${seg}" fill="${c}" stroke="#2A3B52" stroke-width="1"/>`;
    });
    out += `<rect x="${cx-40}" y="${waterY-8}" width="80" height="12" rx="4" fill="#111820" stroke="#2A3B52"/>`;
    return out;
  };
  const B = "#161C24", Y = "#FFC845", R = "#E5484D", G = "#2EBB6E", W = "#EDE6D6";

  switch (g.style) {
    case "north":  body = pillar([B, Y]);       topmark = cone(cx, waterY-126, true) + cone(cx, waterY-156, true); cap = "CARDINAL MARK"; break;
    case "south":  body = pillar([Y, B]);       topmark = cone(cx, waterY-126, false) + cone(cx, waterY-156, false); cap = "CARDINAL MARK"; break;
    case "east":   body = pillar([B, Y, B]);    topmark = cone(cx, waterY-156, true) + cone(cx, waterY-126, false); cap = "CARDINAL MARK"; break;
    case "west":   body = pillar([Y, B, Y]);    topmark = cone(cx, waterY-152, false) + cone(cx, waterY-126, true); cap = "CARDINAL MARK"; break;
    case "isolated": body = pillar([B, R, B]);
      topmark = `<circle cx="${cx}" cy="${waterY-140}" r="13" fill="${B}" stroke="#2A3B52"/><circle cx="${cx}" cy="${waterY-170}" r="13" fill="${B}" stroke="#2A3B52"/>`;
      cap = "MARK, MID-CHANNEL AREA"; break;
    case "safewater":
      body = `<rect x="${cx-26}" y="${waterY-118}" width="13" height="118" fill="${R}"/><rect x="${cx-13}" y="${waterY-118}" width="13" height="118" fill="${W}"/><rect x="${cx}" y="${waterY-118}" width="13" height="118" fill="${R}"/><rect x="${cx+13}" y="${waterY-118}" width="13" height="118" fill="${W}"/><rect x="${cx-26}" y="${waterY-118}" width="52" height="118" fill="none" stroke="#2A3B52"/><rect x="${cx-40}" y="${waterY-8}" width="80" height="12" rx="4" fill="#111820" stroke="#2A3B52"/>`;
      topmark = `<circle cx="${cx}" cy="${waterY-134}" r="13" fill="${R}" stroke="#2A3B52"/>`;
      cap = "MARK WITH VERTICAL STRIPES"; break;
    case "portlat":
      body = `<rect x="${cx-34}" y="${waterY-92}" width="68" height="92" fill="${R}" stroke="#2A3B52"/><rect x="${cx-44}" y="${waterY-8}" width="88" height="12" rx="4" fill="#111820" stroke="#2A3B52"/>`;
      cap = "CAN BUOY · IALA REGION A"; break;
    case "stbdlat":
      body = `<path d="M ${cx-36} ${waterY} L ${cx+36} ${waterY} L ${cx} ${waterY-96} Z" fill="${G}" stroke="#2A3B52"/><rect x="${cx-44}" y="${waterY-8}" width="88" height="12" rx="4" fill="#111820" stroke="#2A3B52"/>`;
      cap = "CONICAL BUOY · IALA REGION A"; break;
  }
  const ripples = `<path d="M ${cx-70} ${waterY+14} q 18 -7 36 0 t 36 0 t 36 0 t 36 0" stroke="#17405F" fill="none" stroke-width="2"/>`;
  return dayScene(`${body}${topmark}${ripples}<text x="24" y="322" class="gfx-cap day">${cap}</text>`, waterY);
}

/* Sailboat side profile with one highlighted part */
function gfxBoat(g) {
  const hi = "#FF6B1A";
  const dim = "#54718D", sail = "#F5F1E4", hull = "#24425F";
  const H = (name) => (g.part === name ? `stroke="${hi}" stroke-width="6" filter="url(#softglow)"` : `stroke="${dim}" stroke-width="3"`);
  const inner = `
    <!-- sails (behind everything) -->
    <path d="M 406 70 L 406 164 L 528 170 Z" fill="${sail}" stroke="#9DB4C8" opacity="0.97"/>
    <path d="M 394 84 L 394 218 L 244 226 Z" fill="${sail}" stroke="#9DB4C8" opacity="0.9"/>
    <!-- hull -->
    <path d="M 172 236 Q 400 250 622 236 L 586 276 Q 400 290 216 276 Z" fill="${hull}" stroke="#2A3B52" stroke-width="2"/>
    <!-- keel -->
    <path d="M 378 280 L 430 280 L 420 324 L 394 324 Z" ${g.part==="keel" ? `fill="${hi}" filter="url(#softglow)"` : `fill="#1B2C42"`} stroke="#2A3B52"/>
    <!-- rudder -->
    <path d="M 578 280 L 600 280 L 596 314 L 584 314 Z" ${g.part==="rudder" ? `fill="${hi}" filter="url(#softglow)"` : `fill="#1B2C42"`} stroke="#2A3B52"/>
    <!-- forestay -->
    <line x1="400" y1="62" x2="196" y2="234" ${H("forestay")} stroke-linecap="round"/>
    <!-- backstay -->
    <line x1="400" y1="62" x2="608" y2="234" ${H("backstay")} stroke-linecap="round"/>
    <!-- mast -->
    <line x1="400" y1="240" x2="400" y2="56" ${H("mast")} stroke-linecap="round"/>
    <!-- boom -->
    <line x1="400" y1="172" x2="544" y2="178" ${H("boom")} stroke-linecap="round"/>
    <!-- kicking strap (vang) -->
    <line x1="402" y1="216" x2="456" y2="175" ${H("vang")} stroke-linecap="round"/>
    <!-- tiller -->
    <line x1="588" y1="244" x2="528" y2="230" ${H("tiller")} stroke-linecap="round"/>
    <!-- burgee -->
    <path d="M 400 56 L 400 42 L 428 49 Z" fill="#FF4757"/>
    <text x="24" y="322" class="gfx-cap day">SLOOP · SIDE PROFILE · PART HIGHLIGHTED IN ORANGE</text>`;
  return dayScene(inner, 276);
}

/* Points of sail rose with the no-go zone shaded */
function gfxSailRose() {
  const cx = 400, cy = 185, r = 120;
  const rad = (d) => [(cx + r * Math.sin(d * Math.PI / 180)), (cy - r * Math.cos(d * Math.PI / 180))];
  const [x1, y1] = rad(-45), [x2, y2] = rad(45);
  const inner = `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#EAF4FB" stroke="#7FA6C4" stroke-width="2"/>
    <path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z" fill="#FF4757" opacity="0.28" stroke="#FF4757" stroke-dasharray="6 5"/>
    <g>
      <line x1="${cx}" y1="18" x2="${cx}" y2="58" stroke="#1B3E5E" stroke-width="4"/>
      <path d="M ${cx} 66 L ${cx-9} 46 L ${cx+9} 46 Z" fill="#1B3E5E"/>
    </g>
    <text x="${cx}" y="12" text-anchor="middle" class="gfx-cap day">TRUE WIND</text>
    <path d="M ${cx-9} ${cy+34} Q ${cx} ${cy-42} ${cx+9} ${cy+34} L ${cx} ${cy+44} Z" fill="#24425F" stroke="#54718D"/>
    <text x="${cx}" y="${cy + r + 30}" text-anchor="middle" class="gfx-cap day">SHADED SECTOR ≈ 45° EITHER SIDE OF THE WIND</text>`;
  return dayScene(inner, 330);
}

/* International code flag A */
function gfxFlagA() {
  const inner = `
    <line x1="290" y1="60" x2="290" y2="270" stroke="#24425F" stroke-width="6" stroke-linecap="round"/>
    <path d="M 294 70 L 530 70 L 470 130 L 530 190 L 294 190 Z" fill="#0B4FA8" stroke="#2A3B52" stroke-width="2"/>
    <path d="M 294 70 L 412 70 L 412 190 L 294 190 Z" fill="#EDE6D6"/>
    <path d="M 294 70 L 530 70 L 470 130 L 530 190 L 294 190 Z" fill="none" stroke="#2A3B52" stroke-width="2"/>
    <text x="24" y="322" class="gfx-cap day">INTERNATIONAL CODE FLAG · FLOWN ALONE</text>`;
  return dayScene(inner, 300);
}

/* Day shapes hoisted on a vessel (COLREGs) */
function gfxShapes(g) {
  const B = "#14202C", cx = 400, hx = 330, waterY = 262;
  const ball = (y, r = 15) => `<circle cx="${hx}" cy="${y}" r="${r}" fill="${B}"/>`;
  const coneDown = (y) => `<path d="M ${hx-17} ${y-15} L ${hx+17} ${y-15} L ${hx} ${y+15} Z" fill="${B}"/>`;
  const coneUp = (y) => `<path d="M ${hx-17} ${y+15} L ${hx+17} ${y+15} L ${hx} ${y-15} Z" fill="${B}"/>`;
  const diamond = (y) => `<path d="M ${hx} ${y-18} L ${hx+15} ${y} L ${hx} ${y+18} L ${hx-15} ${y} Z" fill="${B}"/>`;
  let shapes = "";
  switch (g.style) {
    case "ball":    shapes = ball(120); break;                          // anchored
    case "cone":    shapes = coneDown(120); break;                      // sailing + engine
    case "ball2":   shapes = ball(100) + ball(146); break;              // NUC
    case "ball3":   shapes = ball(84) + ball(128) + ball(172); break;   // aground
    case "bdb":     shapes = ball(84) + diamond(128) + ball(172); break;// RAM
    case "diamond": shapes = diamond(120); break;                       // tow > 200m
    case "cones2":  shapes = coneDown(104) + coneUp(146); break;        // fishing (apexes together)
  }
  const vessel = `
    <line x1="${cx}" y1="${waterY - 24}" x2="${cx}" y2="52" stroke="#24425F" stroke-width="5" stroke-linecap="round"/>
    <line x1="${cx}" y1="66" x2="${hx}" y2="66" stroke="#24425F" stroke-width="4" stroke-linecap="round"/>
    <line x1="${hx}" y1="66" x2="${hx}" y2="${g.style === "bdb" || g.style === "ball3" ? 68 : 104}" stroke="#54718D" stroke-width="2" stroke-dasharray="4 4"/>
    <path d="M ${cx - 170} ${waterY - 24} L ${cx + 170} ${waterY - 24} L ${cx + 132} ${waterY + 6} L ${cx - 136} ${waterY + 6} Z" fill="#24425F" stroke="#1B3E5E" stroke-width="2"/>`;
  return dayScene(vessel + shapes + `<text x="24" y="322" class="gfx-cap day">DAY SHAPE(S) HOISTED WHERE BEST SEEN</text>`, waterY - 4);
}

function renderGfx(g) {
  if (!g) return "";
  switch (g.type) {
    case "lights":   return gfxLights(g);
    case "buoy":     return gfxBuoy(g);
    case "boat":     return gfxBoat(g);
    case "sailrose": return gfxSailRose();
    case "flagA":    return gfxFlagA();
    case "shapes":   return gfxShapes(g);
    default: return "";
  }
}
