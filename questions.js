/* Night Watch Quiz — question packs
   Each pack: levels (label, buzzer pts/pen, all-play base) + questions.
   a: index of the correct option in opts (options are shuffled per game) */

const SAIL_LEVELS = {
  CC: { label: "COMPETENT CREW", pts: 10, pen: 5,  base: 100, color: "#2EE38A" },
  DS: { label: "DAY SKIPPER",    pts: 15, pen: 7,  base: 150, color: "#FFC845" },
  CS: { label: "COASTAL SKIPPER",pts: 20, pen: 10, base: 200, color: "#FF4757" }
};

const SAIL_QUESTIONS = [
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
    opts: ["Tidal stream and leeway", "Magnetic dip", "Boat speed only", "GPS satellite error"], a: 0 },

  /* ---------- DAYTIME ---------- */
  { lvl: "CC", q: "Two sailing yachts approaching on opposite tacks by day. Who gives way?",
    opts: ["The yacht on PORT tack", "The yacht on STARBOARD tack", "The smaller yacht", "The faster yacht"], a: 0 },

  { lvl: "CC", q: "You're overtaking a slower yacht on a sunny afternoon. Who keeps clear?",
    opts: ["You — the overtaking vessel always keeps clear", "The slower boat must speed up", "The boat on port tack", "Whoever is under engine"], a: 0 },

  { lvl: "CC", q: "A single black BALL hoisted forward on a yacht by day means…",
    opts: ["She is at anchor", "She is racing", "Diver down", "She requires assistance"], a: 0,
    gfx: { type: "shapes", style: "ball" } },

  { lvl: "DS", q: "A yacht with sails up shows this black cone, point down. She is…",
    opts: ["Sailing AND motoring — treat her as a power vessel", "Racing", "Fishing", "Aground"], a: 0,
    gfx: { type: "shapes", style: "cone" } },

  { lvl: "DS", q: "One SHORT blast from a vessel ahead in daylight means…",
    opts: ["\"I am altering course to STARBOARD\"", "\"I am altering course to PORT\"", "\"I am going astern\"", "\"I intend to overtake you\""], a: 0 },

  { lvl: "DS", q: "Sail meets power in open water on a clear day. As a rule of thumb…",
    opts: ["Power gives way to sail — with big-ship exceptions", "Sail always gives way to power", "Whoever is faster gives way", "Both must stop"], a: 0 },

  { lvl: "DS", q: "Two black balls in a vertical line by day. \"Two balls…\"",
    opts: ["Vessel NOT UNDER COMMAND", "Vessel at anchor", "Vessel trawling", "Pilot vessel"], a: 0,
    gfx: { type: "shapes", style: "ball2" } },

  { lvl: "DS", q: "Three SHORT blasts from the ferry leaving the berth means…",
    opts: ["\"My engines are going ASTERN\"", "\"I am turning to starboard\"", "\"Keep clear, I am constrained\"", "\"I am about to anchor\""], a: 0 },

  { lvl: "CS", q: "THREE black balls in a vertical line by day. She is…",
    opts: ["AGROUND", "Not under command", "At anchor over 100m", "Restricted in her ability to manoeuvre"], a: 0,
    gfx: { type: "shapes", style: "ball3" } },

  { lvl: "CS", q: "Ball — DIAMOND — ball hoisted by day means…",
    opts: ["Restricted in her ability to manoeuvre", "Constrained by her draught", "Minesweeping", "Towing over 200m"], a: 0,
    gfx: { type: "shapes", style: "bdb" } },

  { lvl: "CS", q: "A tug and her tow BOTH show a black diamond by day. The diamond tells you…",
    opts: ["The tow is longer than 200 metres", "The tow is carrying dangerous cargo", "The tug has right of way", "The tow is unmanned"], a: 0,
    gfx: { type: "shapes", style: "diamond" } },

  { lvl: "CS", q: "Two cones with their APEXES together, hoisted by day. She is…",
    opts: ["Fishing", "Motor-sailing", "Dredging", "A pilot vessel"], a: 0,
    gfx: { type: "shapes", style: "cones2" } }
];

/* ==================== PETROLHEADS PACK ==================== */
const CAR_LEVELS = {
  EZ: { label: "LEARNER",     pts: 10, pen: 5,  base: 100, color: "#2EE38A" },
  EN: { label: "ENTHUSIAST",  pts: 15, pen: 7,  base: 150, color: "#FFC845" },
  PH: { label: "PETROLHEAD",  pts: 20, pen: 10, base: 200, color: "#FF4757" }
};

const CAR_QUESTIONS = [
  /* ---------- LEARNER ---------- */
  { lvl: "EZ", q: "In a right-hand-drive manual, which pedal is the CLUTCH?",
    opts: ["The left one", "The middle one", "The right one", "There isn't one"], a: 0 },

  { lvl: "EZ", q: "This lamp comes on while you're driving. What's it telling you?",
    opts: ["Charging system fault — the battery isn't being charged", "Battery is fully charged", "Headlights are on", "Key fob battery is low"], a: 0,
    gfx: { type: "dash", light: "battery" } },

  { lvl: "EZ", q: "This red lamp lights up at speed. What do you do?",
    opts: ["Stop as soon as it's safe — oil pressure is low", "Carry on, it's just a service reminder", "Top up the washer fluid", "Turn the heater on"], a: 0,
    gfx: { type: "dash", light: "oil" } },

  { lvl: "EZ", q: "What does RPM on the rev counter measure?",
    opts: ["Engine revolutions per minute", "Road speed", "Fuel burn per mile", "Tyre rotations"], a: 0 },

  { lvl: "EZ", q: "The badge with the prancing horse belongs to…",
    opts: ["Ferrari", "Porsche", "Lamborghini", "Mustang"], a: 0 },

  { lvl: "EZ", q: "What does ABS stand for?",
    opts: ["Anti-lock Braking System", "Automatic Brake Servo", "All-wheel Balance System", "Auxiliary Battery Supply"], a: 0 },

  { lvl: "EZ", q: "Which part of the car is highlighted in orange?",
    opts: ["The bonnet", "The boot", "The bumper", "The sill"], a: 0,
    gfx: { type: "car", part: "bonnet" } },

  { lvl: "EZ", q: "A car's handbrake usually acts on which wheels?",
    opts: ["The rear wheels", "The front wheels", "All four", "Whichever are spinning"], a: 0 },

  { lvl: "EZ", q: "What does a turbocharger actually do?",
    opts: ["Forces more air into the engine for more power", "Adds more fuel to the tank", "Makes the exhaust quieter", "Cools the brakes"], a: 0 },

  { lvl: "EZ", q: "In the UK, a car needs its first MOT when it's how old?",
    opts: ["3 years", "1 year", "5 years", "10 years"], a: 0 },

  { lvl: "EZ", q: "\"0–60\" is a measure of a car's…",
    opts: ["Acceleration", "Top speed", "Braking distance", "Fuel economy"], a: 0 },

  { lvl: "EZ", q: "This amber lamp with the exclamation mark means…",
    opts: ["Low tyre pressure — check your tyres", "Handbrake is on", "Low screenwash", "Door open"], a: 0,
    gfx: { type: "dash", light: "tyre" } },

  /* ---------- ENTHUSIAST ---------- */
  { lvl: "EN", q: "Torque, in plain terms, is…",
    opts: ["The engine's twisting force", "The engine's top speed", "How fast the wheels spin", "The weight over the front axle"], a: 0 },

  { lvl: "EN", q: "Where does a Porsche 911 keep its engine?",
    opts: ["Behind the rear axle", "Under the bonnet", "Behind the seats, mid-mounted", "Under the boot floor, front-mid"], a: 0 },

  { lvl: "EN", q: "UNDERSTEER is when…",
    opts: ["The front tyres lose grip and the car runs wide", "The rear steps out", "The car leans in corners", "The steering feels heavy at speed"], a: 0 },

  { lvl: "EN", q: "Heel-and-toe is a technique for…",
    opts: ["Rev-matching downshifts while braking", "Parallel parking", "Launching off the line", "Saving fuel on motorways"], a: 0 },

  { lvl: "EN", q: "This red lamp means…",
    opts: ["Engine overheating — coolant temperature too high", "Air-con is on max", "Heated seats active", "Frost warning"], a: 0,
    gfx: { type: "dash", light: "coolant" } },

  { lvl: "EN", q: "A limited-slip differential helps by…",
    opts: ["Sharing drive across an axle so one spinning wheel doesn't waste it", "Locking the gearbox in gear", "Slipping the clutch automatically", "Limiting top speed"], a: 0 },

  { lvl: "EN", q: "Which part of the car is highlighted in orange?",
    opts: ["The rear spoiler", "The roof rail", "The diffuser", "The aerial"], a: 0,
    gfx: { type: "car", part: "spoiler" } },

  { lvl: "EN", q: "Jackie Stewart's famous nickname for the Nürburgring Nordschleife…",
    opts: ["The Green Hell", "The Widowmaker", "The Ring of Fire", "The Devil's Playground"], a: 0 },

  { lvl: "EN", q: "Bentley is owned by which group?",
    opts: ["Volkswagen Group", "BMW Group", "Stellantis", "Tata"], a: 0 },

  { lvl: "EN", q: "E10 petrol at UK pumps contains up to…",
    opts: ["10% ethanol", "10% extra octane", "10% diesel", "10% water"], a: 0 },

  { lvl: "EN", q: "The APEX of a corner is…",
    opts: ["The point where you clip the inside of the bend", "The fastest part of the straight", "The braking point", "The crest of a hill"], a: 0 },

  { lvl: "EN", q: "The REDLINE marks…",
    opts: ["The maximum safe engine speed", "The oil temperature limit", "The speed limit", "Maximum boost pressure"], a: 0 },

  { lvl: "EN", q: "Which part of the car is highlighted in orange?",
    opts: ["The exhaust tailpipe", "The fuel filler", "The tow hook", "The rear fog light"], a: 0,
    gfx: { type: "car", part: "exhaust" } },

  /* ---------- PETROLHEAD ---------- */
  { lvl: "PH", q: "Why do engineers love a straight-six engine?",
    opts: ["It's inherently balanced — primary and secondary forces cancel", "It's the lightest layout", "It never needs oil changes", "It always makes more power than a V8"], a: 0 },

  { lvl: "PH", q: "A flat-plane-crank V8 is famous for…",
    opts: ["Revving high with a shrieking exhaust note, like Ferrari's", "A lazy low-rev burble", "Running without balance shafts at low revs only", "Being unusable over 5,000 rpm"], a: 0 },

  { lvl: "PH", q: "Who designed the McLaren F1?",
    opts: ["Gordon Murray", "Adrian Newey", "Colin Chapman", "Ross Brawn"], a: 0 },

  { lvl: "PH", q: "Group B rallying was banned after which season?",
    opts: ["1986", "1979", "1992", "1969"], a: 0 },

  { lvl: "PH", q: "Honda's VTEC changes what as the revs climb?",
    opts: ["Valve timing and lift", "Turbo boost pressure", "The compression ratio", "The firing order"], a: 0 },

  { lvl: "PH", q: "Ackermann steering geometry means…",
    opts: ["The inside wheel turns tighter than the outside in a corner", "Both fronts always stay parallel", "The rears steer opposite the fronts", "The steering self-centres"], a: 0 },

  { lvl: "PH", q: "A monocoque is…",
    opts: ["A structure where the body itself carries the loads", "A separate ladder chassis", "A single-cylinder engine", "A one-piece carbon wheel"], a: 0 },

  { lvl: "PH", q: "DRS in Formula 1 works by…",
    opts: ["Opening a flap in the rear wing to cut drag", "Boosting the hybrid deployment", "Softening the suspension", "Widening the front wing"], a: 0 },

  { lvl: "PH", q: "The first hybrid to win Le Mans outright (2012) was…",
    opts: ["Audi R18 e-tron quattro", "Toyota TS030", "Porsche 919", "Peugeot 908"], a: 0 },

  { lvl: "PH", q: "Each tyre grips the road through a contact patch roughly the size of…",
    opts: ["Your palm", "A dinner plate", "A bath towel", "A coin"], a: 0 },

  { lvl: "PH", q: "The car snaps into OVERSTEER mid-corner. Classic correction?",
    opts: ["Steer into the slide and ease the throttle smoothly", "Brake hard and steer away from the slide", "Pull the handbrake", "Accelerate flat out"], a: 0 },

  { lvl: "PH", q: "Which part of the car is highlighted in orange?",
    opts: ["The alloy wheel", "The brake disc", "The wheel-arch liner", "The hub cap"], a: 0,
    gfx: { type: "car", part: "wheel" } }
];

/* ==================== PACK REGISTRY ==================== */
const PACKS = {
  sail: { name: "Night Watch — Sailing", icon: "\u26F5",  levels: SAIL_LEVELS, questions: SAIL_QUESTIONS },
  cars: { name: "Pit Lane — Petrolheads", icon: "\uD83C\uDFCE\uFE0F", levels: CAR_LEVELS, questions: CAR_QUESTIONS }
};
