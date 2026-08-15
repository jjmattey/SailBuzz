/* Night Watch Quiz — question bank
   lvl: CC (Competent Crew), DS (Day Skipper), CS (Coastal Skipper)
   a: index of the correct option in opts */

const LEVELS = {
  CC: { label: "COMPETENT CREW", pts: 10, pen: 5,  color: "#2EE38A" },
  DS: { label: "DAY SKIPPER",    pts: 15, pen: 7,  color: "#FFC845" },
  CS: { label: "COASTAL SKIPPER",pts: 20, pen: 10, color: "#FF4757" }
};

const QUESTIONS = [
  /* ---------- COMPETENT CREW ---------- */
  { lvl: "CC", q: "Facing the bow, which side of the boat is PORT?",
    opts: ["The left side", "The right side", "The windward side", "The side nearest the pontoon"], a: 0 },

  { lvl: "CC", q: "Which part of the boat is highlighted in yellow?",
    opts: ["The boom", "The mast", "The tiller", "The forestay"], a: 0,
    gfx: { type: "boat", part: "boom" } },

  { lvl: "CC", q: "Which part of the boat is highlighted in yellow?",
    opts: ["The backstay", "The forestay", "A shroud", "A halyard"], a: 1,
    gfx: { type: "boat", part: "forestay" } },

  { lvl: "CC", q: "Which part of the boat is highlighted in yellow?",
    opts: ["The rudder", "The boom", "The tiller", "A winch handle"], a: 2,
    gfx: { type: "boat", part: "tiller" } },

  { lvl: "CC", q: "Best knot for attaching a fender line to the guardrail?",
    opts: ["Reef knot", "Clove hitch", "Figure-of-eight", "Sheet bend"], a: 1 },

  { lvl: "CC", q: "The helm calls \"READY ABOUT!\" — what's about to happen?",
    opts: ["The boat will tack through the wind", "The boat will gybe downwind", "The anchor is going down", "You're picking up a mooring buoy"], a: 0 },

  { lvl: "CC", q: "The LEEWARD side of the boat is…",
    opts: ["The side facing into the wind", "The side sheltered from the wind", "Always the port side", "The side nearest land"], a: 1 },

  { lvl: "CC", q: "A rope used to hoist a sail up the mast is called a…",
    opts: ["Sheet", "Painter", "Halyard", "Guy"], a: 2 },

  { lvl: "CC", q: "Someone falls overboard. Best FIRST action for the crew?",
    opts: ["Shout \"Man overboard!\", point at them and throw a lifebuoy", "Start the engine immediately", "Drop all the sails", "Send a Mayday before anything else"], a: 0 },

  { lvl: "CC", q: "Entering harbour (IALA Region A), what do you do with this buoy?",
    opts: ["Leave it to PORT", "Leave it to STARBOARD", "Pass either side", "Anchor close to it"], a: 0,
    gfx: { type: "buoy", style: "portlat" } },

  { lvl: "CC", q: "Entering harbour (IALA Region A), what do you do with this buoy?",
    opts: ["Leave it to PORT", "Leave it to STARBOARD", "Pass either side", "It marks a swimming area"], a: 1,
    gfx: { type: "buoy", style: "stbdlat" } },

  { lvl: "CC", q: "What does the engine KILL CORD do?",
    opts: ["Cuts the engine if the driver falls away from the helm", "Locks the throttle at idle", "Starts the engine remotely", "Activates the bilge pump"], a: 0 },

  { lvl: "CC", q: "The shaded sector straight upwind, where a yacht cannot sail, is called…",
    opts: ["The no-go zone", "A beam reach", "A broad reach", "A dead run"], a: 0,
    gfx: { type: "sailrose" } },

  /* ---------- DAY SKIPPER ---------- */
  { lvl: "DS", q: "Night watch: you see these lights. What are you most likely looking at?",
    opts: ["A power-driven vessel — you can see her starboard side", "A sailing vessel head-on", "A vessel at anchor", "A fishing vessel trawling"], a: 0,
    gfx: { type: "lights", lights: [ { x: 330, y: 120, color: "white" }, { x: 430, y: 175, color: "green" } ] } },

  { lvl: "DS", q: "You see this ahead: red AND green sidelights with a masthead light above. Your action under power?",
    opts: ["Alter course to starboard", "Hold your course and speed", "Alter course to port", "Stop and drift"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 105, color: "white" }, { x: 350, y: 180, color: "red" }, { x: 450, y: 180, color: "green" } ] } },

  { lvl: "DS", q: "A single all-round white light in a quiet anchorage most likely means…",
    opts: ["A vessel at anchor", "A trawler fishing", "A pilot vessel on duty", "A vessel constrained by her draught"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 150, color: "white" } ] } },

  { lvl: "DS", q: "On which side should you pass this mark?",
    opts: ["To its NORTH", "To its SOUTH", "To its EAST", "To its WEST"], a: 0,
    gfx: { type: "buoy", style: "north" } },

  { lvl: "DS", q: "Both topmark cones point DOWN. Which cardinal mark is this?",
    opts: ["South — pass to the south of it", "North — pass to the north of it", "East — pass to the east of it", "West — pass to the west of it"], a: 0,
    gfx: { type: "buoy", style: "south" } },

  { lvl: "DS", q: "In fog you hear ONE prolonged blast every two minutes. What is it?",
    opts: ["A power-driven vessel making way", "A sailing vessel underway", "A vessel at anchor", "A vessel aground"], a: 0 },

  { lvl: "DS", q: "VHF Channel 16 is used for…",
    opts: ["Distress, urgency and initial calling", "Booking marina berths", "General chat between yachts", "Weather forecasts only"], a: 0 },

  { lvl: "DS", q: "A MAYDAY call is justified when…",
    opts: ["There is grave and imminent danger to a vessel or life", "Your engine won't start in a calm anchorage", "You're going to be late back to the marina", "You've run out of gas for the stove"], a: 0 },

  { lvl: "DS", q: "SPRING tides (biggest range) occur…",
    opts: ["Just after full moon and new moon", "At half moon", "Only in springtime", "Only at the equinoxes"], a: 0 },

  { lvl: "DS", q: "Two power vessels crossing; the other is on YOUR starboard bow. You should…",
    opts: ["Give way — ideally alter to starboard to pass astern", "Stand on, you have priority", "Sound five short blasts and carry on", "Speed up to cross ahead"], a: 0 },

  { lvl: "DS", q: "A vessel flying this flag alone is telling you…",
    opts: ["\"I have a diver down — keep well clear at slow speed\"", "\"I require a pilot\"", "\"I am on fire\"", "\"I am carrying dangerous cargo\""], a: 0,
    gfx: { type: "flagA" } },

  { lvl: "DS", q: "Which part of the boat is highlighted in yellow?",
    opts: ["The kicking strap (vang)", "The topping lift", "The cunningham", "The outhaul"], a: 0,
    gfx: { type: "boat", part: "vang" } },

  { lvl: "DS", q: "When is the tidal stream generally at its FASTEST?",
    opts: ["Around mid-tide (hours 3–4)", "At high water slack", "At low water slack", "It's constant through the cycle"], a: 0 },

  /* ---------- COASTAL SKIPPER ---------- */
  { lvl: "CS", q: "Three all-round red lights in a vertical line. What are you looking at?",
    opts: ["A vessel constrained by her draught", "A vessel not under command", "A vessel aground", "A minehunter at work"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 95, color: "red" }, { x: 400, y: 140, color: "red" }, { x: 400, y: 185, color: "red" } ] } },

  { lvl: "CS", q: "TWO all-round red lights in a vertical line, no way on. \"Red over red…\"",
    opts: ["A vessel not under command", "A pilot vessel", "A dredger", "A vessel constrained by draught"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 115, color: "red" }, { x: 400, y: 165, color: "red" } ] } },

  { lvl: "CS", q: "GREEN over WHITE all-round lights. \"Green over white…\"",
    opts: ["A vessel trawling", "A pilot vessel", "A vessel at anchor over 50m", "A hovercraft"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 110, color: "green" }, { x: 400, y: 160, color: "white" } ] } },

  { lvl: "CS", q: "WHITE over RED all-round lights. \"White over red…\"",
    opts: ["A pilot vessel on duty", "A vessel fishing (not trawling)", "A vessel restricted in ability to manoeuvre", "A tug with tow over 200m"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 110, color: "white" }, { x: 400, y: 160, color: "red" } ] } },

  { lvl: "CS", q: "RED over WHITE all-round lights. \"Red over white…\"",
    opts: ["A vessel fishing, other than trawling", "A pilot vessel", "A vessel not under command", "An air-cushion vessel"], a: 0,
    gfx: { type: "lights", lights: [ { x: 400, y: 110, color: "red" }, { x: 400, y: 160, color: "white" } ] } },

  { lvl: "CS", q: "Black with a red band and TWO black spheres on top. This is…",
    opts: ["An isolated danger mark — pass well clear either side", "A safe water mark", "A new-wreck emergency mark", "A special mark"], a: 0,
    gfx: { type: "buoy", style: "isolated" } },

  { lvl: "CS", q: "Red and white VERTICAL stripes with a red sphere topmark. This tells you…",
    opts: ["Safe water — navigable all around (often a landfall/fairway mark)", "Isolated danger below", "Keep to the east of it", "Prohibited anchorage"], a: 0,
    gfx: { type: "buoy", style: "safewater" } },

  { lvl: "CS", q: "Topmark cones point TOWARDS each other (the \"wineglass\"). Which cardinal?",
    opts: ["West — pass to the west of it", "East — pass to the east of it", "North — pass to the north of it", "South — pass to the south of it"], a: 0,
    gfx: { type: "buoy", style: "west" } },

  { lvl: "CS", q: "In fog: ONE prolonged + TWO short blasts every two minutes indicates…",
    opts: ["A vessel NUC, restricted, constrained, sailing, fishing or towing", "A power-driven vessel making way", "A vessel at anchor ringing forward", "A vessel aground"], a: 0 },

  { lvl: "CS", q: "To find tidal heights at a SECONDARY port you should…",
    opts: ["Apply the tabulated differences to the standard port's times and heights", "Use the standard port figures unchanged", "Average the two nearest standard ports", "Add 10% to the standard port heights"], a: 0 },

  { lvl: "CS", q: "The forecast says the wind will VEER. It will shift…",
    opts: ["Clockwise, e.g. SW to W to NW", "Anticlockwise, e.g. W to SW to S", "It will strengthen", "It will die away"], a: 0 },

  { lvl: "CS", q: "Your COURSE TO STEER differs from your ground track because it allows for…",
    opts: ["Tidal stream and leeway", "Magnetic dip", "Boat speed only", "GPS satellite error"], a: 0 }
];
