# ⚓ Night Watch Quiz

A buzzer-style sailing quiz for the whole crew — 38 mixed questions across
**Competent Crew (+10 / −5)**, **Day Skipper (+15 / −7)** and **Coastal Skipper (+20 / −10)**,
with night-navigation light scenarios, IALA buoyage, boat parts and more drawn as graphics.

The **laptop** shows the questions, graphics and leaderboard.
Each **phone** scans the QR code and picks a nautical horn (fog horn, ship's
bell, bosun's whistle or air horn). Two game modes, chosen in the lobby:

- **All-play (Kahoot-style, default)** — every question, everyone answers on
  their phone using four coloured shape buttons. Faster correct answers score
  more (up to 100/150/200 by level), correct streaks pay a bonus, and the big
  screen shows the vote split when time's up. Wrong answers score 0.
- **Buzzer race** — first horn in gets the answer buttons alone. Correct earns
  +10/+15/+20, wrong costs −5/−7/−10, locks you out and re-arms everyone else.

No server, no accounts, no build step — phones and laptop connect directly to
each other (peer-to-peer via PeerJS). They just all need an internet connection;
they do **not** need to be on the same Wi-Fi.

## Get it live on GitHub Pages (~2 minutes)

1. Sign in at **github.com** → click **+** (top right) → **New repository**.
2. Name it `sailing-quiz`, keep it **Public**, click **Create repository**.
3. On the new repo page click **uploading an existing file**, drag in all six
   files from this folder (`index.html`, `play.html`, `questions.js`, `gfx.js`,
   `audio.js`, `README.md`), then click **Commit changes**.
4. Go to **Settings → Pages** (left sidebar). Under *Build and deployment*, set
   **Source: Deploy from a branch**, **Branch: main / (root)**, click **Save**.
5. Wait ~1 minute, then open:

   ```
   https://YOUR-USERNAME.github.io/sailing-quiz/
   ```

That URL is your quiz. Bookmark it on the laptop.

## Running quiz night

1. Open the URL on the laptop (or TV browser). A QR code and 4-letter boarding
   code appear.
2. Everyone scans the QR with their phone camera, types a name, taps a horn
   (tap it twice to preview the sound), and joins.
3. Hit **Cast off** on the laptop. Questions come up in a random order each game.
4. All-play: four coloured shapes appear on every phone — tap fast. Buzzer
   race: buzz first, then answer on your phone within 20 seconds.
5. Skipper controls on the laptop: **Reveal answer** (nobody's getting it),
   **Next question**, **End quiz** (shows the podium early).

### Good to know
- If a phone drops off, rescan the QR and rejoin **with the same name** — the
  score is kept.
- Refreshing the **laptop** starts a fresh game with a new code.
- Sound not playing on a phone? Check the ringer/silent switch — then tap the
  horn tile once more; browsers only allow audio after a tap.
- Editing questions: they're plain text in `questions.js`. Add your own —
  `a` is the index (0–3) of the correct option, and options are shuffled
  automatically each game.
