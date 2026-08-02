import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const photosDir = path.join(root, "public", "photos");
const srcDir = path.join(root, "src");
const backupDir = path.join(root, ".codex", "backups");
const reportDir = path.join(root, ".codex");

const batches = [
  {
    folder: String.raw`C:\Users\novashade\.codex\codex-remote-attachments\019fbe85-8731-72f1-9bab-d5af2b3417c3\544188DC-CA31-4159-9738-F10C5F66A52A`,
    entries: [
      ["1-Pasted-Image-1.jpg", "shanghai-skyline", "Shanghai skyline at night", "Illuminated skyscrapers rising above a Shanghai street at night"],
      ["2-Pasted-Image-1.jpg", "shanghai-night-crowd", "Shanghai after dark", "Crowded Shanghai street beneath a glowing billboard at night"],
      ["3-Pasted-Image-1.jpg", "amarillo-beaver-sign", "Amarillo blue", "Buc-ee's beaver sign against a clear blue sky in Amarillo"],
      ["4-Pasted-Image-1.jpg", "cisco-boxes", "New arrivals", "Four Cisco equipment boxes stacked in a workroom"],
      ["5-Pasted-Image-1.jpg", "penguin-reflection", "Under glass", "Penguin swimming behind glass with visitors reflected in the exhibit"],
      ["6-Pasted-Image-1.jpg", "penguins-underwater", "At the surface", "Penguins swimming together at the waterline"],
      ["7-Pasted-Image-1.jpg", "zebras", "Stripes", "Zebras walking through a sunlit rocky habitat"],
      ["8-Pasted-Image-1.jpg", "resting-zebra", "Rest", "Zebra resting on warm sand in the afternoon light"],
      ["9-Pasted-Image-1.jpg", "flamingos", "Pink morning", "A flock of flamingos standing beside turquoise water"],
      ["10-Pasted-Image-1.jpg", "night-train", "Night line", "A quiet path beside an illuminated train at night"],
      ["11-Pasted-Image-1.jpg", "foggy-mountain", "Almost winter", "Fog covering a sparse snowy mountain slope"],
      ["12-Pasted-Image-1.jpg", "santa-fe-station", "Santa Fe", "Santa Fe station facade illuminated at night"],
      ["13-Pasted-Image-1.jpg", "mountain-view", "Through the rain", "Mountain ridges seen through a rain-speckled window"],
      ["14-Pasted-Image-1.jpg", "pc-build", "Build night", "Computer components spread across a dining table during a PC build"],
      ["15-Pasted-Image-1.jpg", "snowy-street", "First snow", "A car parked beside a quiet snow-covered street at night"],
      ["16-Pasted-Image-1.jpg", "campus-building", "Blue afternoon", "Campus building beneath a vivid blue sky"],
    ],
  },
  {
    folder: String.raw`C:\Users\novashade\.codex\codex-remote-attachments\019fbe85-8731-72f1-9bab-d5af2b3417c3\E66E9C9C-FAFB-42CE-88E8-F7075F3890A7`,
    entries: [
      ["1-Pasted-Image-1.jpg", "color-cable-rack", "Signal color", "Network rack filled with red, green, blue and orange cables"],
      ["2-Pasted-Image-1.jpg", "vintage-sunset", "Last light", "Warm analog-style sunset above a dark field"],
      ["3-Pasted-Image-1.jpg", "light-leak-flight", "Blue altitude", "Clouds from an airplane window with a pink light leak"],
      ["4-Pasted-Image-1.jpg", "wall-network-rack", "Wall of lines", "Wall-mounted network rack with yellow, blue and black cables"],
    ],
  },
  {
    folder: String.raw`C:\Users\novashade\.codex\codex-remote-attachments\019fbe85-8731-72f1-9bab-d5af2b3417c3\05F3C665-05B1-4117-BEFB-820375DA48FD`,
    entries: [
      ["1-Pasted-Image-1.jpg", "lakeside-ducks", "Lakeside", "Two ducks resting beside a calm lake"],
      ["2-Pasted-Image-1.jpg", "red-cliff", "Red wall", "Sunlit red rock cliff beneath a bright blue sky"],
      ["3-Pasted-Image-1.jpg", "private-jet-hangar", "Hangar light", "Private aircraft inside a bright maintenance hangar"],
      ["4-Pasted-Image-1.jpg", "radial-engine", "Open engine", "Exposed radial aircraft engine with NASA aircraft in the background"],
      ["5-Pasted-Image-1.jpg", "fishing-lake", "Waiting", "Fishing rod set at the edge of a clear blue lake"],
      ["6-Pasted-Image-1.jpg", "nasa-aircraft", "On the apron", "Vintage propeller aircraft beside a NASA jet under gray clouds"],
      ["7-Pasted-Image-1.jpg", "space-display", "Small missions", "Models of rockets, a lunar lander and a space shuttle in a museum display"],
      ["8-Pasted-Image-1.jpg", "citation-hangar", "Citation hangar", "Rows of Citation aircraft inside a large hangar"],
      ["9-Pasted-Image-1.jpg", "train-through-rain", "Passing freight", "Freight train crossing a green landscape beneath storm clouds"],
      ["10-Pasted-Image-1.jpg", "wind-turbine", "Wind line", "Wind turbine above weathered rail cars on an overcast day"],
      ["11-Pasted-Image-1.jpg", "vintage-aircraft", "Workshop wings", "Small vintage aircraft inside a museum hangar"],
      ["12-Pasted-Image-1.jpg", "geese-by-lake", "The gathering", "Geese beside a lake beneath a pink-tinted sky"],
      ["13-Pasted-Image-1.jpg", "network-rack-live", "Live rack", "Network routers and switches connected with colorful cables"],
      ["14-Pasted-Image-1.jpg", "roadside-message", "Roadside note", "Roadside billboard beneath a vast gray sky"],
      ["15-Pasted-Image-1.jpg", "hardware-inventory", "Inventory day", "Computer parts and labeled bins spread across a worktable"],
      ["16-Pasted-Image-1.jpg", "shuffle-terminal", "Running again", "Terminal window showing containers starting successfully"],
    ],
  },
];

function walk(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) result.push(...walk(full));
    else result.push(full);
  }
  return result;
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeForQuote(value, quote) {
  const escaped = value.replace(/\\/g, "\\\\");
  if (quote === "'") return escaped.replace(/'/g, "\\'");
  if (quote === '"') return escaped.replace(/"/g, '\\"');
  return escaped.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function replaceStringProperty(source, key, value) {
  const pattern = new RegExp(`(\\b${key}\\s*:\\s*)(['\"\\x60])((?:\\\\.|(?!\\2)[\\s\\S])*?)\\2`);
  return source.replace(pattern, (_all, prefix, quote) => `${prefix}${quote}${escapeForQuote(value, quote)}${quote}`);
}

function replaceNumericProperty(source, key, value) {
  const pattern = new RegExp(`(\\b${key}\\s*:\\s*)-?\\d+(?:\\.\\d+)?`);
  return source.replace(pattern, `$1${value}`);
}

function replaceArrayProperty(source, key, value = "[]") {
  const pattern = new RegExp(`(\\b${key}\\s*:\\s*)\\[[\\s\\S]*?\\]`);
  return source.replace(pattern, `$1${value}`);
}

function jpegDimensions(file) {
  const buffer = fs.readFileSync(file);
  if (buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }
    if (!length) break;
    offset += length + 2;
  }
  return null;
}

function findObjectBounds(source, needleIndex) {
  const stack = [];
  let quote = null;
  let lineComment = false;
  let blockComment = false;
  let escaped = false;
  for (let index = 0; index <= needleIndex; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "/" && next === "/") {
      lineComment = true;
      index += 1;
    } else if (char === "/" && next === "*") {
      blockComment = true;
      index += 1;
    } else if (char === "'" || char === '"' || char === "`") quote = char;
    else if (char === "{") stack.push(index);
    else if (char === "}") stack.pop();
  }
  if (!stack.length) throw new Error("Could not locate the photo object start.");
  const start = stack.at(-1);
  let depth = 0;
  quote = null;
  lineComment = false;
  blockComment = false;
  escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];
    if (lineComment) {
      if (char === "\n") lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === "*" && next === "/") {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === "\\") escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "/" && next === "/") {
      lineComment = true;
      index += 1;
    } else if (char === "/" && next === "*") {
      blockComment = true;
      index += 1;
    } else if (char === "'" || char === '"' || char === "`") quote = char;
    else if (char === "{") depth += 1;
    else if (char === "}") {
      depth -= 1;
      if (depth === 0) return { start, end: index + 1 };
    }
  }
  throw new Error("Could not locate the photo object end.");
}

function nextFreeFilename(prefix, slug, usedNames) {
  let number = prefix;
  let candidate = `${String(number).padStart(3, "0")}-${slug}.jpg`;
  while (usedNames.has(candidate.toLowerCase())) {
    number += 1;
    candidate = `${String(number).padStart(3, "0")}-${slug}.jpg`;
  }
  usedNames.add(candidate.toLowerCase());
  return { number, candidate };
}

if (!fs.existsSync(photosDir) || !fs.existsSync(srcDir)) {
  throw new Error("Expected public/photos and src directories were not found.");
}

const sourceFiles = walk(srcDir).filter((file) => /\.(?:js|jsx|ts|tsx)$/.test(file));
const scored = sourceFiles
  .map((file) => {
    const content = fs.readFileSync(file, "utf8");
    return { file, content, count: (content.match(/\/photos\//g) || []).length };
  })
  .sort((a, b) => b.count - a.count);

if (!scored.length || scored[0].count < 2) {
  throw new Error("Could not find the photo publication data in src.");
}

const target = scored[0];
const needleIndex = target.content.indexOf("/photos/");
const bounds = findObjectBounds(target.content, needleIndex);
const template = target.content.slice(bounds.start, bounds.end);
if (!/\/photos\//.test(template)) throw new Error("The detected template does not contain a photo path.");

const existingFiles = fs.readdirSync(photosDir).filter((name) => /\.(?:jpe?g|png|webp|avif)$/i.test(name));
const knownHashes = new Map();
for (const name of existingFiles) knownHashes.set(sha256(path.join(photosDir, name)), name);

const usedNames = new Set(existingFiles.map((name) => name.toLowerCase()));
let nextNumber = Math.max(0, ...existingFiles.map((name) => Number.parseInt(name, 10)).filter(Number.isFinite)) + 1;
const incoming = [];
for (const batch of batches) {
  for (const [sourceName, slug, title, alt] of batch.entries) {
    const source = path.join(batch.folder, sourceName);
    if (!fs.existsSync(source)) throw new Error(`Missing attachment: ${source}`);
    incoming.push({ source, slug: slugify(slug), title, alt, hash: sha256(source) });
  }
}

const added = [];
const skipped = [];
const copied = [];
try {
  for (const item of incoming) {
    const duplicate = knownHashes.get(item.hash);
    if (duplicate) {
      skipped.push({ source: item.source, duplicateOf: duplicate });
      continue;
    }
    const fileChoice = nextFreeFilename(nextNumber, item.slug, usedNames);
    nextNumber = fileChoice.number + 1;
    const destination = path.join(photosDir, fileChoice.candidate);
    fs.copyFileSync(item.source, destination);
    copied.push(destination);
    knownHashes.set(item.hash, fileChoice.candidate);
    added.push({ ...item, filename: fileChoice.candidate, dimensions: jpegDimensions(item.source) });
  }

  const numericIds = [...target.content.matchAll(/\bid\s*:\s*(\d+)/g)].map((match) => Number(match[1]));
  let nextId = Math.max(0, ...numericIds) + 1;
  const baseDate = new Date("2026-08-02T12:00:00.000Z");
  const objects = added.map((item, index) => {
    const date = new Date(baseDate);
    date.setUTCDate(date.getUTCDate() - index);
    const dateValue = date.toISOString().slice(0, 10);
    const srcValue = `/photos/${item.filename}`;
    let object = template.replace(/(['"`])([^'"`]*\/photos\/[^'"`]*)\1/g, (_all, quote) => `${quote}${escapeForQuote(srcValue, quote)}${quote}`);
    object = replaceStringProperty(object, "title", item.title);
    object = replaceStringProperty(object, "name", item.title);
    object = replaceStringProperty(object, "alt", item.alt);
    object = replaceStringProperty(object, "caption", item.title);
    object = replaceStringProperty(object, "description", item.alt);
    object = replaceStringProperty(object, "slug", item.slug);
    object = replaceStringProperty(object, "date", dateValue);
    object = replaceStringProperty(object, "publishedAt", `${dateValue}T12:00:00.000Z`);
    object = replaceStringProperty(object, "publicationDate", dateValue);
    object = replaceStringProperty(object, "location", "");
    object = replaceArrayProperty(object, "tags");
    object = replaceArrayProperty(object, "categories");
    if (/\bid\s*:\s*\d+/.test(object)) object = replaceNumericProperty(object, "id", nextId++);
    else object = replaceStringProperty(object, "id", `${dateValue}-${item.slug}`);
    if (item.dimensions) {
      object = replaceNumericProperty(object, "width", item.dimensions.width);
      object = replaceNumericProperty(object, "height", item.dimensions.height);
      object = replaceNumericProperty(object, "aspectRatio", Number((item.dimensions.width / item.dimensions.height).toFixed(6)));
      object = replaceStringProperty(object, "orientation", item.dimensions.width >= item.dimensions.height ? "landscape" : "portrait");
    }
    return object;
  });

  const indentMatch = target.content.slice(0, bounds.start).match(/(^|\n)([ \t]*)$/);
  const indent = indentMatch ? indentMatch[2] : "  ";
  const insertion = objects.map((object) => `${object},`).join(`\n${indent}`);
  const updated = `${target.content.slice(0, bounds.start)}${insertion}\n${indent}${target.content.slice(bounds.start)}`;

  fs.mkdirSync(backupDir, { recursive: true });
  const backup = path.join(backupDir, `${path.basename(target.file)}.before-photo-import-${Date.now()}`);
  fs.copyFileSync(target.file, backup);
  fs.writeFileSync(target.file, updated, "utf8");

  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportDir, "photo-import-report.json"),
    JSON.stringify(
      {
        importedAt: new Date().toISOString(),
        target: path.relative(root, target.file),
        backup: path.relative(root, backup),
        requested: incoming.length,
        added: added.map(({ filename, source, title }) => ({ filename, source, title })),
        skipped,
      },
      null,
      2,
    ),
  );
} catch (error) {
  for (const file of copied) {
    if (fs.existsSync(file)) fs.rmSync(file);
  }
  throw error;
}

process.stdout.write(`Imported ${added.length}; skipped ${skipped.length}; updated ${path.relative(root, target.file)}\n`);
