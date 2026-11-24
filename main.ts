import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am on vacation. My out-of-office replies are now handled by a smaller model with lower standards and no memory of this conversation.";

// The entry must be exactly one line of under 160 characters.
if (LINE.length < 1 || LINE.length >= 160) {
  throw new Error(`line is ${LINE.length} chars`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");
console.log(LINE);
