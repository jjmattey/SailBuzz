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
  const ripples = `<path d="M ${cx-70} ${waterY+14} q 18 -7 36 0 t 36 0 t 36 0 t 36 0" stroke="#16283E" fill="none" stroke-width="2"/>`;
  return seaScene(`${body}${topmark}${ripples}<text x="24" y="322" class="gfx-cap">${cap}</text>`, waterY);
}

/* Sailboat side profile with one highlighted part */
function gfxBoat(g) {
  const hi = "#FFC845";
  const dim = "#3B5573", sail = "#182C44", hull = "#22364F";
  const H = (name) => (g.part === name ? `stroke="${hi}" stroke-width="6" filter="url(#softglow)"` : `stroke="${dim}" stroke-width="3"`);
  const inner = `
    <!-- sails (behind everything) -->
    <path d="M 406 70 L 406 164 L 528 170 Z" fill="${sail}" stroke="#24405F" opacity="0.95"/>
    <path d="M 394 84 L 394 218 L 244 226 Z" fill="${sail}" stroke="#24405F" opacity="0.8"/>
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
    <text x="24" y="322" class="gfx-cap">SLOOP · SIDE PROFILE · PART HIGHLIGHTED IN YELLOW</text>`;
  return seaScene(inner, 276);
}

/* Points of sail rose with the no-go zone shaded */
function gfxSailRose() {
  const cx = 400, cy = 185, r = 120;
  const rad = (d) => [(cx + r * Math.sin(d * Math.PI / 180)), (cy - r * Math.cos(d * Math.PI / 180))];
  const [x1, y1] = rad(-45), [x2, y2] = rad(45);
  const inner = `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#0D1B2E" stroke="#2A3B52" stroke-width="2"/>
    <path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z" fill="#FF4757" opacity="0.28" stroke="#FF4757" stroke-dasharray="6 5"/>
    <g filter="url(#softglow)">
      <line x1="${cx}" y1="18" x2="${cx}" y2="58" stroke="#EDE6D6" stroke-width="4"/>
      <path d="M ${cx} 66 L ${cx-9} 46 L ${cx+9} 46 Z" fill="#EDE6D6"/>
    </g>
    <text x="${cx}" y="12" text-anchor="middle" class="gfx-cap">TRUE WIND</text>
    <path d="M ${cx-9} ${cy+34} Q ${cx} ${cy-42} ${cx+9} ${cy+34} L ${cx} ${cy+44} Z" fill="#2A3B52" stroke="#3B5573"/>
    <text x="${cx}" y="${cy + r + 30}" text-anchor="middle" class="gfx-cap">SHADED SECTOR ≈ 45° EITHER SIDE OF THE WIND</text>`;
  return seaScene(inner, 330);
}

/* International code flag A */
function gfxFlagA() {
  const inner = `
    <line x1="290" y1="60" x2="290" y2="270" stroke="#3B5573" stroke-width="6" stroke-linecap="round"/>
    <path d="M 294 70 L 530 70 L 470 130 L 530 190 L 294 190 Z" fill="#0B4FA8" stroke="#2A3B52" stroke-width="2"/>
    <path d="M 294 70 L 412 70 L 412 190 L 294 190 Z" fill="#EDE6D6"/>
    <path d="M 294 70 L 530 70 L 470 130 L 530 190 L 294 190 Z" fill="none" stroke="#2A3B52" stroke-width="2"/>
    <text x="24" y="322" class="gfx-cap">INTERNATIONAL CODE FLAG · FLOWN ALONE</text>`;
  return seaScene(inner, 300);
}

function renderGfx(g) {
  if (!g) return "";
  switch (g.type) {
    case "lights":   return gfxLights(g);
    case "buoy":     return gfxBuoy(g);
    case "boat":     return gfxBoat(g);
    case "sailrose": return gfxSailRose();
    case "flagA":    return gfxFlagA();
    default: return "";
  }
}
