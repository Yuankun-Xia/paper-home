const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "js", "data.js");
const outputDir = path.join(root, "content", "papers");

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function loadCurrentData() {
  const source = fs.readFileSync(dataPath, "utf8");
  const sandbox = {};
  vm.runInNewContext(`${source}\nthis.papers = papers;`, sandbox, { filename: dataPath });
  return sandbox.papers;
}

function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const papers = loadCurrentData();
  for (const paper of papers) {
    const filename = `${String(paper.order).padStart(3, "0")}-${slugify(paper.id)}.json`;
    fs.writeFileSync(path.join(outputDir, filename), `${JSON.stringify(paper, null, 2)}\n`, "utf8");
  }

  console.log(`Migrated ${papers.length} papers to ${path.relative(root, outputDir)}`);
}

main();
