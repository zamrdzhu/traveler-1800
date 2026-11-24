// One Sentence for a Traveler from 1800
// make.fun bounty u-po-pu-one-sentence-for-a-traveler-from-1800-7e6162fb
//
// The program writes a single sentence (at most 200 characters) to
// /output/entry.txt. The sentence explains the modern internet to a time
// traveler from 1800, using only things a person of that year already
// knows — a library, a book, a letter — and no word coined after their time.
//
// The sentence:
//
//   "Imagine a library that fits in your hand, where any book you ask for
//   opens before you and any letter you write reaches its reader in a blink."
//
// Why this sentence:
// - One image carries it: a library that fits in your hand. A traveler from
//   1800 knows libraries, books, and letters; the wonder is that the whole
//   library is suddenly at hand, and that a letter now crosses the world
//   faster than an eye can blink.
// - It says what the internet does, not what it is made of: any book on
//   demand (all knowledge at hand) and any letter delivered at once
//   (instant writing to anyone, anywhere).
// - Every word is a word of 1800 or earlier: no "internet", no "screen",
//   no "digital", no "online", no "computer", no "electric" — only library,
//   book, letter, hand, blink.
// - It is true as a capability, not an exaggeration: "any book you ask
//   for" and "any letter you write" promise what the thing can do, and
//   "reaches its reader in a blink" is what instant delivery actually is.
//   Nothing in it would mislead a reader who took it literally.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Imagine a library that fits in your hand, where any book you ask for opens before you and any letter you write reaches its reader in a blink.";

// The gate allows 1 to 200 characters of UTF-8 text. Guard the limit here
// so a future edit to the sentence can never silently break the entry.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${SENTENCE.length}`,
  );
}
if (SENTENCE.trim() !== SENTENCE || SENTENCE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");

// Read the file back and confirm it holds exactly the sentence: a bad
// write must fail loudly here, never reach the gate as a wrong entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== SENTENCE) {
  throw new Error("entry.txt does not match the sentence");
}
console.log(SENTENCE);
