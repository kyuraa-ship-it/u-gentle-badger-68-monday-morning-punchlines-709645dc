import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Monday morning, my bed filed a restraining order against my alarm clock. The judge ruled in favor of the snooze button — case closed, back to sleep.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8, 1-200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !/\S/.test(entry)) {
  throw new Error(`gate failed: entry is ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
