/* Night Watch Quiz — nautical horn synths (no audio files needed) */
const HORNS = {
  fog:     { label: "Fog Horn",       icon: "🌫️" },
  bell:    { label: "Ship's Bell",    icon: "🔔" },
  whistle: { label: "Bosun's Whistle",icon: "🪈" },
  klaxon:  { label: "Air Horn",       icon: "📯" }
};

let _actx = null;
function audioCtx() {
  if (!_actx) _actx = new (window.AudioContext || window.webkitAudioContext)();
  if (_actx.state === "suspended") _actx.resume();
  return _actx;
}
/* Call from any user gesture so mobile browsers unlock sound */
function unlockAudio() { try { audioCtx(); } catch (e) {} }

function playHorn(kind) {
  try {
    const ctx = audioCtx();
    const t = ctx.currentTime;
    const out = ctx.createGain();
    out.connect(ctx.destination);

    if (kind === "fog") {
      const g = ctx.createGain();
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass"; lp.frequency.value = 320; lp.Q.value = 2;
      [86, 87.5, 172].forEach((f, i) => {
        const o = ctx.createOscillator();
        o.type = i === 2 ? "triangle" : "sawtooth";
        o.frequency.value = f;
        o.connect(lp); o.start(t); o.stop(t + 1.6);
      });
      lp.connect(g); g.connect(out);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.9, t + 0.18);
      g.gain.setValueAtTime(0.9, t + 1.1);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
    }

    if (kind === "bell") {
      const strike = (st) => {
        [660, 1780, 3560].forEach((f, i) => {
          const o = ctx.createOscillator(), g = ctx.createGain();
          o.type = "sine"; o.frequency.value = f * (1 + i * 0.003);
          o.connect(g); g.connect(out);
          const amp = [0.5, 0.22, 0.08][i];
          g.gain.setValueAtTime(amp, st);
          g.gain.exponentialRampToValueAtTime(0.0001, st + 1.1);
          o.start(st); o.stop(st + 1.15);
        });
      };
      strike(t); strike(t + 0.28);
    }

    if (kind === "whistle") {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine";
      o.frequency.setValueAtTime(2100, t);
      o.frequency.linearRampToValueAtTime(3100, t + 0.35);
      o.frequency.setValueAtTime(3100, t + 0.45);
      o.frequency.linearRampToValueAtTime(2500, t + 0.85);
      o.connect(g); g.connect(out);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.4, t + 0.05);
      g.gain.setValueAtTime(0.4, t + 0.8);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.95);
      o.start(t); o.stop(t + 1.0);
    }

    if (kind === "klaxon") {
      [311, 466].forEach((f) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "square"; o.frequency.value = f;
        o.connect(g); g.connect(out);
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.25, t + 0.03);
        g.gain.setValueAtTime(0.25, t + 0.75);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
        o.start(t); o.stop(t + 0.95);
      });
    }
  } catch (e) { /* audio not available — carry on silently */ }
}
