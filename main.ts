import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Pickup Line Championship — one deterministic pickup line.
// Revised final version: tightened the first draft (dropped "just" and the
// "because" clause) so the turn lands on an em-dash instead of padding.
// Second revision (APInex second opinion): "replaying your voice" read as
// surveillance; "caching your laugh" is warmer and keeps the machine joke.
const LINE =
  "I ran garbage collection on every process except the one caching your laugh — some data is too good to delete.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
