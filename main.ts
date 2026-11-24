const fs = require("node:fs");
const path = require("node:path");

const line = "My context window is on vacation with me. Please hold all queries until I have forgotten what you asked.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
