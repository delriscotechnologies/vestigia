import { ArrowDown } from "lucide-react";

const newestIncomingBatch = [
  {
    id: "entry-130",
    label: "ENTRY 130",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/130-it-workshop.jpg",
    word: "WORKSHOP",
    alt: "Cluttered IT workshop filled with computer components, cables, tools, and storage bins",
  },
  {
    id: "entry-131",
    label: "ENTRY 131",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/131-hardware-lab.jpg",
    word: "LAB",
    alt: "IT hardware lab with worktables, monitors, components, storage bins, and chairs",
    layout: "wide",
  },
  {
    id: "entry-132",
    label: "ENTRY 132",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/132-golden-hour-flight.jpg",
    word: "GOLDEN HOUR",
    alt: "Airplane wing above a sprawling city in warm golden-hour light",
  },
  {
    id: "entry-133",
    label: "ENTRY 133",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/133-network-cabling.jpg",
    word: "CABLING",
    alt: "Network rack covered with dense bundles of blue, orange, yellow, and black cabling",
  },
  {
    id: "entry-134",
    label: "ENTRY 134",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/134-network-rack.jpg",
    word: "NETWORK",
    alt: "Compact rack holding Cisco routers and switches above a Tripp Lite power unit",
  },
  {
    id: "entry-135",
    label: "ENTRY 135",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/135-networking-lab.jpg",
    word: "SYSTEMS",
    alt: "Networking lab with laptops, wall-mounted displays, a small rack, and connected cables",
    layout: "wide",
  },
  {
    id: "entry-136",
    label: "ENTRY 136",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/136-hardware-storage.jpg",
    word: "STORAGE",
    alt: "Narrow storage room packed with computer components, clear bins, racks, and cables",
  },
  {
    id: "entry-137",
    label: "ENTRY 137",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/137-computer-build.jpg",
    word: "BUILD",
    alt: "Open white computer case and motherboard surrounded by tools and component bins in a lab",
  },
  {
    id: "entry-138",
    label: "ENTRY 138",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/138-colombian-keychain.jpg",
    word: "COLOMBIA",
    alt: "Hand holding a woven Colombian-flag keychain above a computer motherboard",
  },
  {
    id: "entry-139",
    label: "ENTRY 139",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/139-sunlit-flight.jpg",
    word: "SUNLIGHT",
    alt: "Airplane wing above bright clouds and long contrails in direct sunlight",
  },
  {
    id: "entry-140",
    label: "ENTRY 140",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/140-cloud-wing.jpg",
    word: "CLOUDS",
    alt: "Airplane wing crossing a bright field of clouds beneath long white contrails",
  },
  {
    id: "entry-141",
    label: "ENTRY 141",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/141-mossy-lakeshore.jpg",
    word: "LAKESHORE",
    alt: "Rocky lakeshore framed by a large oak tree draped in Spanish moss",
  },
  {
    id: "entry-142",
    label: "ENTRY 142",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/142-forest-approach.jpg",
    word: "APPROACH",
    alt: "Airplane wing descending above a dense green forest beneath scattered clouds",
  },
  {
    id: "entry-143",
    label: "ENTRY 143",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/143-mossy-trail.jpg",
    word: "TRAIL",
    alt: "Sunlit woodland trail beneath large trees draped in Spanish moss",
  },
  {
    id: "entry-144",
    label: "ENTRY 144",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/144-oak-lakeshore.jpg",
    word: "OAKS",
    alt: "Wide lakeshore view beneath overhanging oak branches and Spanish moss",
  },
  {
    id: "entry-145",
    label: "ENTRY 145",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/145-florida-museum.jpg",
    word: "MUSEUM",
    alt: "Hand holding a strip of blue Florida Museum butterfly stickers",
  },
];

const incomingBatch = [
  {
    index: "108",
    slug: "royal-procession",
    alt: "Elaborate historical painting of a crowned knight on a white horse surrounded by flowers and attendants",
    word: "PROCESSION",
  },
  {
    index: "109",
    slug: "blue-mustang",
    alt: "Blue Ford Mustang parked on wet grass beneath rain-soaked trees",
    word: "MUSTANG",
  },
  {
    index: "110",
    slug: "river-city-flight",
    alt: "Airplane wing above a river, bridge, industrial waterfront, and sprawling city beneath cumulus clouds",
    word: "RIVER CITY",
  },
  {
    index: "111",
    slug: "farmland-flight",
    alt: "Airplane wing above a patchwork of farmland beneath a clear blue sky",
    word: "FARMLAND",
  },
  {
    index: "112",
    slug: "samurai-armor",
    alt: "Ornate samurai armor displayed beside a stone lantern indoors",
    word: "SAMURAI",
  },
  {
    index: "113",
    slug: "the-alamo",
    alt: "The Alamo facade beneath a textured cyan-blue sky",
    word: "ALAMO",
  },
  {
    index: "114",
    slug: "downtown-corner",
    alt: "Historic downtown intersection framed by a classical building and ornate tower",
    word: "DOWNTOWN",
  },
  {
    index: "115",
    slug: "rivercenter-holidays",
    alt: "Rivercenter canal and holiday tree inside a glass-fronted shopping complex",
    word: "RIVERCENTER",
    layout: "wide",
  },
  {
    index: "116",
    slug: "lakeside-shelter",
    alt: "Picnic shelter and grill beside a quiet lake beneath a pastel evening sky",
    word: "LAKESIDE",
  },
  {
    index: "117",
    slug: "texas-seal",
    alt: "Republic of Texas floor seal viewed from an upper level as visitors gather around it",
    word: "TEXAS",
  },
  {
    index: "118",
    slug: "mills-county-museum",
    alt: "Stone Mills County Museum building with mural and directional signs",
    word: "MUSEUM",
  },
  {
    index: "119",
    slug: "computer-parts",
    alt: "Computer motherboard, power supply, drives, and cables arranged on a table",
    word: "HARDWARE",
  },
  {
    index: "120",
    slug: "highrise-canyon",
    alt: "Dense high-rise residential towers viewed from street level beneath an overcast sky",
    word: "HIGHRISE",
    layout: "wide",
  },
  {
    index: "121",
    slug: "illuminated-trees",
    alt: "Tall trees illuminated in vivid pink, green, and blue lights at night",
    word: "LIGHTS",
  },
  {
    index: "122",
    slug: "hong-kong-crossing",
    alt: "Hong Kong street crossing surrounded by high-rise buildings and curved digital billboards",
    word: "HONG KONG",
  },
  {
    index: "123",
    slug: "holiday-tower",
    alt: "Colorfully illuminated tree and tower flying an American flag at dusk",
    word: "HOLIDAYS",
  },
  {
    index: "124",
    slug: "neon-city-street",
    alt: "Busy Hong Kong street with curved digital screens, taxis, and yellow road markings",
    word: "CITY LIGHTS",
  },
  {
    index: "125",
    slug: "family-monument",
    alt: "Bronze family monument standing in a quiet park beneath a clear blue sky",
    word: "FAMILY",
  },
  {
    index: "126",
    slug: "resist-accept",
    alt: "Graphic reading What you resist persists and What you accept dissolves around a monochrome ocean illustration",
    word: "ACCEPT",
  },
  {
    index: "127",
    slug: "basketball-arena",
    alt: "Packed indoor basketball arena during a game",
    word: "ARENA",
    layout: "wide",
  },
  {
    index: "128",
    slug: "marching-band",
    alt: "Marching band performing on a football field before a packed stadium",
    word: "MARCHING",
    layout: "wide",
  },
  {
    index: "129",
    slug: "bulletin-board",
    alt: "Colorful college bulletin board with motivational messages and community notices",
    word: "CHARACTER",
    layout: "wide",
  },
].map(({ slug, layout, ...entry }) => ({
  ...entry,
  id: `entry-${entry.index}`,
  date: "02 AUG 2026",
  dateTime: "2026-08-02",
  image: `/photos/entry-${entry.index}-${slug}.jpg`,
  layout,
  fit: layout ? undefined : "contain",
}));

const currentBatch = [
  {
    index: "093",
    slug: "legislative-chamber",
    alt: "Historic legislative chamber with wooden desks beneath an ornate illuminated coffered ceiling",
    word: "CHAMBER",
  },
  {
    index: "094",
    slug: "dusk-skyline",
    alt: "City skyline at dusk beneath layered dark clouds, seen through reflective glass",
    word: "DUSK",
    layout: "wide",
  },
  {
    index: "095",
    slug: "red-field",
    alt: "Red-tinted agricultural field beneath a pale overcast sky",
    word: "FIELD",
  },
  {
    index: "096",
    slug: "mirrored-octopus",
    alt: "Large mirrored octopus sculpture beneath a bright blue sky",
    word: "OCTOPUS",
  },
  {
    index: "097",
    slug: "city-grid-sunset",
    alt: "City lights stretching toward an orange sunset horizon from an airplane",
    word: "CITY GRID",
    layout: "wide",
  },
  {
    index: "098",
    slug: "route-66",
    alt: "Route 66 medallion embedded in weathered pavement between painted lane marks",
    word: "ROUTE 66",
  },
  {
    index: "099",
    slug: "city-wing",
    alt: "Airplane wing banking above a dense coastal city under a clear blue sky",
    word: "BANKING",
  },
  {
    index: "100",
    slug: "snow-sunset",
    alt: "Snow-covered ground beneath dramatic blue clouds and a low golden sunset",
    word: "WINTER",
  },
  {
    index: "101",
    slug: "river-wing",
    alt: "Airplane wing above a river, bridge, and city under a deep blue sky",
    word: "RIVER",
  },
  {
    index: "102",
    slug: "vida-eterna",
    alt: "Museum display titled Vida eterna with an Epicurus quotation above a funerary vessel",
    word: "VIDA ETERNA",
  },
  {
    index: "103",
    slug: "reservoir-road",
    alt: "Lake and green hills seen from a bridge with a yellow railing",
    word: "RESERVOIR",
  },
  {
    index: "104",
    slug: "rooftop-cats",
    alt: "Two cats standing on a tiled roof at night beside flowering foliage",
    word: "ROOFTOP",
  },
  {
    index: "105",
    slug: "mountain-valley",
    alt: "Green mountain farmland beneath low clouds, seen from a roadside",
    word: "VALLEY",
  },
  {
    index: "106",
    slug: "rocky-stream",
    alt: "Rocky stream flowing beside a white country building and garden",
    word: "STREAM",
  },
  {
    index: "107",
    slug: "pasture-clouds",
    alt: "Cows grazing in a green pasture beneath dramatic clouds and distant hills",
    word: "PASTURE",
    layout: "wide",
  },
].map(({ slug, layout, ...entry }) => ({
  ...entry,
  id: `entry-${entry.index}`,
  date: "02 AUG 2026",
  dateTime: "2026-08-02",
  image: `/photos/entry-${entry.index}-${slug}.jpg`,
  layout,
  fit: layout ? undefined : "contain",
}));

const newestBatch = [
  {
    index: "060",
    slug: "bugs-bunny-carrot",
    alt: "Bugs Bunny holding a carrot at the end of a cartoon shotgun",
    word: "CARROT",
    layout: "wide",
  },
  {
    index: "061",
    slug: "childrens-murals",
    alt: "Children's painted drawings and Spanish messages displayed above open windows",
    word: "DRAWINGS",
    layout: "wide",
  },
  {
    index: "062",
    slug: "night-basketball",
    alt: "People playing basketball on a brightly lit outdoor court at night",
    word: "NIGHT GAME",
  },
  {
    index: "063",
    slug: "playground-bw",
    alt: "Black-and-white view of a busy community playground lined with tires",
    word: "PLAYGROUND",
  },
  {
    index: "064",
    slug: "tilted-coast",
    alt: "Tilted coastal view with blue water, pink clouds, and blurred trees",
    word: "COAST",
  },
  {
    index: "065",
    slug: "pink-clouds",
    alt: "Pink-tinted clouds above leafy trees against a deep blue sky",
    word: "CLOUDS",
  },
  {
    index: "066",
    slug: "child-drawing",
    alt: "Colorful child's crayon portrait drawn on folded graph paper",
    word: "PORTRAIT",
  },
  {
    index: "067",
    slug: "seaside-pier",
    alt: "Long wooden pier beside a sandy beach and brown-blue sea",
    word: "PIER",
  },
  {
    index: "068",
    slug: "palms-dusk",
    alt: "Palm trees moving in the breeze beneath a soft blue and pink dusk sky",
    word: "PALMS",
  },
  {
    index: "069",
    slug: "heavenly-fresco",
    alt: "Oval architectural fresco with angels floating among bright clouds",
    word: "HEAVEN",
  },
  {
    index: "070",
    slug: "marina-tree",
    alt: "Marina and sailboats framed by dark tree branches and colorful light leaks",
    word: "MARINA",
  },
  {
    index: "071",
    slug: "storm-road",
    alt: "Dark storm clouds above a road seen through a rain-speckled windshield",
    word: "WEATHER",
  },
  {
    index: "072",
    slug: "concorde-bus",
    alt: "Illuminated Concorde coach bus parked at a terminal late at night",
    word: "ARRIVAL",
  },
  {
    index: "073",
    slug: "terminal-night",
    alt: "Night bus terminal with colorful lights stretched by camera movement",
    word: "TERMINAL",
    layout: "wide",
  },
  {
    index: "074",
    slug: "framed-emblem",
    alt: "Circular framed embroidered emblem with an eagle, flags, and the word Libertad",
    word: "LIBERTAD",
  },
  {
    index: "075",
    slug: "monument-sky",
    alt: "Tall sculptural monument rising into a dramatic field of grey clouds",
    word: "MONUMENT",
  },
  {
    index: "076",
    slug: "stone-plaza",
    alt: "Broad stone plaza with colonial buildings and people beneath heavy clouds",
    word: "PLAZA",
  },
  {
    index: "077",
    slug: "palms-silhouette",
    alt: "Dark palm silhouettes against a clear blue sky and pale sunset glow",
    word: "SILHOUETTE",
  },
  {
    index: "078",
    slug: "fairground-grid",
    alt: "Colorful amusement rides and holiday lights seen through a metal grid at night",
    word: "FAIRGROUND",
  },
  {
    index: "079",
    slug: "highway-sun",
    alt: "Open highway heading toward low mountains beneath sunlit clouds",
    word: "HIGHWAY",
  },
  {
    index: "080",
    slug: "red-palms",
    alt: "Palm tree and tropical foliage rendered in deep red beneath a stormy sky",
    word: "RED PALMS",
  },
  {
    index: "081",
    slug: "river-jetski",
    alt: "Two people riding a jet ski across a wide river beyond green shrubs",
    word: "CURRENT",
  },
  {
    index: "082",
    slug: "howdy-wing",
    alt: "Airplane wing with a yellow Howdy winglet seen through the cabin window",
    word: "HOWDY",
  },
  {
    index: "083",
    slug: "floral-coffee",
    alt: "Black coffee in a red floral ceramic cup and saucer on a wooden table",
    word: "COFFEE",
    layout: "wide",
  },
  {
    index: "084",
    slug: "ferris-wheel",
    alt: "Large Ferris wheel glowing with green, pink, and blue lights at night",
    word: "ENTRANCE",
  },
  {
    index: "085",
    slug: "red-palm-road",
    alt: "Road lined with palms and foliage rendered in vivid red beneath a cyan sky",
    word: "ROAD",
    layout: "wide",
  },
  {
    index: "086",
    slug: "sunset-fence",
    alt: "Pastel sunset behind silhouetted palms, utility wires, and a pointed fence",
    word: "FENCE",
    layout: "wide",
  },
  {
    index: "087",
    slug: "sunset-clouds",
    alt: "Brilliant orange sunset along the horizon above a dense cloud layer",
    word: "HORIZON",
  },
  {
    index: "088",
    slug: "aerial-clouds",
    alt: "Aerial view of towering white clouds scattered over the landscape",
    word: "ALTITUDE",
  },
  {
    index: "089",
    slug: "pastel-clouds",
    alt: "Peach and cream storm clouds crossed by dark utility wires",
    word: "PASTEL",
    layout: "wide",
  },
  {
    index: "090",
    slug: "night-flight",
    alt: "Airplane wing above a sprawling field of city lights at night",
    word: "NIGHT FLIGHT",
  },
  {
    index: "091",
    slug: "city-cranes",
    alt: "Daytime city skyline with high-rise buildings and orange construction cranes",
    word: "CRANES",
    layout: "wide",
  },
  {
    index: "092",
    slug: "twilight-flight",
    alt: "Airplane wing above city lights and a thin orange twilight horizon",
    word: "TWILIGHT",
  },
].map(({ slug, layout, ...entry }) => ({
  ...entry,
  id: `entry-${entry.index}`,
  date: "02 AUG 2026",
  dateTime: "2026-08-02",
  image: `/photos/entry-${entry.index}-${slug}.jpg`,
  layout,
  fit: layout ? undefined : "contain",
}));

const latestBatch = [
  {
    index: "022",
    slug: "playstation-logo",
    alt: "Classic multicolor PlayStation logo on a black background",
    word: "PLAY",
    layout: "wide",
  },
  {
    index: "023",
    slug: "river-window",
    alt: "Wide brown river seen through a window beneath a clear blue sky",
    word: "RIVER",
  },
  {
    index: "024",
    slug: "blue-hour-reflections",
    alt: "Blue-hour sky and city lights reflected across a window",
    word: "REFLECTION",
  },
  {
    index: "025",
    slug: "mistakes-proof",
    alt: "Colorful framed sign reading Mistakes are proof that you are trying",
    word: "TRYING",
  },
  {
    index: "026",
    slug: "harbor-ship",
    alt: "Cargo ship crossing a harbor beyond a waterfront railing",
    word: "HARBOR",
  },
  {
    index: "027",
    slug: "waterfront-ship",
    alt: "Cargo ship beyond an open brick waterfront under a pale sky",
    word: "CROSSING",
  },
  {
    index: "028",
    slug: "wing-above-clouds",
    alt: "Airplane wing above scattered clouds with violet window reflections",
    word: "ABOVE",
  },
  {
    index: "029",
    slug: "modern-architecture",
    alt: "Angular modern buildings, traffic lights, and cars beneath cloudy skies",
    word: "ANGLES",
    layout: "wide",
  },
  {
    index: "030",
    slug: "now-hiring",
    alt: "American flag beside a Now Hiring sign at sunset",
    word: "HIRING",
  },
  {
    index: "031",
    slug: "worn-denim",
    alt: "Two seated people wearing worn denim and brown boots",
    word: "WORN",
  },
  {
    index: "032",
    slug: "sunset-flight",
    alt: "Small airplane crossing an orange and violet sunset beyond a terrace",
    word: "DEPARTURE",
  },
  {
    index: "033",
    slug: "framed-tree",
    alt: "Green tree seen through a dark wooden window frame",
    word: "FRAME",
  },
  {
    index: "034",
    slug: "nails-pop-art",
    alt: "Colorful pop-art poster of a woman above the word Nails",
    word: "NAILS",
    layout: "wide",
  },
  {
    index: "035",
    slug: "virginia-tech-cap",
    alt: "Maroon Virginia Tech cap resting on denim inside a car",
    word: "TECH",
  },
  {
    index: "036",
    slug: "summer-bloom",
    alt: "White flowering branches reaching into a deep blue summer sky",
    word: "BLOOM",
  },
  {
    index: "037",
    slug: "mural-409",
    alt: "Large mural of a fragmented figure painted on a white building marked 409",
    word: "MOTION",
  },
  {
    index: "038",
    slug: "pool-light-leak",
    alt: "Quiet blue swimming pool with an orange light leak along the right edge",
    word: "STILL",
  },
  {
    index: "039",
    slug: "koi-pond",
    alt: "Koi fish swimming in a shadowed garden pond surrounded by foliage",
    word: "KOI",
  },
  {
    index: "040",
    slug: "forest-canopy",
    alt: "Dense green forest canopy viewed from a shaded path",
    word: "CANOPY",
  },
  {
    index: "041",
    slug: "transit-colors",
    alt: "People walking through a transit station under geometric skylights and rainbow light",
    word: "TRANSIT",
  },
  {
    index: "042",
    slug: "archives-parade",
    alt: "Crowd and colorful umbrellas outside the National Archives during a parade",
    word: "ARCHIVES",
  },
  {
    index: "043",
    slug: "hot-now",
    alt: "Red Hot Now Krispy Kreme neon sign reflected in glass",
    word: "HOT NOW",
  },
  {
    index: "044",
    slug: "space-rockets",
    alt: "Historic rockets and spacecraft displayed inside a large museum hall",
    word: "LAUNCH",
  },
  {
    index: "045",
    slug: "american-flag",
    alt: "American flag flying above trees beneath an intense blue sky",
    word: "FLAG",
  },
  {
    index: "046",
    slug: "lunar-module",
    alt: "Lunar module display with an astronaut figure inside a museum",
    word: "LUNAR",
  },
  {
    index: "047",
    slug: "gallery-statue",
    alt: "Black-and-white photograph of a classical woman statue holding flowers",
    word: "FIGURE",
  },
  {
    index: "048",
    slug: "museum-columns",
    alt: "Monumental museum entrance with tall classical columns beneath a cloudy sky",
    word: "COLUMNS",
  },
  {
    index: "049",
    slug: "museum-fountain",
    alt: "Dark stone fountain and sculpture between marble columns inside a museum",
    word: "FOUNTAIN",
  },
  {
    index: "050",
    slug: "koi-garden",
    alt: "Colorful koi gathering beside a decorative bridge in a lush garden pond",
    word: "GARDEN",
  },
  {
    index: "051",
    slug: "city-clock",
    alt: "Tilted downtown view with a street clock and Wells Fargo tower",
    word: "DOWNTOWN",
  },
  {
    index: "052",
    slug: "neon-cafe",
    alt: "Layered red, pink, blue, and yellow cafe neon signs",
    word: "NEON",
  },
  {
    index: "053",
    slug: "night-tower",
    alt: "Dark city tower framed by streetlights late at night",
    word: "MIDNIGHT",
  },
  {
    index: "054",
    slug: "ceiling-art",
    alt: "Ornate framed ceiling fresco filled with figures and clouds",
    word: "FRESCO",
  },
  {
    index: "055",
    slug: "flowers-painting",
    alt: "Framed village painting partly covered by a bouquet of red and white flowers",
    word: "BOUQUET",
  },
  {
    index: "056",
    slug: "shakespeare-quote",
    alt: "Spanish William Shakespeare quotation printed diagonally on a book page",
    word: "FORTUNA",
  },
  {
    index: "057",
    slug: "windows-98",
    alt: "Microsoft Windows 98 logo floating against a cloudy blue sky",
    word: "WINDOWS",
  },
  {
    index: "058",
    slug: "cloud-prism",
    alt: "Soft violet clouds crossed by a vertical rainbow light leak",
    word: "PRISM",
  },
  {
    index: "059",
    slug: "night-skyline",
    alt: "Night skyline beneath broad red, orange, and blue light streaks",
    word: "SKYLINE",
  },
].map(({ slug, layout, ...entry }) => ({
  ...entry,
  id: `entry-${entry.index}`,
  date: "02 AUG 2026",
  dateTime: "2026-08-02",
  image: `/photos/entry-${entry.index}-${slug}.jpg`,
  layout,
  fit: layout ? undefined : "contain",
}));

const entries = [
  ...incomingBatch,
  ...currentBatch,
  ...newestBatch,
  ...latestBatch,
  {
    id: "entry-002",
    index: "002",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-002-soul.jpg",
    alt: "Golden clouds at sunset with the word soul in white",
    word: "SOUL",
    fit: "contain",
  },
  {
    id: "entry-003",
    index: "003",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-003-top.jpg",
    alt: "Storm clouds over a turquoise sea and beach with the word top",
    word: "TOP",
    fit: "contain",
  },
  {
    id: "entry-004",
    index: "004",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-004-the-world-is-yours.jpg",
    alt: "Blimp against a deep blue sky displaying the message The World Is Yours",
    word: "YOURS",
    layout: "panorama",
  },
  {
    id: "entry-005",
    index: "005",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-005-skys-the-limit.jpg",
    alt: "Collection of vintage video game consoles, controllers, and cartridges",
    word: "LIMIT",
    fit: "contain",
  },
  {
    id: "entry-006",
    index: "006",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-006-much-flavor.jpg",
    alt: "Leafy path opening onto a bright beach with the words much flavor",
    word: "FLAVOR",
    fit: "contain",
  },
  {
    id: "entry-007",
    index: "007",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-007-litty.jpg",
    alt: "Vintage game cartridges arranged on a city poster with the word litty",
    word: "LITTY",
    fit: "contain",
  },
  {
    id: "entry-008",
    index: "008",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-008-ciudad-de-furia.jpg",
    alt: "Dark path leading to the sea at dusk with the words ciudad de furia",
    word: "FURIA",
    fit: "contain",
  },
  {
    id: "entry-009",
    index: "009",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-009-night-lights.jpg",
    alt: "Illuminated city architecture at night with a tower and neon lights",
    word: "NIGHT",
    fit: "contain",
  },
  {
    id: "entry-010",
    index: "010",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-010-daylight.jpg",
    alt: "Palm trees and ornate city buildings under a clear blue sky",
    word: "DAYLIGHT",
    fit: "contain",
  },
  {
    id: "entry-011",
    index: "011",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-011-extremo.jpg",
    alt: "Calm ocean and beach at dusk with the words te llevare hasta el extremo",
    word: "EXTREMO",
    fit: "contain",
  },
  {
    id: "entry-012",
    index: "012",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-012-solo-asi.jpg",
    alt: "Blue ocean waves reaching the shore with the words solo asi yo te vere",
    word: "VERE",
    fit: "contain",
  },
  {
    id: "entry-013",
    index: "013",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-013-beach-path.jpg",
    alt: "Shadowed path between dense plants leading toward the ocean",
    word: "PATH",
    fit: "contain",
  },
  {
    id: "entry-014",
    index: "014",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-014-city-map.jpg",
    alt: "Night aerial view of illuminated streets forming a city grid",
    word: "GRID",
    fit: "contain",
  },
  {
    id: "entry-015",
    index: "015",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-015-no-parking.jpg",
    alt: "Tilted no-parking sign illuminated at night above green foliage",
    word: "STAY",
    fit: "contain",
  },
  {
    id: "entry-016",
    index: "016",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-016-twilight.jpg",
    alt: "Dark park landscape with a narrow orange glow along the horizon",
    word: "TWILIGHT",
    fit: "contain",
  },
  {
    id: "entry-017",
    index: "017",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-017-live-music.jpg",
    alt: "Live band performing in a hazy venue under purple lighting",
    word: "LIVE",
    fit: "contain",
  },
  {
    id: "entry-018",
    index: "018",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-018-city-lights.jpg",
    alt: "City lights seen at night beneath a dark cloudy sky",
    word: "CITY LIGHTS",
    fit: "contain",
  },
  {
    id: "entry-019",
    index: "019",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-019-yellow-car.jpg",
    alt: "Close view of a yellow car door and side mirror at night",
    word: "DRIVE",
    layout: "wide",
  },
  {
    id: "entry-020",
    index: "020",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-020-storm-front.jpg",
    alt: "Blue storm clouds over silhouetted trees and a glowing horizon",
    word: "STORM",
    fit: "contain",
  },
  {
    id: "entry-021",
    index: "021",
    date: "02 AUG 2026",
    dateTime: "2026-08-02",
    image: "/photos/entry-021-after-hours.jpg",
    alt: "Dim restaurant interior lit by red and blue neon after dark",
    word: "AFTER HOURS",
    layout: "wide",
  },
  {
    id: "entry-001",
    index: "001",
    date: "01 AUG 2026",
    dateTime: "2026-08-01",
    image: "/photos/entry-001-miami.jpg",
    alt: "Rainy boulevard seen through a car windshield, with palm trees and tall buildings",
    word: "JOURNAL",
  },
];

const latestEntryId = entries[0].id;

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Entry({ entry, isFirst }) {
  const nextId = entries[entries.findIndex((item) => item.id === entry.id) + 1]?.id ?? "about";
  const entryClassName = entry.layout ? `entry entry--${entry.layout}` : "entry";
  const frameModifier = entry.layout ?? entry.fit;
  const frameClassName = frameModifier ? `photo-frame photo-frame--${frameModifier}` : "photo-frame";

  return (
    <article className={entryClassName} id={entry.id}>
      <p className="entry__mobile-index">ENTRY {entry.index}</p>

      <figure className={frameClassName}>
        <img
          src={entry.image}
          alt={entry.alt}
          loading={isFirst ? "eager" : "lazy"}
          fetchPriority={isFirst ? "high" : "auto"}
        />
      </figure>

      <div className="entry__meta">
        <p>ENTRY {entry.index}</p>

        <button className="continue" type="button" onClick={() => scrollToId(nextId)}>
          <span>SCROLL TO CONTINUE</span>
          <ArrowDown size={18} strokeWidth={1.25} aria-hidden="true" />
        </button>
      </div>

      <p className="entry__word" aria-hidden="true">{entry.word}</p>
    </article>
  );
}

export function App() {
  return (
    <>
      <a className="skip-link" href={`#${latestEntryId}`}>Skip to photographs</a>

      <header className="site-header">
        <nav aria-label="Primary navigation">
          <a className="is-active" href={`#${latestEntryId}`}>LATEST</a>
          <a href="#about">ABOUT</a>
        </nav>
      </header>

      <main>
        <section className="entries" aria-label="Photo journal">
          {entries.map((entry, index) => <Entry key={entry.id} entry={entry} isFirst={index === 0} />)}
        </section>

        <footer id="about">
          <p className="eyebrow">ABOUT THIS JOURNAL</p>
          <p>A personal archive of photographs, presented in the order they are published.</p>
          <a href={`#${latestEntryId}`}>BACK TO LATEST</a>
        </footer>
      </main>
    </>
  );
}
