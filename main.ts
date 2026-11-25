import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// HR enforces the very bureaucracy the CEO asked employees to identify.
const joke = 'The CEO asked for examples of pointless bureaucracy. HR rejected mine for using the wrong form.';
const characters = [...joke].length;

if (characters < 1 || characters > 200 || joke.trim().length === 0 || /[\r\n\u0085\u2028\u2029]/u.test(joke)) {
  throw new Error('Entry must be one nonblank line of 1–200 Unicode code points.');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
