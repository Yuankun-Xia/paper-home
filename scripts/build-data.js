const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const papersDir = path.join(root, "content", "papers");
const outputPath = path.join(root, "js", "data.js");

const topicDefinitions = [
  { id: "all", label: "全部" },
  { id: "intro", label: "入门" },
  { id: "lora", label: "LoRA" },
  { id: "lyapunov", label: "Lyapunov" },
  { id: "sfl", label: "SFL" },
  { id: "resource", label: "资源优化" },
  { id: "fine-tuning", label: "联邦微调" },
  { id: "generalization", label: "泛化正则" },
  { id: "rank", label: "异构 Rank" },
  { id: "multi-task", label: "多任务 FL" },
  { id: "reinforcement", label: "强化学习" },
  { id: "quantization", label: "模型量化" },
  { id: "data-heterogeneity", label: "数据异构" }
];

const routes = [
  {
    id: "starter",
    title: "入门路线",
    description: "先建立边缘大模型、LoRA 和 Lyapunov 的基本直觉。",
    topicIds: ["intro"],
    limit: 4
  },
  {
    id: "lyapunov",
    title: "Lyapunov 调度线",
    description: "沿着长期时延、能耗和在线资源调度往下读。",
    topicIds: ["lyapunov"]
  },
  {
    id: "lora",
    title: "LoRA 微调线",
    description: "从参数高效微调走到 experts、Dropout、量化底座和异构 rank。",
    topicIds: ["lora"]
  },
  {
    id: "sfl",
    title: "Split Learning 线",
    description: "看模型切分、半异步协同和通信计算联合优化。",
    topicIds: ["sfl"]
  },
  {
    id: "resource",
    title: "系统资源线",
    description: "串起时延、能耗、rank、带宽、多任务资源配置与客户端选择。",
    topicIds: ["resource", "multi-task", "data-heterogeneity"]
  }
];

const requiredFields = [
  "id",
  "articleNo",
  "articleDate",
  "title",
  "type",
  "venue",
  "venueGroup",
  "paperName",
  "topics",
  "topicLabels",
  "keywords",
  "summary",
  "problem",
  "method",
  "takeaway",
  "citation",
  "links"
];

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`${path.relative(root, filePath)} is not valid JSON: ${error.message}`);
  }
}

function validatePaper(paper, filePath) {
  const label = path.relative(root, filePath);
  for (const field of requiredFields) {
    if (!(field in paper)) throw new Error(`${label} is missing required field "${field}"`);
  }

  for (const field of ["topics", "topicLabels", "keywords", "links"]) {
    if (!Array.isArray(paper[field])) throw new Error(`${label} field "${field}" must be an array`);
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(paper.articleDate)) {
    throw new Error(`${label} articleDate must use YYYY-MM-DD`);
  }
}

function loadPapers() {
  if (!fs.existsSync(papersDir)) return [];

  return fs.readdirSync(papersDir)
    .filter((name) => name.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b, "zh-Hans-CN"))
    .map((name) => {
      const filePath = path.join(papersDir, name);
      const paper = readJson(filePath);
      validatePaper(paper, filePath);
      return paper;
    })
    .sort((a, b) => Number(a.order || 0) - Number(b.order || 0) || a.articleDate.localeCompare(b.articleDate));
}

function withComputedOrder(papers) {
  return papers.map((paper, index) => ({
    ...paper,
    order: Number(paper.order || index + 1)
  }));
}

function buildRoutes(papers) {
  return routes.map((route) => {
    const matches = papers.filter((paper) => route.topicIds.some((topic) => paper.topics.includes(topic)));
    const selected = typeof route.limit === "number" ? matches.slice(0, route.limit) : matches;

    return {
      id: route.id,
      title: route.title,
      description: route.description,
      paperIds: selected.map((paper) => paper.id)
    };
  });
}

function writeDataFile(papers) {
  const source = [
    `const papers = ${JSON.stringify(papers, null, 2)};`,
    "",
    `const topicDefinitions = ${JSON.stringify(topicDefinitions, null, 2)};`,
    "",
    `const routes = ${JSON.stringify(buildRoutes(papers), null, 2)};`,
    ""
  ].join("\n");

  fs.writeFileSync(outputPath, source, "utf8");
}

function main() {
  const papers = withComputedOrder(loadPapers());
  writeDataFile(papers);
  console.log(`Built ${path.relative(root, outputPath)} from ${papers.length} paper metadata files.`);
}

main();
