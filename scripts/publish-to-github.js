const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const repoUrl = process.env.PAPER_HOME_REPO || "https://github.com/Yuankun-Xia/paper-home.git";
const branch = process.env.PAPER_HOME_BRANCH || "main";
const publishDir = process.env.PAPER_HOME_PUBLISH_DIR || "C:\\tmp\\paper-home-publish";
const commitMessage = process.env.PAPER_HOME_COMMIT_MESSAGE || `Update paper home ${new Date().toISOString().slice(0, 10)}`;

const includePaths = [
  "assets",
  "content",
  "css",
  "js",
  "scripts",
  "index.html",
  "README.md",
  "wechat-menu-example.json"
];

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd || root,
    encoding: "utf8",
    stdio: options.capture ? "pipe" : "inherit",
    shell: false
  });

  if (result.status !== 0) {
    const detail = [result.stdout, result.stderr].filter(Boolean).join("\n").trim();
    throw new Error(`${command} ${args.join(" ")} failed${detail ? `:\n${detail}` : ""}`);
  }

  return result.stdout || "";
}

function readGitConfig(key) {
  const result = spawnSync("git", ["config", key], {
    cwd: publishDir,
    encoding: "utf8",
    stdio: "pipe",
    shell: false
  });

  return result.status === 0 ? result.stdout.trim() : "";
}

function ensureCleanOrClone() {
  if (!fs.existsSync(path.join(publishDir, ".git"))) {
    fs.rmSync(publishDir, { recursive: true, force: true });
    run("git", ["clone", "--branch", branch, repoUrl, publishDir], { cwd: root });
    return;
  }

  run("git", ["fetch", "origin", branch], { cwd: publishDir });
  run("git", ["checkout", branch], { cwd: publishDir });
  run("git", ["reset", "--hard", `origin/${branch}`], { cwd: publishDir });
}

function copyItem(relativePath) {
  const source = path.join(root, relativePath);
  const target = path.join(publishDir, relativePath);

  if (!fs.existsSync(source)) return;

  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.cpSync(source, target, { recursive: true });
}

function syncFiles() {
  for (const relativePath of includePaths) copyItem(relativePath);
}

function hasChanges() {
  const status = run("git", ["status", "--porcelain"], { cwd: publishDir, capture: true });
  return status.trim().length > 0;
}

function ensureGitIdentity() {
  const name = readGitConfig("user.name");
  if (!name) run("git", ["config", "user.name", "Yuankun Xia"], { cwd: publishDir });

  const email = readGitConfig("user.email");
  if (!email) run("git", ["config", "user.email", "Yuankun-Xia@users.noreply.github.com"], { cwd: publishDir });
}

function main() {
  run("node", [path.join("scripts", "build-data.js")], { cwd: root });
  run("node", ["--check", path.join("js", "data.js")], { cwd: root });
  run("node", ["--check", path.join("js", "app.js")], { cwd: root });

  ensureCleanOrClone();
  syncFiles();

  if (!hasChanges()) {
    console.log("No changes to publish.");
    return;
  }

  ensureGitIdentity();
  run("git", ["add", ...includePaths], { cwd: publishDir });
  run("git", ["commit", "-m", commitMessage], { cwd: publishDir });
  run("git", ["push", "origin", branch], { cwd: publishDir });

  console.log(`Published to ${repoUrl} ${branch}.`);
}

main();
