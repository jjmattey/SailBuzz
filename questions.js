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
,
  { lvl: "DS", q: "Night passage. This white light never stops its rapid flashing. What is it?",
    opts: ["A north cardinal mark — pass NORTH of it", "A south cardinal mark", "A safe water mark", "A lighthouse"], a: 0,
    gfx: { type: "flash", pattern: "N" } },

  { lvl: "CS", q: "Watch the rhythm: quick flashes in groups of THREE. Which mark is this?",
    opts: ["East cardinal — pass EAST of it", "West cardinal", "North cardinal", "Isolated danger mark"], a: 0,
    gfx: { type: "flash", pattern: "E" } },

  { lvl: "CS", q: "Six quick flashes then one LONG flash, over and over. You should pass…",
    opts: ["SOUTH of it — it's a south cardinal", "NORTH of it", "Close on either side", "Between it and the shore"], a: 0,
    gfx: { type: "flash", pattern: "S" } },

  { lvl: "CS", q: "Count them — NINE quick flashes in each group. What lies at this mark?",
    opts: ["Danger to the east — it's a west cardinal, pass WEST", "Danger to the west", "Safe water all round", "A wreck you may pass either side"], a: 0,
    gfx: { type: "flash", pattern: "W" } },

  { lvl: "CS", q: "A white light flashing in groups of TWO. What's beneath it?",
    opts: ["An isolated danger — keep clear, water is safe around it", "Safe water all round", "A north cardinal's shoal", "The harbour entrance"], a: 0,
    gfx: { type: "flash", pattern: "ID" } },

  { lvl: "DS", q: "One LONG lazy flash every few seconds. What welcome sight is this?",
    opts: ["A safe water mark — navigable water all around", "An isolated danger mark", "A vessel aground", "An east cardinal"], a: 0,
    gfx: { type: "flash", pattern: "SW" } }
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

/* ==================== SHOWROOM PACK — models & engines ==================== */
const SHOW_LEVELS = {
  SR: { label: "SHOWROOM",  pts: 10, pen: 5,  base: 100, color: "#2EE38A" },
  TU: { label: "TUNER",     pts: 15, pen: 7,  base: 150, color: "#FFC845" },
  CO: { label: "COLLECTOR", pts: 20, pen: 10, base: 200, color: "#FF4757" }
};

const SHOW_QUESTIONS = [
  /* ---------- SHOWROOM ---------- */
  { lvl: "SR", q: "Which 1976 hatchback kicked off the hot-hatch craze?",
    opts: ["VW Golf GTI", "Ford Escort XR3", "Peugeot 205 GTI", "Renault 5 Turbo"], a: 0 },

  { lvl: "SR", q: "The original Mini was designed by…",
    opts: ["Alec Issigonis", "Colin Chapman", "William Lyons", "Giorgetto Giugiaro"], a: 0 },

  { lvl: "SR", q: "The Porsche 911 famously uses this engine layout. What is it?",
    opts: ["Flat-six (boxer)", "V6", "Straight-six", "V8"], a: 0,
    gfx: { type: "engine", layout: "flat6" } },

  { lvl: "SR", q: "The VW Beetle kept its engine…",
    opts: ["In the back, air-cooled", "Up front, water-cooled", "In the middle", "Under the boot floor, front-mid"], a: 0 },

  { lvl: "SR", q: "Which car does James Bond drive in Goldfinger?",
    opts: ["Aston Martin DB5", "Jaguar E-Type", "Lotus Esprit", "Bentley Continental"], a: 0 },

  { lvl: "SR", q: "The first mass-produced hybrid car was the…",
    opts: ["Toyota Prius", "Honda Insight", "Nissan Leaf", "Chevrolet Volt"], a: 0 },

  { lvl: "SR", q: "Enzo Ferrari reportedly called this \"the most beautiful car ever made\"…",
    opts: ["Jaguar E-Type", "Lamborghini Miura", "Ferrari 250 GTO", "Alfa Romeo Spider"], a: 0 },

  { lvl: "SR", q: "The Reliant Robin is famous for having…",
    opts: ["Three wheels", "No reverse gear", "A wooden chassis", "Two engines"], a: 0 },

  { lvl: "SR", q: "The classic American muscle-car engine layout shown here is a…",
    opts: ["V8", "Flat-eight", "Straight-eight", "W8"], a: 0,
    gfx: { type: "engine", layout: "v8" } },

  { lvl: "SR", q: "Which company builds the Defender?",
    opts: ["Land Rover", "Jeep", "Toyota", "Suzuki"], a: 0 },

  { lvl: "SR", q: "The world's best-selling two-seat sports car is the…",
    opts: ["Mazda MX-5", "Porsche Boxster", "Toyota MR2", "Fiat 124 Spider"], a: 0 },

  { lvl: "SR", q: "The last Ferrari personally approved by Enzo before his death was the…",
    opts: ["F40", "Testarossa", "288 GTO", "F50"], a: 0 },

  /* ---------- TUNER ---------- */
  { lvl: "TU", q: "Mazda's RX-7 used this unusual engine. What is it?",
    opts: ["A Wankel rotary", "A two-stroke triple", "A radial", "A turbine"], a: 0,
    gfx: { type: "engine", layout: "rotary" } },

  { lvl: "TU", q: "The Mk4 Toyota Supra's legendary engine code is…",
    opts: ["2JZ-GTE", "RB26DETT", "SR20DET", "K20A"], a: 0 },

  { lvl: "TU", q: "The Nissan Skyline GT-R (R32–R34) was powered by the…",
    opts: ["RB26DETT twin-turbo straight-six", "VQ35 V6", "SR20 four", "VR38 V6"], a: 0 },

  { lvl: "TU", q: "BMW built its reputation on this silky engine layout…",
    opts: ["Straight-six", "V6", "Flat-six", "V12 only"], a: 0,
    gfx: { type: "engine", layout: "i6" } },

  { lvl: "TU", q: "The Bugatti Veyron's engine is a quad-turbo…",
    opts: ["8.0-litre W16", "6.0-litre V12", "8.0-litre V10", "7.0-litre W12"], a: 0 },

  { lvl: "TU", q: "Which supercar was developed with input from Ayrton Senna?",
    opts: ["Honda NSX", "Ferrari F355", "Porsche 959", "Jaguar XJ220"], a: 0 },

  { lvl: "TU", q: "The Lamborghini Miura is celebrated as the first…",
    opts: ["Mid-engined V12 supercar", "Four-wheel-drive supercar", "Carbon-fibre car", "Turbocharged Lamborghini"], a: 0 },

  { lvl: "TU", q: "Ford's GT40 famously finished 1-2-3 at Le Mans in 1966, beating…",
    opts: ["Ferrari", "Porsche", "Jaguar", "Aston Martin"], a: 0 },

  { lvl: "TU", q: "The Audi Quattro changed rallying in 1980 by bringing…",
    opts: ["Four-wheel drive", "Turbocharging", "Sequential gearboxes", "Carbon brakes"], a: 0 },

  { lvl: "TU", q: "The Citroën DS amazed 1955 crowds with its…",
    opts: ["Hydropneumatic self-levelling suspension", "Rotary engine", "Four-wheel steering", "Gas turbine"], a: 0 },

  { lvl: "TU", q: "Subaru's characteristic engine rumble comes from its…",
    opts: ["Flat-four boxer layout", "V6 layout", "Five-cylinder layout", "Supercharger"], a: 0 },

  { lvl: "TU", q: "Lamborghini names most of its cars after…",
    opts: ["Fighting bulls", "Italian towns", "Winds", "Founders' children"], a: 0 },

  /* ---------- COLLECTOR ---------- */
  { lvl: "CO", q: "The Mercedes 300SL Gullwing was the first production car with…",
    opts: ["Fuel injection", "Disc brakes", "A turbocharger", "Anti-lock brakes"], a: 0 },

  { lvl: "CO", q: "The McLaren F1's V12 was built by…",
    opts: ["BMW", "Honda", "Mercedes", "McLaren themselves"], a: 0 },

  { lvl: "CO", q: "What made the McLaren F1's cabin unique?",
    opts: ["A central driving seat with a passenger each side", "No windscreen", "Tandem seating", "A removable steering wheel"], a: 0 },

  { lvl: "CO", q: "Chevrolet's classic \"350\" small-block V8 displaces roughly…",
    opts: ["5.7 litres", "3.5 litres", "7.0 litres", "4.6 litres"], a: 0 },

  { lvl: "CO", q: "The winningest engine in Formula 1 history is the…",
    opts: ["Cosworth DFV", "Ferrari flat-12", "Honda RA168E", "Renault EF15"], a: 0 },

  { lvl: "CO", q: "Honda's S2000 (F20C) was famous for making about…",
    opts: ["120 bhp per litre without a turbo", "200 bhp per litre with twin turbos", "60 bhp per litre", "90 bhp per litre with a supercharger"], a: 0 },

  { lvl: "CO", q: "The Pagani Zonda is powered by an engine from…",
    opts: ["Mercedes-AMG", "Ferrari", "BMW M", "Lamborghini"], a: 0 },

  { lvl: "CO", q: "The Lexus LFA needed a digital rev counter because…",
    opts: ["Its V10 revved too fast for an analogue needle", "Analogue dials were banned in Japan", "It had no alternator", "The V10 vibrated too much"], a: 0 },

  { lvl: "CO", q: "Koenigsegg builds its hypercars in…",
    opts: ["Sweden", "Germany", "Switzerland", "Denmark"], a: 0 },

  { lvl: "CO", q: "The first production car to top 300 mph was the…",
    opts: ["Bugatti Chiron Super Sport 300+", "Koenigsegg Agera RS", "Hennessey Venom GT", "SSC Ultimate Aero"], a: 0 },

  { lvl: "CO", q: "Porsche's all-conquering 917 Le Mans racer used a…",
    opts: ["Flat-twelve", "V12", "Flat-six", "V10"], a: 0 },

  { lvl: "CO", q: "The BMW E30 M3's high-revving engine was unusual for an M3 because it was a…",
    opts: ["Four-cylinder", "V8", "Straight-six", "V6"], a: 0 },

  /* ---------- photo rounds (images from Wikipedia / Wikimedia Commons) ---------- */
  { lvl: "SR", q: "Name this car.",
    opts: ["VW Beetle", "Fiat 500", "Morris Minor", "Citro\u00EBn 2CV"], a: 0,
    photo: { wiki: "Volkswagen_Beetle" } },

  { lvl: "SR", q: "Name this car.",
    opts: ["The classic Mini", "Fiat 500", "Hillman Imp", "Austin Allegro"], a: 0,
    photo: { wiki: "Mini" } },

  { lvl: "SR", q: "Name this car.",
    opts: ["Porsche 911", "Porsche 928", "Jaguar XJS", "Datsun 240Z"], a: 0,
    photo: { wiki: "Porsche_911" } },

  { lvl: "SR", q: "Gullwing doors, stainless steel, time travel. Name this car.",
    opts: ["DMC DeLorean", "Bricklin SV-1", "Lotus Esprit", "Mercedes 300SL"], a: 0,
    photo: { wiki: "DMC_DeLorean" } },

  { lvl: "TU", q: "Name this car.",
    opts: ["Jaguar E-Type", "Aston Martin DB6", "Triumph Spitfire", "MGB GT"], a: 0,
    photo: { wiki: "Jaguar_E-Type" } },

  { lvl: "TU", q: "Name this car.",
    opts: ["Mazda MX-5", "Toyota MR2", "Lotus Elan", "Honda S2000"], a: 0,
    photo: { wiki: "Mazda_MX-5" } },

  { lvl: "TU", q: "Name this futuristic 1950s icon.",
    opts: ["Citro\u00EBn DS", "Renault 16", "Peugeot 404", "NSU Ro 80"], a: 0,
    photo: { wiki: "Citro\u00EBn_DS" } },

  { lvl: "TU", q: "Name this car.",
    opts: ["Bugatti Veyron", "Bugatti Chiron", "McLaren MP4-12C", "Pagani Huayra"], a: 0,
    photo: { wiki: "Bugatti_Veyron" } },

  { lvl: "CO", q: "Name this car.",
    opts: ["Lamborghini Miura", "Ferrari 365 Daytona", "De Tomaso Pantera", "Maserati Ghibli"], a: 0,
    photo: { wiki: "Lamborghini_Miura" } },

  { lvl: "CO", q: "Name this Le Mans legend.",
    opts: ["Ford GT40", "Lola T70", "Ferrari 330 P4", "Porsche 917"], a: 0,
    photo: { wiki: "Ford_GT40" } },

  { lvl: "CO", q: "Name this car.",
    opts: ["Ferrari F40", "Ferrari 288 GTO", "Lancia Stratos", "Ferrari Testarossa"], a: 0,
    photo: { wiki: "Ferrari_F40" } },

  { lvl: "CO", q: "Name Bond's most famous company car.",
    opts: ["Aston Martin DB5", "Aston Martin DB4", "Jensen Interceptor", "Bristol 411"], a: 0,
    photo: { wiki: "Aston_Martin_DB5" } }
];

/* ==================== PACK REGISTRY ==================== */
const PACKS = {
  sail: { name: "Night Watch — Sailing", icon: "\u26F5",  levels: SAIL_LEVELS, questions: SAIL_QUESTIONS },
  cars: { name: "Pit Lane — Petrolheads", icon: "\uD83C\uDFCE\uFE0F", levels: CAR_LEVELS, questions: CAR_QUESTIONS },
  show: { name: "Showroom — Models & Engines", icon: "\uD83D\uDD27", levels: SHOW_LEVELS, questions: SHOW_QUESTIONS }
};

/* ==================== EXTRA PHOTO CARS (Wikipedia lead images) ====================
   [tier, wiki article, correct answer, [three distractors]] */
const PHOTO_BANK = [
["SR","Ford_Mustang","Ford Mustang",["Chevrolet Camaro","Dodge Challenger","Pontiac Firebird"]],
["SR","Chevrolet_Camaro","Chevrolet Camaro",["Ford Mustang","Dodge Challenger","AMC Javelin"]],
["SR","Dodge_Challenger","Dodge Challenger",["Dodge Charger","Chevrolet Camaro","Ford Mustang"]],
["SR","Volkswagen_Golf","Volkswagen Golf",["Ford Focus","Vauxhall Astra","Peugeot 306"]],
["SR","Ford_Fiesta","Ford Fiesta",["VW Polo","Vauxhall Corsa","Renault Clio"]],
["SR","Ford_Focus","Ford Focus",["VW Golf","Vauxhall Astra","Renault Megane"]],
["SR","Honda_Civic","Honda Civic",["Toyota Corolla","VW Golf","Ford Focus"]],
["SR","Toyota_Corolla","Toyota Corolla",["Honda Civic","Nissan Sunny","Mazda 323"]],
["SR","Fiat_500","Fiat 500",["Classic Mini","Citroën 2CV","Smart Fortwo"]],
["SR","Citroën_2CV","Citroën 2CV",["VW Beetle","Fiat 500","Renault 4"]],
["SR","Renault_Clio","Renault Clio",["Peugeot 208","Ford Fiesta","VW Polo"]],
["SR","Peugeot_205","Peugeot 205",["Renault 5","VW Golf","Ford Escort"]],
["SR","Renault_5","Renault 5",["Peugeot 205","Fiat Uno","Austin Metro"]],
["SR","Mini_Hatch","The modern MINI",["Fiat 500","New Beetle","Audi A1"]],
["SR","Land_Rover_Defender","Land Rover Defender",["Jeep Wrangler","Toyota Land Cruiser","Mercedes G-Wagen"]],
["SR","Jeep_Wrangler","Jeep Wrangler",["Land Rover Defender","Ford Bronco","Suzuki Jimny"]],
["SR","Mercedes-Benz_G-Class","Mercedes G-Class",["Land Rover Defender","Jeep Wrangler","Range Rover"]],
["SR","Range_Rover","Range Rover",["Land Rover Discovery","Porsche Cayenne","BMW X5"]],
["SR","Toyota_Land_Cruiser","Toyota Land Cruiser",["Nissan Patrol","Land Rover Defender","Mitsubishi Shogun"]],
["SR","Toyota_Hilux","Toyota Hilux",["Ford Ranger","Nissan Navara","Mitsubishi L200"]],
["SR","Volkswagen_Type_2","VW Type 2 camper",["Bedford CA","Ford Transit","Renault Estafette"]],
["SR","Ford_Transit","Ford Transit",["Mercedes Sprinter","VW Crafter","Renault Trafic"]],
["SR","Tesla_Model_S","Tesla Model S",["Tesla Model 3","Porsche Taycan","Polestar 2"]],
["SR","Tesla_Model_3","Tesla Model 3",["Tesla Model S","Nissan Leaf","BMW i4"]],
["SR","Nissan_Leaf","Nissan Leaf",["Renault Zoe","BMW i3","Toyota Prius"]],
["SR","BMW_i3","BMW i3",["Nissan Leaf","Renault Zoe","VW e-Golf"]],
["SR","Smart_Fortwo","Smart Fortwo",["Renault Twizy","Toyota iQ","Fiat 500"]],
["SR","Ford_Capri","Ford Capri",["Opel Manta","Toyota Celica","Ford Cortina"]],
["SR","Ford_Cortina","Ford Cortina",["Ford Escort","Vauxhall Viva","Morris Marina"]],
["SR","Ford_Escort_(Europe)","Ford Escort",["Ford Cortina","Vauxhall Chevette","Morris Marina"]],
["SR","Ford_Anglia","Ford Anglia",["Morris Minor","Ford Prefect","Austin A35"]],
["SR","Morris_Minor","Morris Minor",["Ford Anglia","VW Beetle","Austin A35"]],
["SR","Vauxhall_Corsa","Vauxhall Corsa",["Ford Fiesta","VW Polo","Renault Clio"]],
["SR","Volkswagen_Polo","VW Polo",["VW Golf","Ford Fiesta","Seat Ibiza"]],
["SR","Austin_Metro","Austin Metro",["Ford Fiesta","Vauxhall Nova","VW Polo"]],
["SR","Trabant","Trabant",["Wartburg","Lada Riva","Škoda 105"]],
["SR","Lada_Riva","Lada Riva",["Trabant","Fiat 124","Moskvitch"]],
["SR","Volvo_240","Volvo 240",["Saab 900","Mercedes W123","Ford Granada"]],
["SR","Saab_900","Saab 900",["Volvo 240","Audi 80","Alfa Romeo Alfetta"]],
["SR","Jaguar_XJ","Jaguar XJ",["Mercedes S-Class","BMW 7 Series","Rover P5"]],
["SR","Rolls-Royce_Silver_Shadow","Rolls-Royce Silver Shadow",["Bentley T-Series","Daimler DS420","Jaguar 420G"]],
["SR","Bentley_Continental_GT","Bentley Continental GT",["Aston Martin DB9","Porsche 911","Mercedes S Coupé"]],
["SR","Chevrolet_Corvette","Chevrolet Corvette",["Dodge Viper","Ford Mustang","Chevrolet Camaro"]],
["SR","Dodge_Viper","Dodge Viper",["Chevrolet Corvette","AC Cobra","Ford GT"]],
["SR","Ford_Model_T","Ford Model T",["Ford Model A","Austin 7","Bullnose Morris"]],
["SR","Austin_7","Austin 7",["Ford Model T","Morris Minor","Ford Anglia"]],
["SR","Hummer_H1","Hummer H1",["Jeep Wrangler","Land Rover Defender","Mercedes G-Class"]],
["SR","Audi_TT","Audi TT",["BMW Z3","Mercedes SLK","Toyota MR2"]],
["SR","BMW_Z3","BMW Z3",["Audi TT","Mercedes SLK","Mazda MX-5"]],
["SR","Mercedes-Benz_SLK-Class","Mercedes SLK",["BMW Z3","Audi TT","Porsche Boxster"]],
["SR","Porsche_Boxster","Porsche Boxster",["Porsche Cayman","BMW Z4","Audi TT"]],
["SR","Mazda_RX-8","Mazda RX-8",["Mazda RX-7","Nissan 350Z","Honda S2000"]],
["SR","Nissan_350Z","Nissan 350Z",["Mazda RX-8","Toyota Supra","Porsche Cayman"]],
["SR","Volkswagen_Scirocco","VW Scirocco",["VW Golf","Ford Capri","Opel Manta"]],
["SR","Ford_Bronco","Ford Bronco",["Jeep Wrangler","Land Rover Defender","Toyota FJ"]],
["TU","Toyota_Supra","Toyota Supra",["Nissan Skyline GT-R","Mazda RX-7","Nissan 300ZX"]],
["TU","Nissan_Skyline_GT-R","Nissan Skyline GT-R",["Toyota Supra","Nissan GT-R (R35)","Mitsubishi Evo"]],
["TU","Nissan_GT-R","Nissan GT-R",["Nissan Skyline GT-R","Toyota Supra","Honda NSX"]],
["TU","Mazda_RX-7","Mazda RX-7",["Toyota Supra","Nissan 240SX","Honda NSX"]],
["TU","Subaru_Impreza","Subaru Impreza",["Mitsubishi Lancer Evo","Toyota Celica GT-Four","Subaru Legacy"]],
["TU","Mitsubishi_Lancer_Evolution","Mitsubishi Lancer Evolution",["Subaru Impreza","Nissan Skyline","Honda Integra"]],
["TU","Toyota_AE86","Toyota AE86",["Nissan 240SX","Honda Civic","Toyota Starlet"]],
["TU","Toyota_MR2","Toyota MR2",["Mazda MX-5","Pontiac Fiero","Lotus Elise"]],
["TU","Honda_Integra_Type_R","Honda Integra Type R",["Honda Civic Type R","Honda Prelude","Mazda RX-8"]],
["TU","BMW_M3","BMW M3",["BMW M5","Audi RS4","Mercedes C63 AMG"]],
["TU","BMW_M5","BMW M5",["BMW M3","Mercedes E55 AMG","Audi RS6"]],
["TU","Lancia_Delta","Lancia Delta",["Audi Quattro","Ford Escort Cosworth","Subaru Impreza"]],
["TU","Lancia_Stratos","Lancia Stratos",["Lancia 037","Alpine A110","Dino 246"]],
["TU","Ford_Sierra_RS_Cosworth","Ford Sierra RS Cosworth",["Ford Escort Cosworth","BMW M3","Mercedes 190E"]],
["TU","Ford_Escort_RS_Cosworth","Ford Escort RS Cosworth",["Ford Sierra Cosworth","Subaru Impreza","Mitsubishi Evo"]],
["TU","Ford_RS200","Ford RS200",["Peugeot 205 T16","Lancia Delta S4","MG Metro 6R4"]],
["TU","Renault_5_Turbo","Renault 5 Turbo",["Peugeot 205 T16","Lancia Stratos","Alpine A110"]],
["TU","Alpine_A110","Alpine A110",["Lancia Stratos","Porsche 911","Lotus Elan"]],
["TU","Porsche_944","Porsche 944",["Porsche 928","Porsche 924","Porsche 968"]],
["TU","Porsche_928","Porsche 928",["Porsche 944","Jaguar XJS","Toyota Supra"]],
["TU","Porsche_959","Porsche 959",["Ferrari F40","Ferrari 288 GTO","Porsche 911 Turbo"]],
["TU","Ferrari_Testarossa","Ferrari Testarossa",["Lamborghini Countach","Ferrari 512 BB","Lamborghini Diablo"]],
["TU","Ferrari_F355","Ferrari F355",["Ferrari 348","Ferrari 360","Ferrari Testarossa"]],
["TU","Ferrari_360","Ferrari 360",["Ferrari F355","Ferrari F430","Lamborghini Gallardo"]],
["TU","Lamborghini_Countach","Lamborghini Countach",["Lamborghini Diablo","Ferrari Testarossa","De Tomaso Pantera"]],
["TU","Lamborghini_Diablo","Lamborghini Diablo",["Lamborghini Countach","Lamborghini Murciélago","Ferrari 512 TR"]],
["TU","Lamborghini_Murciélago","Lamborghini Murciélago",["Lamborghini Diablo","Lamborghini Aventador","Ferrari 599"]],
["TU","Lamborghini_Gallardo","Lamborghini Gallardo",["Lamborghini Huracán","Ferrari 360","Audi R8"]],
["TU","Lamborghini_Aventador","Lamborghini Aventador",["Lamborghini Huracán","Lamborghini Murciélago","Pagani Huayra"]],
["TU","Audi_R8","Audi R8",["Lamborghini Gallardo","BMW i8","McLaren 570S"]],
["TU","McLaren_P1","McLaren P1",["LaFerrari","Porsche 918","McLaren Senna"]],
["TU","LaFerrari","LaFerrari",["McLaren P1","Porsche 918","Ferrari Enzo"]],
["TU","Porsche_918_Spyder","Porsche 918 Spyder",["McLaren P1","LaFerrari","Porsche Carrera GT"]],
["TU","Porsche_Carrera_GT","Porsche Carrera GT",["Porsche 918","Pagani Zonda","Ferrari Enzo"]],
["TU","Ferrari_Enzo","Ferrari Enzo",["Ferrari F50","LaFerrari","Pagani Zonda"]],
["TU","Ferrari_F50","Ferrari F50",["Ferrari Enzo","Ferrari F40","Ferrari 360"]],
["TU","Pagani_Huayra","Pagani Huayra",["Pagani Zonda","Koenigsegg Agera","Bugatti Chiron"]],
["TU","Koenigsegg_Agera","Koenigsegg Agera",["Koenigsegg CCX","Pagani Zonda","Bugatti Veyron"]],
["TU","Bugatti_Chiron","Bugatti Chiron",["Bugatti Veyron","Koenigsegg Agera","Bugatti Divo"]],
["TU","Lotus_Elise","Lotus Elise",["Lotus Exige","Mazda MX-5","Ariel Atom"]],
["TU","Lotus_Esprit","Lotus Esprit",["Ferrari 308","De Tomaso Pantera","Triumph TR7"]],
["TU","Caterham_7","Caterham 7",["Ariel Atom","Westfield SE","Lotus Elan"]],
["TU","Ariel_Atom","Ariel Atom",["Caterham 7","KTM X-Bow","BAC Mono"]],
["TU","Mercedes-Benz_SLS_AMG","Mercedes SLS AMG",["Mercedes 300SL","Mercedes-AMG GT","Dodge Viper"]],
["TU","Ford_GT","Ford GT",["Ford GT40","Chevrolet Corvette","Dodge Viper"]],
["TU","Dodge_Charger","Dodge Charger",["Dodge Challenger","Ford Mustang","Pontiac GTO"]],
["TU","Honda_Civic_Type_R","Honda Civic Type R",["Honda Integra Type R","VW Golf GTI","Ford Focus RS"]],
["TU","Ford_Focus_RS","Ford Focus RS",["Honda Civic Type R","VW Golf R","Subaru Impreza"]],
["CO","Ferrari_250_GTO","Ferrari 250 GTO",["Ferrari 275 GTB","Ferrari 330","Ferrari Daytona"]],
["CO","Ferrari_Daytona","Ferrari Daytona",["Ferrari 275 GTB","Lamborghini Miura","Maserati Ghibli"]],
["CO","Jaguar_D-Type","Jaguar D-Type",["Jaguar C-Type","Jaguar XK120","Aston Martin DB3S"]],
["CO","Jaguar_XK120","Jaguar XK120",["Austin-Healey 100","Mercedes 300SL","MGA"]],
["CO","Jaguar_XJ220","Jaguar XJ220",["Bugatti EB110","Ferrari F40","Lamborghini Diablo"]],
["CO","Aston_Martin_DB4","Aston Martin DB4",["Aston Martin DB5","Aston Martin DB6","Jaguar E-Type"]],
["CO","Aston_Martin_Lagonda","Aston Martin Lagonda",["Jaguar XJS","Lamborghini Espada","Lancia Gamma"]],
["CO","AC_Cobra","AC Cobra",["Chevrolet Corvette","TVR Griffith","Austin-Healey 3000"]],
["CO","Austin-Healey_3000","Austin-Healey 3000",["MGA","Triumph TR3","Jaguar XK120"]],
["CO","MG_MGB","MG MGB",["Triumph Spitfire","MG Midget","Triumph TR6"]],
["CO","Triumph_Spitfire","Triumph Spitfire",["MG MGB","MG Midget","Lotus Elan"]],
["CO","Mercedes-Benz_600","Mercedes-Benz 600",["Rolls-Royce Silver Shadow","Rolls-Royce Phantom V","Daimler Majestic"]],
["CO","BMW_507","BMW 507",["Mercedes 300SL","Jaguar XK140","Alfa Giulietta Spider"]],
["CO","BMW_M1","BMW M1",["De Tomaso Pantera","Lamborghini Urraco","Maserati Merak"]],
["CO","BMW_3.0_CSL","BMW 3.0 CSL",["BMW 2002","Ford Capri RS","Alfa GTV"]],
["CO","Toyota_2000GT","Toyota 2000GT",["Datsun 240Z","Jaguar E-Type","Mazda Cosmo"]],
["CO","Mazda_Cosmo","Mazda Cosmo",["Toyota 2000GT","Honda S800","Isuzu 117"]],
["CO","Datsun_240Z","Datsun 240Z",["Toyota Celica","Toyota 2000GT","Datsun 280ZX"]],
["CO","Alfa_Romeo_33_Stradale","Alfa Romeo 33 Stradale",["Lamborghini Miura","Dino 246","De Tomaso Mangusta"]],
["CO","Alfa_Romeo_Spider","Alfa Romeo Spider",["MG MGB","Fiat 124 Spider","Lotus Elan"]],
["CO","De_Tomaso_Pantera","De Tomaso Pantera",["De Tomaso Mangusta","BMW M1","Lamborghini Urraco"]],
["CO","Lamborghini_Espada","Lamborghini Espada",["Maserati Ghibli","Jensen Interceptor","Ferrari 365 GT"]],
["CO","Maserati_Bora","Maserati Bora",["Maserati Merak","De Tomaso Pantera","Lamborghini Urraco"]],
["CO","Lancia_037","Lancia 037",["Lancia Stratos","Peugeot 205 T16","Audi Sport Quattro"]],
["CO","Audi_Sport_Quattro","Audi Sport Quattro",["Audi Quattro","Peugeot 205 T16","Lancia Delta S4"]],
["CO","Peugeot_205_Turbo_16","Peugeot 205 T16",["Ford RS200","Lancia Delta S4","Audi Sport Quattro"]],
["CO","Bugatti_Type_35","Bugatti Type 35",["Alfa Romeo P2","Bentley Blower","Mercedes SSK"]],
["CO","Bugatti_EB110","Bugatti EB110",["Jaguar XJ220","Ferrari F40","Lamborghini Diablo"]],
["CO","Duesenberg_Model_J","Duesenberg Model J",["Packard Twelve","Cord 812","Cadillac V16"]],
["CO","Tucker_48","Tucker 48",["Studebaker Champion","Hudson Hornet","DeSoto Custom"]],
["CO","Citroën_Traction_Avant","Citroën Traction Avant",["Citroën DS","Peugeot 402","Renault Juvaquatre"]],
["CO","Citroën_SM","Citroën SM",["Citroën DS","Lamborghini Espada","Lancia Gamma"]],
["CO","Shelby_Daytona","Shelby Daytona Coupe",["Ford GT40","AC Cobra","Ferrari 250 GTO"]],
["CO","Porsche_917","Porsche 917",["Porsche 908","Ford GT40","Ferrari 512"]],
["CO","Porsche_550","Porsche 550 Spyder",["Porsche 356","MGA","Ferrari Testa Rossa"]],
["CO","Porsche_356","Porsche 356",["VW Beetle","Porsche 550","VW Karmann Ghia"]],
["CO","Volkswagen_Karmann_Ghia","VW Karmann Ghia",["Porsche 356","Ghia 1500","MGB GT"]],
["CO","Plymouth_Barracuda","Plymouth Barracuda",["Dodge Challenger","Ford Mustang","AMC AMX"]],
["CO","Pontiac_GTO","Pontiac GTO",["Chevrolet Chevelle","Oldsmobile 442","Dodge Charger"]],
["CO","Chevrolet_Chevelle","Chevrolet Chevelle",["Pontiac GTO","Ford Torino","Dodge Charger"]],
["CO","Lincoln_Continental","Lincoln Continental",["Cadillac Eldorado","Chrysler Imperial","Ford Thunderbird"]],
["CO","Cadillac_Eldorado","Cadillac Eldorado",["Lincoln Continental","Buick Riviera","Chrysler Imperial"]],
["CO","Ford_Thunderbird","Ford Thunderbird",["Chevrolet Corvette","Cadillac Eldorado","Chevrolet Impala"]],
["CO","Jensen_Interceptor","Jensen Interceptor",["Aston Martin DBS","Maserati Ghibli","Lamborghini Espada"]],
["CO","Lotus_Elan","Lotus Elan",["Triumph Spitfire","MG Midget","Alfa Duetto"]],
["CO","TVR_Griffith","TVR Griffith",["TVR Chimaera","AC Cobra","Marcos LM"]],
["CO","Ford_Escort_RS1800","Ford Escort RS1800",["Ford Escort Mexico","Vauxhall Chevette HS","Talbot Sunbeam Lotus"]],
["CO","MG_Metro_6R4","MG Metro 6R4",["Ford RS200","Peugeot 205 T16","Lancia Delta S4"]]
];
for (const [lvl, wiki, right, wrongs] of PHOTO_BANK)
  SHOW_QUESTIONS.push({ lvl, q: "Name this car.", opts: [right, wrongs[0], wrongs[1], wrongs[2]], a: 0, photo: { wiki } });

/* ==================== EXTRA SAILING QUESTIONS (RYA-style) ====================
   [lvl, question, correct, wrong, wrong, wrong] */
const SAIL_EXTRA = [
/* --- knots & lines (CC) --- */
["CC","Which knot makes a fixed loop that won't slip — the sailor's favourite?","Bowline","Reef knot","Clove hitch","Sheet bend"],
["CC","Quick, adjustable knot for hanging fenders on a rail?","Clove hitch","Bowline","Figure-of-eight","Sheet bend"],
["CC","Securing to a ring or post so it takes strain without jamming?","Round turn and two half hitches","Reef knot","Figure-of-eight","Granny knot"],
["CC","Joining two ropes of different thickness?","Sheet bend","Reef knot","Bowline","Clove hitch"],
["CC","Stopper knot in the end of a sheet so it can't run through the block?","Figure-of-eight","Bowline","Reef knot","Half hitch"],
["CC","Which knot grips and slides along another rope under load?","Rolling hitch","Clove hitch","Bowline","Cow hitch"],
["CC","Starting a line on a cleat, the first move is…","A full round turn","A locking hitch","Two loops","A bowline"],
["CC","The reef knot is designed for…","Tying two ends of the same rope round something","Towing a dinghy","Mooring to a ring","Making a loop"],
["CC","A bowline's one weakness is that it…","Can't be tied or untied under load","Slips constantly","Weakens the rope by 90%","Only works in wet rope"],
["CC","Coiling a rope, you should…","Coil with the lay so it hangs in even loops","Coil against the lay","Wrap it round your elbow tightly","Knot every loop"],
["CC","The rope that hoists a sail is the…","Halyard","Sheet","Guy","Warp"],
["CC","The ropes you trim sails with are the…","Sheets","Halyards","Painters","Stays"],
["CC","The kicker (vang) does what?","Holds the boom down","Hoists the mainsail","Steers the boat","Tensions the forestay"],
["CC","The outhaul tensions which edge of the mainsail?","The foot","The luff","The leech","The head"],
["CC","A tender's bow line is called the…","Painter","Warp","Spring","Lanyard"],
["CC","Mooring warps that stop the boat surging fore and aft are…","Springs","Breast lines","Painters","Lazy lines"],
["CC","You always wind rope around a winch…","Clockwise","Anticlockwise","Either way","Over the top"],
["DS","A fairlead's job is to…","Guide a line at a friendly angle","Add purchase","Lock the rope","Measure the load"],
/* --- sail anatomy & terms (CC) --- */
["CC","The front edge of a sail is the…","Luff","Leech","Foot","Clew"],
["CC","The back edge of a sail is the…","Leech","Luff","Foot","Tack"],
["CC","The bottom edge of a sail is the…","Foot","Head","Luff","Leech"],
["CC","The top corner of a sail is the…","Head","Tack","Clew","Peak"],
["CC","The forward lower corner of a sail is the…","Tack","Clew","Head","Throat"],
["CC","The aft lower corner of a sail — where the sheet attaches — is the…","Clew","Tack","Head","Foot"],
["CC","The side of the boat away from the wind is…","Leeward","Windward","Aft","Abeam"],
["CC","\"In irons\" means…","Stuck head-to-wind, going nowhere","Anchored securely","Heeled right over","Under tow"],
["CC","Turning the bow through the wind is…","Tacking","Gybing","Wearing","Luffing"],
["CC","Turning the stern through the wind is…","Gybing","Tacking","Broaching","Heaving-to"],
["CC","\"Bear away\" means turn…","Away from the wind","Towards the wind","To port","Back the way you came"],
["CC","\"Luff up\" means turn…","Towards the wind","Away from the wind","Downtide","To starboard"],
["CC","Telltales streaming aft on both sides of the jib mean…","The sail is trimmed about right","You must sheet in hard","The sail is stalled","Time to reef"],
["CC","The helm shouts \"Ready about!\" — what's coming?","A tack","A gybe","Anchoring","Man overboard drill"],
["CC","During a gybe, the crew's main job is to…","Duck — the boom is coming across","Jump to the bow","Let all sheets fly","Drop the anchor"],
["CC","Sailing goosewinged means…","Main and headsail set on opposite sides","Two headsails up","Sailing backwards","Sails down, engine on"],
["CC","Reefing is…","Reducing sail area","Adding more sail","Cleaning the hull","Coiling ropes"],
["CC","The best time to reef is…","The first time you think about it","When the rail is under","After something breaks","Only in harbour"],
/* --- points of sail & handling (CC/DS) --- */
["CC","Close-hauled, most yachts sail about how close to the wind?","45 degrees","10 degrees","90 degrees","70 degrees"],
["CC","The no-go zone is roughly…","40–45° either side of the wind","5° either side","90° either side","Directly downwind"],
["CC","With the wind directly over the side of the boat you are on a…","Beam reach","Run","Close haul","Training run"],
["CC","The big risk sailing dead downwind is…","An accidental gybe","Going aground","Too much speed","The anchor dragging"],
["DS","Heaving-to is used to…","Park the boat comfortably at sea","Go faster upwind","Dry the sails","Signal distress"],
["DS","Prop walk in astern typically…","Kicks the stern sideways","Speeds the boat up","Stalls the engine","Lifts the bow"],
["DS","A ferry glide uses…","The tide across your bow to slide sideways","Full throttle","The spinnaker","An anchor dragged astern"],
["DS","Leaving a pontoon with wind pinning you on, the classic trick is…","Spring the bow or stern out","Full power straight ahead","Push off and hope","Wait for the wind to stop"],
["DS","Fenders should be positioned…","At the widest point of contact","At the bow only","At deck level","Trailing in the water"],
["DS","Coming alongside, which lines usually go ashore first?","Bow and stern lines","Both springs","The kedge","The halyards"],
/* --- COLREGs conduct (DS/CS) --- */
["DS","Two power vessels meeting head-on should…","Both alter course to starboard","Both alter to port","Both stop","Sound five blasts and carry on"],
["DS","Power vessels crossing: you give way if the other is…","On your starboard side","On your port side","Faster than you","Bigger than you"],
["DS","An overtaking vessel…","Always keeps clear, sail or power","Has right of way","Only gives way if power","Must pass to port"],
["DS","Two sailing boats, different tacks — who gives way?","The boat on port tack","The boat on starboard tack","The faster boat","The bigger boat"],
["DS","Two sailing boats, same tack — who gives way?","The windward boat","The leeward boat","The one astern","The lighter boat"],
["CS","Your yacht is sailing; a vessel is trawling ahead. Who gives way?","You do — keep clear of vessels fishing","The trawler","Whoever is on port tack","Neither"],
["DS","In a narrow channel, a yacht under 20m must…","Not impede vessels that can only navigate in the channel","Use the middle","Anchor and wait","Sail against the traffic"],
["CS","Crossing a Traffic Separation Scheme, head…","At right angles to the lane on a heading","Diagonally for speed","Along the lane","Between the ships"],
["DS","Rule 5 says keep a proper lookout by…","Sight and hearing at all times","Radar only","GPS only","The autopilot"],
["DS","Risk of collision exists when another vessel's bearing…","Stays constant as range decreases","Changes rapidly","Draws aft","Draws forward"],
["DS","Give-way action should be…","Early, substantial and obvious","Subtle and gradual","Left to the last moment","Signalled by radio first"],
["CS","As the stand-on vessel you initially…","Hold your course and speed","Alter to starboard","Stop","Turn away"],
["DS","In fog every vessel must proceed at…","A safe speed adapted to conditions","6 knots exactly","Full speed to clear it","Anchor immediately"],
/* --- sound signals (DS/CS) --- */
["DS","One short blast means…","I am altering course to starboard","I am altering to port","I am stopping","Danger"],
["DS","Two short blasts mean…","I am altering course to port","Altering to starboard","Engines astern","I agree"],
["DS","Three short blasts mean…","My engines are going astern","I am turning","Man overboard","Anchoring"],
["DS","Five or more short blasts mean…","I don't understand your intentions — wake up!","Hello","Abandon ship","Overtake me to port"],
["CS","In fog, one prolonged blast every two minutes is…","A power vessel making way","A sailing vessel","A vessel at anchor","A pilot vessel"],
["CS","In fog, two prolonged blasts every two minutes is…","A power vessel underway but stopped","A vessel aground","A tug and tow","A ferry"],
["CS","In fog, one prolonged + two short blasts is sounded by…","A sailing vessel (and others restricted etc.)","A power vessel making way","A vessel at anchor","A submarine"],
["CS","Rapid bell ringing for about five seconds each minute is…","A vessel at anchor in fog","A sailing vessel racing","A ferry departing","A fishing fleet"],
/* --- lights & shapes (CS) --- */
["CS","A masthead (steaming) light covers an arc of…","225 degrees","135 degrees","360 degrees","112.5 degrees"],
["CS","A sternlight covers…","135 degrees","225 degrees","180 degrees","90 degrees"],
["CS","Each sidelight covers…","112.5 degrees","135 degrees","225 degrees","60 degrees"],
["CS","A tricolour masthead lantern may be used…","Only under sail alone","Whenever it's dark","Only under engine","Only at anchor"],
["CS","Sails up AND engine engaged — under the rules you are…","A power-driven vessel","A sailing vessel","Restricted in ability to manoeuvre","Not under command"],
["CS","A yellow light above the sternlight identifies…","A vessel towing","A pilot boat","A dredger","A police launch"],
["CS","White over red all-round lights mean…","Pilot vessel on duty","Fishing vessel","Vessel aground","Diving operations"],
["CS","Red over white all-round lights mean…","Vessel fishing (not trawling)","Trawler","Pilot vessel","Vessel constrained by draught"],
["CS","Green over white all-round lights mean…","Vessel trawling","Vessel fishing with lines","Survey vessel","Hovercraft"],
["CS","Red over red all-round lights mean…","Vessel not under command","Vessel at anchor","Two vessels rafted","Constrained by draught"],
["CS","Red–white–red all-round lights mean…","Restricted in ability to manoeuvre","Not under command","Pilot vessel","Minesweeper"],
["CS","Three all-round red lights in a vertical line mean…","Vessel constrained by her draught","Vessel sinking","Nuclear vessel","Tug over 50m"],
["CS","At night a vessel aground shows…","Anchor light(s) plus two red lights","Three greens","Flashing blue","Nothing extra"],
["DS","A vessel at anchor by day hoists…","One black ball forward","Two black balls","A black diamond","A yellow flag"],
/* --- buoyage (DS/CS) --- */
["DS","In IALA Region A, a port-hand lateral buoy is…","Red and can-shaped","Green and conical","Yellow","Black and red"],
["DS","In IALA Region A, a starboard-hand buoy is…","Green and conical","Red and can-shaped","Blue","Black with two spheres"],
["DS","The general direction of buoyage runs…","Into harbour from seaward","Out of harbour","North to south","With the ebb"],
["CS","A red can with a green horizontal band means…","Preferred channel to starboard — leave the buoy to port","Preferred channel to port","Danger — keep away","Anchoring area"],
["DS","Special marks (racing, outfalls, zones) are coloured…","Yellow","Orange","White","Blue and red"],
["DS","The topmark on a special mark is a…","Yellow X","Red ball","Black cone","Green square"],
["CS","An emergency wreck-marking buoy is…","Blue and yellow vertical stripes","All black","Red and white checks","Green with a ball"],
["DS","A safe water mark carries which topmark?","A single red ball","Two black balls","A red cone","Nothing"],
["DS","An isolated danger mark carries…","Two black balls, one above the other","A single sphere","A yellow X","Crossed cones"],
["DS","Port-hand buoys flash which colour at night?","Red","Green","White","Yellow"],
["DS","Starboard-hand buoys flash…","Green","Red","White","Blue"],
["CS","Cardinal marks flash which colour?","White","Yellow","Red","Green"],
["DS","On a north cardinal, the black band is…","On top, above the yellow","Below the yellow","In the middle","There is no black"],
/* --- tides (DS/CS) --- */
["DS","Spring tides occur shortly after…","Full and new moon","Quarter moons","The equinox only","Neap tides"],
["DS","Neap tides — the smallest ranges — follow…","The moon's quarters","Full moon","New moon","Midsummer"],
["DS","Compared with neaps, spring tides have…","A larger range and stronger streams","A smaller range","No streams","The same everything"],
["DS","In the rule of twelfths, the middle two hours each move…","Three twelfths of the range","One twelfth","Six twelfths","Half the range"],
["CS","Chart datum is…","The level below which depths are measured — roughly lowest astronomical tide","Mean sea level","The high water mark","An arbitrary line"],
["CS","An underlined figure on the chart (e.g. 1₃) shows…","A drying height above chart datum","A depth in fathoms","A rock's age","A buoy number"],
["DS","MHWS stands for…","Mean High Water Springs","Maximum Harbour Water Standard","Mean Height Wind Speed","Middle High Water Season"],
["DS","Tidal streams generally run fastest…","Around mid-tide","At high water","At low water","At slack"],
["DS","The rule of twelfths sequence is…","1-2-3-3-2-1","1-1-2-2-3-3","2-2-2-2-2-2","3-3-2-2-1-1"],
["CC","The ebb tide is when the water is…","Falling","Rising","Slack","Turning"],
["CC","The flood tide is when the water is…","Rising","Falling","Still","Ebbing"],
["DS","Slack water is…","The pause in the stream around the turn of tide","Always at midnight","When wind dies","Low water exactly"],
["CS","Wind against tide produces…","Short, steep, uncomfortable seas","Flat calm","Long lazy swells","Fog"],
["CS","Tidal diamonds on a chart give you…","Hourly stream direction and rate at that spot","Depths","Anchorages","Distances"],
["CS","Times and heights at a secondary port are found by…","Applying differences to a standard port","Guesswork","Doubling the range","Radio request"],
["DS","The \"range\" of a tide is…","High water height minus low water height","The distance it travels","Its speed","Days between springs"],
/* --- weather (DS/CS) --- */
["DS","Beaufort force 4 is a…","Moderate breeze, roughly 11–16 knots","Gale","Light air","Storm"],
["DS","Beaufort force 6 — the \"yachtsman's gale\" — is roughly…","22–27 knots","10 knots","40 knots","60 knots"],
["CS","Beaufort force 8 is officially…","A gale, 34–40 knots","A strong breeze","A hurricane","A squall"],
["DS","A veering wind shifts…","Clockwise, e.g. SW to W","Anticlockwise","Up and down","Offshore"],
["DS","A backing wind shifts…","Anticlockwise, e.g. W to SW","Clockwise","Onshore","To a gale"],
["DS","A rapidly falling barometer warns of…","Strong winds on the way","Fine weather","Fog","Neap tides"],
["CS","In the shipping forecast, \"imminent\" means within…","6 hours","1 hour","12 hours","24 hours"],
["CS","\"Soon\" in the shipping forecast means…","6 to 12 hours","0 to 6 hours","12 to 24 hours","Tomorrow"],
["CS","\"Later\" in the shipping forecast means…","More than 12 hours away","Within 6 hours","Next week","After dark"],
["CS","Forecast visibility \"moderate\" is…","2 to 5 miles","Under 1000 metres","5 to 10 miles","Unlimited"],
["DS","A sea breeze typically fills in…","On a sunny afternoon, blowing onshore","At dawn, offshore","At night","Before a gale"],
["DS","At night in settled weather near the coast expect…","A gentle land breeze blowing offshore","A sea breeze onshore","Willy-willies","No wind ever"],
["CS","High wispy cirrus thickening ahead of a backing wind suggests…","A warm front approaching","High pressure building","A sea breeze","Nothing at all"],
["DS","Isobars packed close together mean…","Strong winds","Light winds","Rain only","High pressure"],
["DS","Most UK depressions arrive from the…","West or southwest","East","North","Mediterranean"],
["CS","Warm moist air flowing over cold spring seas gives…","Advection fog","Radiation fog","Smog","Frost"],
["DS","Violent squalls and big wind shifts lurk under…","Cumulonimbus (thunder) clouds","Cirrus","Fair-weather cumulus","Contrails"],
["DS","Summer high pressure usually brings…","Light winds and settled weather","Gales","Thunder daily","Fog banks"],
["CS","Forecast wind speeds are…","Averages — gusts can be much stronger","Maximum gusts","Measured at mast height","Always exact"],
/* --- navigation & charts (DS/CS) --- */
["DS","Variation is the difference between…","True north and magnetic north","The compass and the GPS","Port and starboard","Two charts"],
["CS","Deviation is compass error caused by…","The boat's own magnetic influences","The moon","Latitude","Wet charts"],
["CS","Converting compass to true, easterly errors are…","Added","Subtracted","Ignored","Halved"],
["DS","Depths on modern UK charts are in…","Metres","Feet","Fathoms","Yards"],
["DS","A transit is…","Two fixed objects in line — a perfect position line","A ferry route","A GPS waypoint","A tidal gate"],
["CS","A clearing bearing is used to…","Stay safely clear of an unseen danger","Enter a marina","Call the coastguard","Set the anchor"],
["CS","A three-bearing fix that doesn't quite meet gives a…","Cocked hat","Perfect fix","Running fix","Transit"],
["CS","An estimated position adds what to dead reckoning?","Tidal stream and leeway","Nothing","Fuel state","Magnetic variation only"],
["DS","COG on the GPS means…","Course over the ground","Course of the gyro","Compass or GPS","Current on the ground"],
["DS","SOG is…","Speed over the ground","Speed of the genoa","Sail or gybe","Southerly ocean gradient"],
["CS","Leeway is…","Sideways slip downwind of your heading","Extra speed downwind","Room at a marina","The lee shore"],
["DS","The boat's log measures speed…","Through the water","Over the ground","Of the wind","Of the engine"],
["DS","One minute of latitude equals…","One nautical mile","One kilometre","One statute mile","Ten cables"],
["DS","Never measure distance on a chart using…","The longitude scale","The latitude scale","Dividers","The side of the chart"],
["CS","\"Fl(2) 10s\" beside a chart symbol describes…","A light flashing twice every ten seconds","A depth","Two wrecks","A radio channel"],
["DS","\"Wk\" on a chart marks a…","Wreck","Weir","Windfarm","Waypoint"],
["CS","GPS positions are normally referenced to which datum?","WGS84","OSGB36","Chart datum","Greenwich"],
["DS","The inner ring of a chart's compass rose shows…","Magnetic directions","True directions","Grid north","Tidal sets"],
["CC","Distance equals…","Speed multiplied by time","Speed divided by time","Time minus speed","Depth times two"],
["CS","SOLAS V requires small craft skippers to…","Make a passage plan appropriate to the trip","File a flight plan","Carry radar","Have a crew of three"],
/* --- safety & comms (CC/DS/CS) --- */
["CC","The VHF distress and calling channel is…","Channel 16","Channel 1","Channel 69","Channel 99"],
["DS","MAYDAY is reserved for…","Grave and imminent danger to vessel or life","Any breakdown","Running late","Fog"],
["DS","PAN PAN signals…","Urgency — help needed but not immediate danger","Distress","A radio check","Gale warning"],
["CS","SÉCURITÉ messages carry…","Safety or navigational warnings","Distress calls","Weather jokes","Harbour gossip"],
["DS","Pressing the red DSC button on the VHF…","Sends a digital distress alert with your position","Calls the marina","Scans channels","Turns up squelch"],
["CC","In a MAYDAY call, you say \"MAYDAY\"…","Three times","Once","Twice","Until answered"],
["CC","Red handheld flares and orange smoke both mean…","Distress","Practice","Position check","Regatta start"],
["DS","A white handheld flare is used to…","Draw attention / warn of collision — it's NOT distress","Signal distress","Light the deck","Celebrate"],
["DS","An EPIRB is…","A satellite distress beacon","An engine part","A depth alarm","A wind sensor"],
["CC","Unlike a buoyancy aid, a proper lifejacket should…","Turn an unconscious person face-up","Just help you swim","Keep you warm","Double as a cushion"],
["CC","Crotch straps on a lifejacket…","Stop it riding up over your head","Are decoration","Hold tools","Attach the tether"],
["CC","Someone falls overboard — the instant jobs are…","Shout, throw something buoyant, point and keep pointing","Start lunch","Drop all sails first","Swim after them"],
["DS","The GPS MOB button…","Marks the position so you can steer back","Calls for help","Stops the boat","Inflates the danbuoy"],
["CC","On a RIB or sportsboat, the kill cord goes…","Around the driver's leg, attached to the engine cut-out","On the throttle","In a locker","Around the mooring cleat"],
["CC","To reach the Coastguard from a mobile ashore, dial…","999 (or 112) and ask for the Coastguard","101","0800 SEA HELP","The marina office"],
["DS","Flares must be…","In date and stowed dry and accessible","Kept below the engine","Opened yearly to check","Painted red"],
["CC","Engine fire! Among your first moves…","Cut fuel/gas and aim the extinguisher at the base","Open the hatch wide","Pour water on it","Head below to watch"],
["DS","A gas locker must drain…","Overboard","Into the bilge","Into the cabin","Nowhere"],
["CC","You smell gas below. First response?","No switches or flames — ventilate and turn the gas off","Light a match to check","Turn on the fan","Ignore it"],
["CS","After running the tank dry, a diesel usually needs…","Bleeding air from the fuel system","New injectors","A tow","Fresh oil"],
["DS","Seacocks exist so you can…","Shut off any through-hull fitting","Drain the fuel","Trim the boat","Empty the water tank"],
["DS","A radar reflector makes you…","More visible to ships' radar","Faster","Lighter","Immune to lightning"],
["DS","AIS broadcasts a vessel's…","Identity, position, course and speed","Shopping list","Engine hours","Crew names"],
["CS","The rule for liferafts: board only when…","You'd be stepping UP into it from a sinking boat","You feel tired","It looks comfy","The kettle's off"],
["DS","A grab bag should hold…","Flares, water, EPIRB and other survival essentials","Spare fenders","The barbecue","Charts only"],
["CS","In the first minutes of cold-water immersion…","Control your breathing and float — don't thrash","Swim hard for shore","Remove clothing","Dive under waves"],
["DS","Treat a hypothermic casualty by…","Insulating and rewarming them gently","A brisk walk","Hot rum","A cold shower"],
["DS","Best MOB recovery in most yachts…","Return under control, stop to windward-ish, engine in neutral at pickup","Full speed drive-by","Reverse up to them","Throw a line from 50m"],
/* --- anchoring, engine, etiquette (CC/DS) --- */
["DS","Anchoring with chain, let out at least…","Four times the maximum depth","The same as the depth","Twice the boat length","Ten metres regardless"],
["DS","Check the anchor is holding by…","Watching a transit or anchor bearing","Trusting it","Revving hard astern for ten minutes","Diving on it hourly"],
["DS","The best holding ground is usually…","Firm sand or mud","Thick weed","Loose rock","Coral"],
["DS","A tripping line helps you…","Recover an anchor fouled on the bottom","Anchor faster","Mark the bow","Trip up crew"],
["CC","Before starting the engine each day, check…","Oil, coolant, belts, fuel and for leaks","The stereo","Sail trim","The flag"],
["CC","After starting, glance over the stern for…","Cooling water spitting from the exhaust","Smoke rings","The tender","Dolphins"],
["DS","Engine overheating? Prime suspect…","Blocked raw-water intake or a tired impeller","Wrong fuel","Too much oil","Loose flag halyard"],
["CS","\"Diesel bug\" is…","Microbial growth contaminating the fuel","An insect","A dashboard light","Cheap diesel"],
["CC","Rope round the prop! First action…","Engine into neutral and stop it","Full throttle to cut it","Reverse hard","Abandon ship"],
["CC","A British pleasure vessel wears which ensign?","The Red Ensign","The Union Flag","The White Ensign","A skull and crossbones"],
["DS","In foreign waters you fly a courtesy flag…","Of the host country, at the starboard spreader","Of your club","At the stern","Only on Sundays"],
["DS","The plain yellow Q flag requests…","Customs clearance — 'my vessel is healthy'","A pilot","Fuel","Quiet"],
["CC","A burgee is…","Your sailing club's flag","A type of anchor","A sandwich","The wind indicator"],
["CC","Meeting other boats in a marina fairway, keep…","To starboard","To port","To the middle","Behind them"],
["CC","Ultimate responsibility for vessel and crew rests with…","The skipper","The insurance company","The harbourmaster","Whoever is steering"],
["CC","SOLAS stands for…","Safety Of Life At Sea","Sailing Or Lazing At Sea","Standard Ocean Law And Signals","Save Our Lost At Sea"],
["CC","A nautical mile compared to a land mile is…","Longer — 1,852 metres","Shorter","Identical","Half as long"],
["CC","One knot equals…","One nautical mile per hour","One mph","One km/h","Ten metres per second"],
["DS","The purpose of a passage plan is to…","Appraise, plan, execute and monitor the trip safely","Impress the crew","Satisfy the marina","Replace charts"],
["CS","A \"lee shore\" is dangerous because…","The wind is blowing you onto it","It's always rocky","It has no pubs","The tide never turns"],
["CC","Which way does a boat's wind indicator (Windex) point?","Where the wind is coming FROM","Where the wind is going","North","At the next mark"],
["DS","\"Steerage way\" means…","Enough speed through the water for the rudder to work","Room to overtake","The channel width","Autopilot engaged"],
["CS","A back bearing on a departed object gives you…","A position line astern to check your track","Your speed","The tide rate","Deviation"]
];
for (const [lvl, q, right, w1, w2, w3] of SAIL_EXTRA)
  SAIL_QUESTIONS.push({ lvl, q, opts: [right, w1, w2, w3], a: 0 });

/* ==================== STAR FILES — MALACHI BARTON (facts checked Aug 2026) ==================== */
const STAR_LEVELS = {
  FN: { label: "FAN",       pts: 10, pen: 5,  base: 100, color: "#2EE38A" },
  SF: { label: "SUPERFAN",  pts: 15, pen: 7,  base: 150, color: "#FFC845" },
  UF: { label: "NO.1 FAN",  pts: 20, pen: 10, base: 200, color: "#FF4757" }
};

const STAR_QUESTIONS = [
/* ---------- FAN ---------- */
{ lvl:"FN", q:"In Camp Rock 3, Malachi plays which character?",
  opts:["Fletch","Shane","Desi","Cliff"], a:0 },
{ lvl:"FN", q:"How is Fletch described in Camp Rock 3?",
  opts:["The misunderstood bad boy","The camp counsellor","The shy drummer","Sage's little brother"], a:0 },
{ lvl:"FN", q:"What are the campers in Camp Rock 3 competing to win?",
  opts:["The chance to open for Connect 3 on tour","A record deal","A trip to Hollywood","New instruments"], a:0 },
{ lvl:"FN", q:"Which real-life band plays Connect 3 in Camp Rock 3?",
  opts:["The Jonas Brothers","One Direction","Big Time Rush","5 Seconds of Summer"], a:0 },
{ lvl:"FN", q:"In Stuck in the Middle, Malachi played which member of the Diaz family?",
  opts:["Beast, the wild little brother","Harley, the inventor","Georgie, the tallest","Rachel, the eldest"], a:0 },
{ lvl:"FN", q:"Which future Wednesday star played Malachi's big sister Harley in Stuck in the Middle?",
  opts:["Jenna Ortega","Millie Bobby Brown","Olivia Rodrigo","Sabrina Carpenter"], a:0 },
{ lvl:"FN", q:"In the ZOMBIES 4 movie, Malachi's character Victor is a…",
  opts:["Vampire","Werewolf","Zombie","Alien"], a:0 },
{ lvl:"FN", q:"In Under Wraps, Malachi and his friends have a spooky adventure with…",
  opts:["A mummy","A ghost pirate","A friendly dragon","A robot"], a:0 },
{ lvl:"FN", q:"Malachi's character in The Villains of Valley View is called…",
  opts:["Colby","Kyle","Cody","Carter"], a:0 },
{ lvl:"FN", q:"When is Malachi Barton's birthday?",
  opts:["March 10","July 4","December 25","October 31"], a:0 },
{ lvl:"FN", q:"Camp Rock 3 premiered on which channel?",
  opts:["Disney Channel","Nickelodeon","Cartoon Network","CBBC"], a:0 },
{ lvl:"FN", q:"Which sport does Malachi love playing in his spare time?",
  opts:["Baseball","Golf","Rugby","Snooker"], a:0 },
{ lvl:"FN", q:"Malachi is a huge fan of which baseball team?",
  opts:["Los Angeles Dodgers","New York Yankees","Chicago Cubs","Boston Red Sox"], a:0 },
{ lvl:"FN", q:"Whose star file is this? Name the actor in the photo.",
  opts:["Malachi Barton","Asher Angel","Israel Broussard","Milo Manheim"], a:0,
  photo:{ wiki:"Malachi_Barton" } },

/* ---------- SUPERFAN ---------- */
{ lvl:"SF", q:"Beast Diaz's real first name in Stuck in the Middle is…",
  opts:["Ethan","Eddie","Elliot","Ernie"], a:0 },
{ lvl:"SF", q:"Which original Camp Rock star is an executive producer of Camp Rock 3?",
  opts:["Demi Lovato","Miley Cyrus","Selena Gomez","Zendaya"], a:0 },
{ lvl:"SF", q:"Who plays Sage, the ambitious singer opposite Fletch in Camp Rock 3?",
  opts:["Liamani Segura","Lumi Pollack","Ava Jean","Brooklynn Pitts"], a:0 },
{ lvl:"SF", q:"Colby's superhero name in The Villains of Valley View is…",
  opts:["Flashform","Speedstorm","Shapeshift","Quicksilver"], a:0 },
{ lvl:"SF", q:"What is Colby's superpower in The Villains of Valley View?",
  opts:["Shapeshifting","Flying","Invisibility","Super strength"], a:0 },
{ lvl:"SF", q:"Malachi's character in the Under Wraps movies is named…",
  opts:["Marshall","Gilbert","Max","Miles"], a:0 },
{ lvl:"SF", q:"In Dora and the Lost City of Gold (2019), Malachi played…",
  opts:["Young Diego","Young Dora's neighbour","Boots","Map"], a:0 },
{ lvl:"SF", q:"In Disney Junior's Fancy Nancy, Malachi voiced which character?",
  opts:["Lionel","Leo","Louie","Lenny"], a:0 },
{ lvl:"SF", q:"On Bunk'd, Malachi guest-starred as…",
  opts:["Jasper Flores","Ravi","Zuri's pen pal","Griff"], a:0 },
{ lvl:"SF", q:"Malachi was born in which US city?",
  opts:["Virginia Beach, Virginia","Los Angeles, California","Miami, Florida","Nashville, Tennessee"], a:0 },
{ lvl:"SF", q:"How many seasons of Stuck in the Middle were made?",
  opts:["Three","One","Five","Seven"], a:0 },
{ lvl:"SF", q:"ZOMBIES 4 has which spooky subtitle?",
  opts:["Dawn of the Vampires","Rise of the Werewolves","Night of the Ghouls","Return of the Aliens"], a:0 },
{ lvl:"SF", q:"Camp Rock 3 arrived how long after the very first Camp Rock (2008)?",
  opts:["About 18 years","5 years","10 years","25 years"], a:0 },
{ lvl:"SF", q:"Name this show from its picture — Malachi starred in it as Beast.",
  opts:["Stuck in the Middle","Raven's Home","Coop & Cami","Sydney to the Max"], a:0,
  photo:{ wiki:"Stuck_in_the_Middle_(TV_series)" } },
{ lvl:"SF", q:"Name this superhero family show Malachi starred in.",
  opts:["The Villains of Valley View","Henry Danger","The Thundermans","Lab Rats"], a:0,
  photo:{ wiki:"The_Villains_of_Valley_View" } },

/* ---------- NO.1 FAN ---------- */
{ lvl:"UF", q:"Malachi's mum Felicia is a singer famous for performing which cartoon theme song?",
  opts:["DuckTales","SpongeBob SquarePants","Phineas and Ferb","Gravity Falls"], a:0 },
{ lvl:"UF", q:"Malachi once held a world record for what (in one minute)?",
  opts:["Piercing the most pencils through a bag of water","Most basketball spins","Fastest rap","Most pancakes flipped"], a:0 },
{ lvl:"UF", q:"In ZOMBIES 5 — currently in production — Malachi returns as Victor. Its subtitle is…",
  opts:["Secrets of the Sea","Curse of the Moon","City of Monsters","Attack of the Aliens"], a:0 },
{ lvl:"UF", q:"Coven Academy, Malachi's upcoming spooky series, casts him as a…",
  opts:["Warlock","Vampire","Werewolf","Ghost hunter"], a:0 },
{ lvl:"UF", q:"Who directed Camp Rock 3?",
  opts:["Veronica Rodriguez","Kenny Ortega","Tim Federle","Anna Todd"], a:0 },
{ lvl:"UF", q:"At D23, the Camp Rock 3 cast performed which classic Camp Rock anthem?",
  opts:["We Rock","This Is Me","Gotta Find You","Wouldn't Change a Thing"], a:0 },
{ lvl:"UF", q:"In August 2026 Malachi won the Rising Star Award at which event?",
  opts:["Variety's Power of Young Hollywood","The Oscars","The Grammys","The BRITs"], a:0 },
{ lvl:"UF", q:"The Under Wraps films are remakes of a Disney Halloween movie from which year?",
  opts:["1997","1985","2005","2010"], a:0 },
{ lvl:"UF", q:"Which of these was one of Malachi's very first TV appearances, back in 2014-15?",
  opts:["Henry Danger","Wednesday","Stranger Things","The Mandalorian"], a:0 },
{ lvl:"UF", q:"Fellow Camp Rock 3 camper Rosie is played by…",
  opts:["Lumi Pollack","Liamani Segura","Ava Jean","Sherry Cola"], a:0 },
{ lvl:"UF", q:"On the interactive Disney Channel show Just Roll With It, Malachi appeared as…",
  opts:["Tyber","Blair","Owen","Rolly"], a:0 },
{ lvl:"UF", q:"Name this movie — Malachi's big 2025 vampire role.",
  opts:["ZOMBIES 4: Dawn of the Vampires","Hotel Transylvania","Vampirina","Twilight"], a:0,
  photo:{ wiki:"Zombies_4:_Dawn_of_the_Vampires" } },
{ lvl:"UF", q:"Name this movie franchise Malachi joined in 2026 — from its picture.",
  opts:["Camp Rock","High School Musical","Descendants","Teen Beach Movie"], a:0,
  photo:{ wiki:"Camp_Rock" } }
];

PACKS.star = { name: "Star Files — Malachi Barton", icon: "\uD83C\uDF1F", levels: STAR_LEVELS, questions: STAR_QUESTIONS };

/* ==================== DISNEY HITS PACK — Camp Rock · Zombies · Descendants · Coven Academy
   (facts checked Aug 2026) — [lvl, q, correct, w1, w2, w3, optional wiki photo] */
const DISNEY_LEVELS = {
  NB: { label: "NEWBIE",  pts: 10, pen: 5,  base: 100, color: "#2EE38A" },
  IN: { label: "INSIDER", pts: 15, pen: 7,  base: 150, color: "#FFC845" },
  LG: { label: "LEGEND",  pts: 20, pen: 10, base: 200, color: "#FF4757" }
};

const DISNEY_BANK = [
/* ================= CAMP ROCK 1 (2008) ================= */
["NB","In the first Camp Rock, who plays Mitchie Torres?","Demi Lovato","Selena Gomez","Miley Cyrus","Bridgit Mendler"],
["NB","How does Mitchie get to go to Camp Rock?","Her mum caters the camp's food","She wins a competition","Her dad owns the camp","A scholarship from Connect 3"],
["NB","Which pop star is sent to Camp Rock to fix his bad attitude?","Shane Gray","Nate","Jason","Luke Williams"],
["NB","Shane spends the whole film searching for…","The girl with the voice he overheard singing","His lost guitar","A new drummer","The camp treasure"],
["NB","The song Mitchie sings that Shane overhears is…","This Is Me","We Rock","Who Will I Be","Gotta Find You"],
["IN","The big end-of-summer competition at Camp Rock is called…","Final Jam","The Big Gig","Camp Clash","Summer Slam"],
["IN","Camp director Brown Cesario is also Shane's…","Uncle","Dad","Manager","Old drummer"],
["IN","Camp diva Tess Tyler is the daughter of…","Superstar singer TJ Tyler","The camp director","A movie producer","The President"],
["IN","What lie does Mitchie tell to impress the popular campers?","That her mum is a big boss at Hot Tunes TV China","That she knows Shane","That she owns the camp","That she's already famous"],
["IN","Mitchie's best friend Caitlyn dreams of becoming a…","Music producer","Dancer","Drummer","Vet"],
["IN","What job does Mitchie secretly do at camp?","Helping her mum in the kitchen","Cleaning the lake","Teaching dance","Fixing instruments"],
["IN","Shane's song for the mystery girl is called…","Gotta Find You","This Is Me","Play My Music","Too Cool"],
["LG","Quiet camper Peggy stuns everyone at Final Jam under her real name…","Margaret Dupree","Penelope Grey","Meg Turner","Patricia Lane"],
["LG","Tess's showy signature song in Camp Rock is…","Too Cool","2 Stars","Here I Am","What It Takes"],
["NB","Connect 3's members are Shane, Nate and…","Jason","Jesse","Jake","Johnny"],
["NB","The Jonas Brothers play the members of…","Connect 3","Big Time Rush","The Wildcats","One Vibe"],
["NB","Camp Rock is a camp for kids who love…","Music","Football","Coding","Sailing"],
["IN","Who plays Shane Gray?","Joe Jonas","Nick Jonas","Kevin Jonas","Frankie Jonas"],
["IN","Mitchie's mum, who runs the camp kitchen, is called…","Connie","Carol","Christina","Carmen"],
["LG","Maria Canals-Barrera, back for Camp Rock 3, played which character in the original?","Connie, Mitchie's mum","Brown's sister","Tess's mum","The camp nurse"],
["NB","The anthem the whole camp sings together at the end of Camp Rock is…","We Rock","This Is Me","Can't Back Down","Start the Party"],
["LG","The first Camp Rock movie premiered in which year?","2008","2005","2012","2015"],
/* ================= CAMP ROCK 2 (2010) ================= */
["NB","Camp Rock 2 is subtitled…","The Final Jam","The Last Song","Battle of the Bands","Summer Wars"],
["NB","In Camp Rock 2, a flashy rival camp opens across the lake called…","Camp Star","Camp Victory","Camp Platinum","Camp Thunder"],
["IN","Camp Star is run by Axel Turner, who used to be…","In a band with Brown","Camp Rock's cook","Shane's teacher","A TV judge"],
["IN","Camp Star's big-headed star performer is…","Luke Williams","Leo West","Lance Waters","Larry Wells"],
["IN","Nate falls for which Camp Star camper?","Dana, Axel's daughter","Tess","Caitlyn","Ella"],
["IN","The two camps battle it out in a televised sing-off called…","Camp Wars","The Lake Off","Star Jam","The Showdown"],
["LG","Camp Rock's defiant answer song in the final battle is…","What We Came Here For","It's On","Fire","Tear It Down"],
["NB","The fiery dance-off song where both camps face off is…","It's On","We Rock","BAMM","Turn It Up"],
["IN","Mitchie and Shane's sweet duet in Camp Rock 2 is…","Wouldn't Change a Thing","This Is Me","Different Summers","Two Voices"],
["LG","Nate's shy, guitar-strumming solo in Camp Rock 2 is called…","Introducing Me","Meet Me","Just Nate","Simple Song"],
["LG","Who wins the public vote at the end of Camp Wars?","Camp Star — but the campers stick with Camp Rock anyway","Camp Rock by a landslide","It's a tie","The vote is cancelled"],
["IN","Camp Rock's rallying song when they refuse to give up is…","Can't Back Down","Back Off","Stand Tall","Louder"],
["NB","Camp Rock 2 came out in which year?","2010","2008","2013","2016"],
["LG","At the end of Camp Rock 2, next summer looks bright because…","Camp Star's campers want to come to Camp Rock","Axel apologises","Camp Rock wins the lottery","Connect 3 buys both camps"],
["IN","Which Camp Rock 2 song do the Jonas Brothers perform as Connect 3 around the campfire?","Heart and Soul","Burnin' Up","Year 3000","Lovebug"],
/* ================= CAMP ROCK 3 (2026) ================= */
["NB","Camp Rock 3 premiered in August of which year?","2026","2020","2023","2024"],
["NB","In Camp Rock 3, the campers compete to win…","The opening slot on Connect 3's tour","Final Jam","A record contract","A trip to Camp Star"],
["NB","Malachi Barton's Camp Rock 3 character is called…","Fletch","Flynn","Finn","Frankie"],
["NB","Liamani Segura plays which ambitious singer in Camp Rock 3?","Sage","Rosie","Callie","Madison"],
["IN","Who executive-produced Camp Rock 3 alongside the Jonas Brothers?","Demi Lovato","Taylor Swift","Kenny Ortega","Miley Cyrus"],
["IN","Fletch is described as the camp's…","Misunderstood bad boy","Head counsellor","Class clown","Champion swimmer"],
["IN","Lumi Pollack plays which Camp Rock 3 camper?","Rosie","Sage","Madison","Callie"],
["LG","Camp Rock 3 was directed by…","Veronica Rodriguez","Kenny Ortega","Tim Federle","Anne Fletcher"],
["LG","Camp Rock 3's script was written by…","Eydie Faye","Tim Federle","Dan Berendsen","Jessica O'Toole"],
["IN","Hudson Stone plays which camper in Camp Rock 3?","Desi","Cliff","Fletch","Miles"],
["IN","Casey Trotter plays which camper in Camp Rock 3?","Cliff","Desi","Fletch","Bruno"],
["LG","Brooklynn Pitts and Ava Jean play which two campers?","Callie and Madison","Sage and Rosie","Tess and Ella","Dana and Peggy"],
["IN","At D23, the Camp Rock 3 cast performed which classic?","We Rock","This Is Me","It's On","Play My Music"],
["NB","Camp Rock 3 streams the day after its TV premiere on…","Disney+","Netflix","BBC iPlayer","Paramount+"],
["LG","How many years passed between Camp Rock 2 (2010) and Camp Rock 3 (2026)?","16","6","10","20"],
["NB","In Camp Rock 3 the Jonas Brothers appear as…","Their fictional band Connect 3","Camp cooks","Judges on TV","Rival campers"],
["IN","Barton said Camp Rock 3 felt new because for once on set he was…","The big brother instead of the little brother","The youngest","Behind the camera","A stuntman"],
["LG","Camp Rock 3 premiered on which exact date?","August 13, 2026","July 4, 2026","June 1, 2026","September 30, 2026"],
["NB","Name this pop star — the original Mitchie and a Camp Rock 3 producer.","Demi Lovato","Selena Gomez","Ariana Grande","Olivia Rodrigo","Demi_Lovato"],
["NB","Name this band — Camp Rock's Connect 3 in real life.","The Jonas Brothers","Big Time Rush","5 Seconds of Summer","The Vamps","Jonas_Brothers"],
/* ================= ZOMBIES 1 (2018) ================= */
["NB","The ZOMBIES movies are set in which perfectly pastel town?","Seabrook","Sunnydale","Auradon","Riverdale"],
["NB","Zed is a zombie who dreams of playing…","Football","Piano","Ice hockey","Chess"],
["NB","Addison stands out in Seabrook because of her…","Naturally white hair","Green skin","Glowing eyes","Purple freckles"],
["IN","What keeps the zombies calm and safe in Seabrook?","Their Z-Band wristbands","Special smoothies","Moonlight","A daily song"],
["IN","In the first movie Addison hides her white hair under…","A wig","A hood","A cheer helmet","Hair dye"],
["IN","Addison's cheer-obsessed cousin, captain of the squad, is…","Bucky","Bonzo","Blake","Buzz"],
["NB","Zed and Addison first meet when they both hide in…","The school safe room","The library","A treehouse","The gym cupboard"],
["IN","Zed's zombie best friends are Eliza and…","Bonzo","Bucky","Boris","Benny"],
["NB","The zombies' neighbourhood is called…","Zombietown","Shadyside","Deadville","Greytown"],
["IN","The big duet where Zed and Addison imagine a fairer world is…","Someday","BAMM","Stand","My Year"],
["NB","Milo Manheim and Meg Donnelly play…","Zed and Addison","Victor and Nova","Wyatt and Willa","Bucky and Eliza"],
["IN","The zombies' celebration anthem with the garage party is…","BAMM","Fired Up","We Own the Night","Gonna Be Good"],
["LG","Zed's full surname in ZOMBIES is…","Necrodopolis","Zombieson","Nightshade","Deadwood"],
["NB","Name this movie from its picture — where Zed and Addison's story began.","ZOMBIES (2018)","Descendants","Camp Rock","Teen Beach Movie","Zombies_(2018_film)"],
["IN","Name this actor — Seabrook's favourite zombie, Zed.","Milo Manheim","Malachi Barton","Pearce Joza","Matt Cornett","Milo_Manheim"],
["IN","Name this actress — Seabrook's alien cheerleader, Addison.","Meg Donnelly","Freya Skye","Chandler Kinney","Kylee Russell","Meg_Donnelly"],
/* ================= ZOMBIES 2 (2020) ================= */
["NB","ZOMBIES 2 introduces which new monsters?","Werewolves","Vampires","Aliens","Mermaids"],
["IN","The werewolf pack is led by fierce alpha…","Willa","Wynter","Wanda","Wren"],
["IN","Willa's brother, the thoughtful werewolf, is…","Wyatt","Wynter","Wolfie","Warren"],
["IN","The werewolves are desperately searching for the…","Moonstone","Sunstone","Z-Crystal","Golden bone"],
["LG","The werewolves' den hides beneath…","The old Seabrook Power plant","The school","The lighthouse","City hall"],
["IN","The werewolves believe Addison might be their…","Great Alpha","Lost cub","Queen","Doctor"],
["LG","Is Addison actually a werewolf in ZOMBIES 2?","No — the mystery of her hair continues","Yes","She's half-werewolf","The film never says"],
["IN","The werewolves' prowling anthem in ZOMBIES 2 is…","We Own the Night","Call to the Wild","Full Moon Party","Howl at It"],
["NB","Which song do the werewolves teach about their pack pride?","Call to the Wild","Fired Up","Someday","BAMM"],
["NB","ZOMBIES 2 ends on a cliffhanger when what appears in the sky?","A glowing alien ship's light","A dragon","A storm","Fireworks"],
/* ================= ZOMBIES 3 (2022) ================= */
["NB","ZOMBIES 3 brings which visitors to Seabrook?","Aliens","Vampires","Pirates","Ghosts"],
["IN","The three main aliens are A-lan, A-li and…","A-spen","A-dam","A-xel","A-my"],
["IN","The aliens come to Seabrook secretly seeking…","A map to their new home, Utopia","Zombie recipes","Cheer trophies","The moonstone"],
["LG","Addison discovers her white hair comes from…","Her alien grandmother","A werewolf curse","A science accident","The moonstone"],
["IN","ZOMBIES 3 is set around which big Seabrook event?","An international cheer competition","A football final","A science fair","A talent show"],
["LG","At the end of ZOMBIES 3, Zed becomes the first zombie to…","Go to college","Fly a spaceship","Become mayor","Join the aliens"],
["NB","The aliens' arrival song is literally called…","Alien Invasion","Space Jam","Landing Party","Beam Down"],
["LG","Zed's college scholarship showcase song is…","Exceptional Zed","Zed's Dead","Top of the Class","My Year"],
/* ================= ZOMBIES 4 (2025) ================= */
["NB","ZOMBIES 4 is subtitled…","Dawn of the Vampires","Rise of the Werewolves","Return to Seabrook","Night of the Monsters"],
["NB","In ZOMBIES 4, Zed and Addison's road trip lands them between…","Daywalkers and Vampires","Pirates and ghosts","Two cheer squads","Robots and aliens"],
["NB","Malachi Barton plays which brooding vampire?","Victor","Vargas","Vince","Vlad"],
["NB","Freya Skye plays which radiant Daywalker?","Nova","Luna","Star","Sunny"],
["IN","The vampires live in a town called…","Shadyside","Nightville","Darkholm","Gloomton"],
["IN","The Daywalkers live in…","Sunnyside","Brightburg","Dayton","Solaris"],
["IN","Victor can harness the power of…","The wind","Fire","Lightning","Shadows"],
["IN","Nova can harness the power of…","The sun","The moon","Water","Starlight"],
["IN","Zed and Addison end up working at the summer camp as…","Camp counsellors","Cooks","Lifeguards","Bus drivers"],
["LG","The supernatural summer camp in ZOMBIES 4 is called…","Camp Rayburn","Camp Star","Camp Moonstone","Camp Nightfall"],
["LG","Legend says Daywalkers and Vampires were created when a moonstone crashed into…","Mount Rayburn","Seabrook Bay","The power plant","The school"],
["IN","Which two friends return to help in ZOMBIES 4?","Eliza and Willa","Bucky and Bonzo","A-lan and A-li","Wyatt and Wynter"],
["IN","The Daywalkers-vs-Vampires dance battle song is…","Don't Mess With Us","It's On","BAMM","Fang Off"],
["LG","The duet as Victor and Nova fall for each other is…","Dream Come True","Someday","Two Worlds","Moonlight"],
["LG","Which classic ZOMBIES song gets a new version in ZOMBIES 4?","Someday","My Year","Fired Up","Call to the Wild"],
["IN","ZOMBIES 4 premiered in which month of 2025?","July","January","December","March"],
["LG","ZOMBIES 4 was filmed in which country?","New Zealand","USA","Canada","Australia"],
["LG","Nova's strict father, leader of the Daywalkers, is…","Commander Bright","General Sol","Captain Ray","Mayor Shine"],
["LG","Victor's aunt holds which title among the vampires?","Vampire Eldress","Blood Queen","Night Mayor","Countess"],
["IN","The welcome-to-camp ensemble number in ZOMBIES 4 is…","The Place to Be","Camp Song","Welcome Home","Summer Nights"],
["NB","ZOMBIES 5, now in production, is subtitled…","Secrets of the Sea","City of Ghosts","Curse of the Crypt","Return of the Aliens"],
["IN","In ZOMBIES 5, Malachi Barton and Freya Skye return as…","Victor and Nova","Zed and Addison","Wyatt and Willa","New characters"],
/* ================= DESCENDANTS 1 (2015) ================= */
["NB","In Descendants, the villains' children live on…","The Isle of the Lost","Wonderland","Neverland","Skull Rock"],
["NB","Mal is the daughter of which famous villain?","Maleficent","The Evil Queen","Cruella de Vil","Ursula"],
["NB","Evie is the daughter of…","The Evil Queen","Maleficent","The Queen of Hearts","Mother Gothel"],
["NB","Jay is the son of…","Jafar","Hades","Captain Hook","Gaston"],
["NB","Carlos is the son of…","Cruella de Vil","The Evil Queen","Yzma","Lady Tremaine"],
["IN","Who invites the villain kids to attend school in Auradon?","Prince Ben","Fairy Godmother","King Beast","Audrey"],
["NB","The villain kids' iconic first song is…","Rotten to the Core","Good to Be Bad","Ways to Be Wicked","Evil Like Me"],
["IN","The VKs' secret mission in Auradon is to steal…","Fairy Godmother's wand","The crown","Ben's ring","A dragon egg"],
["IN","Mal gets Ben to fall for her using…","A love-spell cookie","A potion in his drink","A magic ring","Hypnosis"],
["LG","At Ben's coronation, Maleficent crashes the party by turning into…","A dragon","A storm","A giant crow","A snake"],
["IN","Ben's parents are Belle and…","King Beast","Prince Charming","King Triton","Aladdin"],
["NB","The kingdom where the heroes live is called…","Auradon","Arendelle","Avalon","Aurelia"],
["IN","Ben's dreamy song about Mal is…","Did I Mention","If Only","Ever After","Spellbound"],
["LG","Mal's mother sings which wicked lullaby of expectations?","Evil Like Me","Rotten to the Core","Queen of Mean","Poor Unfortunate Souls"],
["NB","Name this movie from its picture — where the VKs' story began.","Descendants (2015)","ZOMBIES","Camp Rock","The Cheetah Girls","Descendants_(2015_film)"],
["IN","Name this actress — Mal herself.","Dove Cameron","Sofia Carson","China Anne McClain","Sabrina Carpenter","Dove_Cameron"],
/* ================= DESCENDANTS 2 & 3 ================= */
["NB","Descendants 2 introduces which daughter of Ursula?","Uma","Mera","Coral","Nixie"],
["IN","Uma's pirate first mate, son of Captain Hook, is…","Harry Hook","Gil","Smee Jr","Jonas"],
["IN","Gil, Uma's loveable but dim crew member, is the son of…","Gaston","LeFou","Hook","Clayton"],
["NB","Uma's showstopping anthem is…","What's My Name","Queen of Mean","Rotten to the Core","Under the Sea"],
["IN","The tense pirate-ship standoff song in Descendants 2 is…","It's Goin' Down","Walk the Plank","Ship Shape","Anchors Away"],
["LG","In Descendants 3, which former princess turns villain with Maleficent's sceptre?","Audrey","Jane","Lonnie","Ella"],
["NB","Audrey's furious villain anthem is…","Queen of Mean","What's My Name","Evil Like Me","Bad Girl"],
["IN","Descendants 3 reveals Mal's dad is…","Hades","Jafar","Dr. Facilier","King Beast"],
["LG","Hades helps save the day using his glowing…","Ember","Trident","Crown","Lantern"],
["IN","At the end of Descendants 3, what happens to the Isle's barrier?","It comes down for good","It gets stronger","It moves","Nothing"],
["LG","Descendants 3 is lovingly dedicated to which late cast member?","Cameron Boyce","Booboo Stewart","Mitchell Hope","Jedidiah Goodacre"],
["IN","Name this actress — Uma, queen of the pirate crew.","China Anne McClain","Dove Cameron","Kylie Cantrall","Halle Bailey","China_Anne_McClain"],
/* ================= THE RISE OF RED (2024) ================= */
["NB","Descendants: The Rise of Red stars Red, daughter of…","The Queen of Hearts","Maleficent","The Evil Queen","Ursula"],
["NB","Red's best friend Chloe is the daughter of…","Cinderella","Snow White","Belle","Rapunzel"],
["IN","Who plays the Queen of Hearts in The Rise of Red?","Rita Ora","Rita Moreno","Adele","Dua Lipa"],
["IN","Chloe's mum Cinderella is played by which R&B legend?","Brandy","Beyoncé","Alicia Keys","Mariah Carey"],
["IN","Red and Chloe travel back in time using…","A magic pocket watch","A mirror","A rabbit hole","A spellbook"],
["LG","The school their parents attended in the past is…","Merlin Academy","Auradon Prep","Dragon Hall","Ever After High"],
["LG","In the past, the sweet young Queen of Hearts is known as…","Bridget","Beatrice","Bella","Betty"],
["LG","The young villain who torments Bridget in the past is…","Uliana, Ursula's sister","Young Maleficent","Lady Tremaine","Young Hook"],
["IN","In The Rise of Red, who is the headmistress of Auradon Prep?","Uma","Fairy Godmother","Mal","Evie"],
["IN","Name this actress — Red, princess of Wonderland.","Kylie Cantrall","Malia Baker","Liamani Segura","Ruby Rose Turner","Kylie_Cantrall"],
/* ================= WICKED WONDERLAND (2026) ================= */
["NB","Descendants: Wicked Wonderland premiered in July of which year?","2026","2024","2022","2025"],
["NB","Wicked Wonderland's brand-new villain is…","Maddox Hatter","Uliana","The Jabberwock","Iracebeth"],
["IN","Changing the past turned Maddox Hatter evil — he used to be…","One of Red's closest friends and the pocket watch's inventor","Red's teacher","A palace guard","Chloe's cousin"],
["IN","Red's kind-hearted younger sister — new to the timeline — is…","Pink","Rose","Ruby","Scarlet"],
["NB","Pink is played by which Camp Rock 3 star?","Liamani Segura","Lumi Pollack","Ava Jean","Brooklynn Pitts"],
["IN","Maddox Hatter kidnaps which royal, kicking off the adventure?","The Queen of Hearts","Cinderella","Fairy Godmother","King Charming"],
["LG","Awkwafina voices which mischievous new character?","Chessy the Cat, the Cheshire Cat's kid","The White Rabbit","The Dormouse","A talking flower"],
["IN","Max Hatter, who helps the heroes, is Maddox's son and the grandson of…","The Mad Hatter","The March Hare","The Red King","Merlin"],
["LG","Luis Madrigal joins the team — his mum is super-strong Luisa from…","Encanto","Coco","Moana","Wish"],
["LG","Hazel Hook is the youngest child of…","Captain Hook","Doctor Facilier","Mother Gothel","Long John Silver"],
["IN","Wicked Wonderland takes place while Wonderland hosts…","Auradon's Kingdom Cup Games","Final Jam","A royal wedding","The Mad Tea Festival"],
["LG","Wicked Wonderland was directed by…","Kimmy Gatewood","Kenny Ortega","Jennifer Phang","Veronica Rodriguez"],
["IN","Which of these is a real Wicked Wonderland song?","Perfect Princess","Perfect Villain","Wonder Girl","Down the Hole"],
["LG","Which Wicked Wonderland song sees heroes and baddies share a dancefloor?","Dancing with the Enemy","Waltz of War","Tea Party Tango","Enemy Mine"],
["LG","The Smee twins in Wicked Wonderland are named…","Squeaky and Squirmy","Salty and Soggy","Flip and Flop","Port and Starboard"],
["IN","Felix Facilier is the child of the villain from…","The Princess and the Frog","Aladdin","Hercules","The Little Mermaid"],
["LG","Robbie Hood — another new face — is descended from…","Robin Hood","Peter Pan","Hercules","Aladdin"],
["IN","In this altered timeline Red must adjust from Villain Kid to…","Hero Kid and perfect-princess expectations","Camp counsellor","Pirate captain","Time cop"],
["NB","Name this movie — Red and Chloe's time-twisting first adventure.","Descendants: The Rise of Red","Descendants: Wicked Wonderland","Alice in Wonderland","Descendants 3","Descendants:_The_Rise_of_Red"],
["IN","Where do Red and Chloe hide the magic pocket watch after their adventure?","Wonderland's hidden royal vault","Under Red's bed","In Auradon's museum","They destroy it"],
/* ================= COVEN ACADEMY (premieres Oct 2026) ================= */
["NB","Coven Academy is set in the haunted heart of which city?","New Orleans","Salem","New York","London"],
["NB","Malachi Barton's Coven Academy character is…","Jake, a magnetic warlock","Ollie, a vampire","Mr. Cole","Alexander"],
["IN","Malina Weissman plays Briar, a New Yorker who discovers she's…","A witch","A vampire","A mermaid","A ghost"],
["IN","Louis Thresher plays Ollie, who is reluctantly turned into…","A vampire","A werewolf","A warlock","A frog"],
["IN","Briar finds herself in a love triangle between…","Jake the warlock and Ollie the vampire","Two vampires","Jake and Alexander","Ollie and Mr. Cole"],
["IN","Sasha, played by Jordan Leftwich, has which gift?","Reading minds","Flying","Invisibility","Talking to animals"],
["LG","Tegan, played by Ora Duplass, is a witch who can bend…","Time","Fire","Gravity","Light"],
["IN","Tiffani Thiessen plays which Coven Academy staff member?","Miss Graves","The lunch lady","Principal Storm","Nurse Nightshade"],
["LG","Devon Sawa joined the cast as which effortlessly cool warlock teacher?","Mr. Cole","Mr. Crow","Professor Pike","Coach Salem"],
["NB","Coven Academy was created by Tim Federle, who also made…","High School Musical: The Musical: The Series","Stranger Things","Wednesday","Riverdale"],
["IN","At Coven Academy, the school motto vibe is: power is currency, secrets are lethal, and attraction is…","A liability","Encouraged","Homework","Forbidden after 9pm"],
["LG","Coven Academy premieres October 1, 2026 on which channel?","Freeform","Disney XD","Netflix","The CW"],
["LG","The day after its premiere, Coven Academy's full season drops on Disney+, Hulu and…","Freeform on Demand","Netflix","Prime Video","BBC Three"],
["LG","Season 1 of Coven Academy was filmed around which city?","Vancouver","New Orleans","Atlanta","Auckland"],
["IN","Which ZOMBIES 4 co-star joins Malachi in Coven Academy as McKenna?","Swayam Bhatia","Freya Skye","Meg Donnelly","Chandler Kinney"],
["IN","Which Wicked Wonderland actor appears in Coven Academy as Alexander?","Brendon Tremblay","Alexandro Byrd","Joel Oulette","Zavien Garrett"],
["LG","Unusually for Disney lately, Coven Academy is…","A brand-new story, not based on existing books or films","A remake","Based on a comic","A prequel to Zombies"],
["IN","The teen witches of Coven Academy are bound by destiny to…","Guard their city from ancient forces","Win a magic tournament","Find a lost spellbook","Break a family curse"],
["NB","Coven Academy mixes magic and mystery with…","The drama of growing up","Cooking contests","Football","Time travel"],
["LG","Coven Academy's story is told in a bingeable format of…","Fast-paced chapters","Two-hour episodes","Musical numbers only","Found footage"],
["NB","Seabrook's peppy cheerleading anthem in ZOMBIES is…","Fired Up","Pom Pom Power","Go Team Go","Bring It On"],
["IN","In Descendants, Evie's real talent turns out to be…","Designing and sewing amazing outfits","Potion making","Archery","Singing opera"],
["IN","Carlos starts Descendants terrified of dogs — then befriends a pup called…","Dude","Rex","Patch","Beast"],
["IN","Mal and Evie's heartfelt Descendants 2 duet about friendship is…","Space Between","Sisters Forever","Better Together","Two of Us"],
["NB","Descendants 3 opens with the VKs recruiting on the Isle to the song…","Good to Be Bad","Rotten to the Core","Ways to Be Wicked","Isle Life"],
["LG","In Camp Rock, Mitchie's dad Steve runs a…","Hardware store","Pizza place","Record shop","Garage"],
["LG","In ZOMBIES 3, the aliens take orders from their ship's computer-parent, voiced by…","RuPaul","Oprah","Awkwafina","Snoop Dogg"],
["IN","In ZOMBIES 4, vampire names have a pattern — Victor, Vera, Vargas all start with…","V","Z","D","B"],
["IN","In Camp Rock 2, Camp Star tries to crush Camp Rock by poaching its…","Staff and campers","Lake","Instruments","Cook"]
];

const DISNEY_QUESTIONS = [];
for (const row of DISNEY_BANK) {
  const [lvl, q, right, w1, w2, w3, wiki] = row;
  const obj = { lvl, q, opts: [right, w1, w2, w3], a: 0 };
  if (wiki) obj.photo = { wiki };
  DISNEY_QUESTIONS.push(obj);
}
PACKS.disney = { name: "Disney Hits — Camp Rock, Zombies & Descendants", icon: "\uD83C\uDFF0", levels: DISNEY_LEVELS, questions: DISNEY_QUESTIONS };
