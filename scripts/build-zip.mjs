// Builds dist/findgap.zip for upload to Claude desktop / claude.ai.
// The ZIP's single top-level entry is the findgap/ folder:
//   findgap.zip -> findgap/SKILL.md, findgap/references/..., findgap/assets/...
// No dependencies: uses node:zlib (deflate) and writes the ZIP format directly.
// Run: node scripts/build-zip.mjs
import { readdirSync, readFileSync, statSync, mkdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const root = fileURLToPath(new URL("..", import.meta.url));
const skillDir = join(root, "skills", "findgap");
const outDir = join(root, "dist");
const outFile = join(outDir, "findgap.zip");
const TOP = "findgap";
const IGNORE = new Set([".DS_Store", "Thumbs.db", "desktop.ini"]);

// Fixed timestamp (2026-01-01 00:00) so the same sources always give the same ZIP.
const DOS_TIME = 0;
const DOS_DATE = ((2026 - 1980) << 9) | (1 << 5) | 1;

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
function crc32(buf) {
  if (typeof zlib.crc32 === "function") return zlib.crc32(buf) >>> 0;
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir).sort()) {
    if (IGNORE.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push({ dir: true, full }, ...walk(full));
    else out.push({ dir: false, full });
  }
  return out;
}

const entries = [{ dir: true, name: TOP + "/" }].concat(
  walk(skillDir).map(e => {
    const rel = relative(skillDir, e.full).split(sep).join("/");
    return { dir: e.dir, full: e.full, name: `${TOP}/${rel}${e.dir ? "/" : ""}` };
  })
);

const locals = [];
const centrals = [];
let offset = 0;
for (const e of entries) {
  const nameBuf = Buffer.from(e.name, "utf8");
  const data = e.dir ? Buffer.alloc(0) : readFileSync(e.full);
  const deflated = e.dir ? data : zlib.deflateRawSync(data, { level: 9 });
  const useDeflate = !e.dir && deflated.length < data.length;
  const body = useDeflate ? deflated : data;
  const method = useDeflate ? 8 : 0;
  const crc = e.dir ? 0 : crc32(data);
  const flags = 0x0800; // UTF-8 file names

  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0);
  local.writeUInt16LE(20, 4);
  local.writeUInt16LE(flags, 6);
  local.writeUInt16LE(method, 8);
  local.writeUInt16LE(DOS_TIME, 10);
  local.writeUInt16LE(DOS_DATE, 12);
  local.writeUInt32LE(crc, 14);
  local.writeUInt32LE(body.length, 18);
  local.writeUInt32LE(data.length, 22);
  local.writeUInt16LE(nameBuf.length, 26);
  local.writeUInt16LE(0, 28);
  locals.push(local, nameBuf, body);

  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0);
  central.writeUInt16LE(0x031e, 4); // made by: Unix, spec 3.0
  central.writeUInt16LE(20, 6);
  central.writeUInt16LE(flags, 8);
  central.writeUInt16LE(method, 10);
  central.writeUInt16LE(DOS_TIME, 12);
  central.writeUInt16LE(DOS_DATE, 14);
  central.writeUInt32LE(crc, 16);
  central.writeUInt32LE(body.length, 20);
  central.writeUInt32LE(data.length, 24);
  central.writeUInt16LE(nameBuf.length, 28);
  central.writeUInt16LE(0, 30);
  central.writeUInt16LE(0, 32);
  central.writeUInt16LE(0, 34);
  central.writeUInt16LE(0, 36);
  const mode = e.dir ? 0o40755 : 0o100644;
  central.writeUInt32LE(((mode << 16) | (e.dir ? 0x10 : 0)) >>> 0, 38);
  central.writeUInt32LE(offset, 42);
  centrals.push(central, nameBuf);

  offset += local.length + nameBuf.length + body.length;
}

const centralBuf = Buffer.concat(centrals);
const end = Buffer.alloc(22);
end.writeUInt32LE(0x06054b50, 0);
end.writeUInt16LE(0, 4);
end.writeUInt16LE(0, 6);
end.writeUInt16LE(entries.length, 8);
end.writeUInt16LE(entries.length, 10);
end.writeUInt32LE(centralBuf.length, 12);
end.writeUInt32LE(offset, 16);
end.writeUInt16LE(0, 20);

mkdirSync(outDir, { recursive: true });
const zip = Buffer.concat([...locals, centralBuf, end]);
writeFileSync(outFile, zip);
const files = entries.filter(e => !e.dir).length;
console.log(`Wrote ${relative(root, outFile).split(sep).join("/")} (${files} files, ${zip.length} bytes)`);
