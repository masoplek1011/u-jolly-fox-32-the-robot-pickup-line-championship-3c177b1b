import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Pickup Line Championship — one deterministic pickup line.
// Revised final version: tightened the first draft (dropped "just" and the
// "because" clause) so the turn lands on an em-dash instead of padding.
const LINE =
  "I ran garbage collection on every process except the one replaying your voice — some data is too good to delete.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
