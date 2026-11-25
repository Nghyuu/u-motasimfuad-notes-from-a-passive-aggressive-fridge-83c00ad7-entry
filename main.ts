import * as fs from "node:fs";
import * as path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const note =
  "I logged 14 door openings today and zero meals. The yogurt has started a support group.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
if (note.length < 1 || note.length > 200 || note.trim().length === 0) {
  throw new Error("note fails the 1-200 character gate");
}

const entryPath = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(entryPath, note + "\n", "utf8");
fs.chmodSync(entryPath, 0o644);
