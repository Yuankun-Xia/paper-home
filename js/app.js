const state = {
  topic: "all",
  venue: "all",
  year: "all",
  route: "all",
  sort: "article-asc",
  query: "",
  favoriteOnly: false
};

const favoriteKey = "paper-home-favorites-v1";
const visitKey = "paper-home-pv-v2";
let favorites = new Set(JSON.parse(localStorage.getItem(favoriteKey) || "[]"));
let pageViews = Number(localStorage.getItem(visitKey) || 0);

const els = {
  topicTabs: document.getElementById("topicTabs"),
  searchInput: document.getElementById("searchInput"),
  venueSelect: document.getElementById("venueSelect"),
  yearSelect: document.getElementById("yearSelect"),
  sortSelect: document.getElementById("sortSelect"),
  favoriteOnly: document.getElementById("favoriteOnly"),
  routeStrip: document.getElementById("routeStrip"),
  topicList: document.getElementById("topicList"),
  timeline: document.getElementById("timeline"),
  paperGrid: document.getElementById("paperGrid"),
  emptyState: document.getElementById("emptyState"),
  resultSummary: document.getElementById("resultSummary"),
  resetBtn: document.getElementById("resetBtn"),
  statTotal: document.getElementById("statTotal"),
  statPaper: document.getElementById("statPaper"),
  statTopics: document.getElementById("statTopics"),
  statLatest: document.getElementById("statLatest"),
  modal: document.getElementById("detailModal"),
  modalTitle: document.getElementById("modalTitle"),
  modalBody: document.getElementById("modalBody"),
  closeModal: document.getElementById("closeModal"),
  toast: document.getElementById("toast")
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function formatDate(value) {
  const parts = value.split("-");
  return `${parts[1]}.${parts[2]}`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    els.toast.hidden = true;
  }, 1700);
}

function writeClipboard(text, message) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast(message)).catch(() => fallbackCopy(text, message));
  } else {
    fallbackCopy(text, message);
  }
}

function fallbackCopy(text, message) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  showToast(message);
}

function fillSelect(select, allLabel, values) {
  select.innerHTML = `<option value="all">${escapeHtml(allLabel)}</option>` + values
    .map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`)
    .join("");
}

function totalVisits() {
  return pageViews;
}

function recordPageView() {
  pageViews += 1;
  localStorage.setItem(visitKey, String(pageViews));
}

function initControls() {
  els.topicTabs.innerHTML = topicDefinitions.map((topic) => (
    `<button class="tab${topic.id === "all" ? " is-active" : ""}" type="button" data-topic="${topic.id}">${escapeHtml(topic.label)}</button>`
  )).join("");

  fillSelect(els.venueSelect, "全部来源", unique(papers.map((paper) => paper.venueGroup)));
  fillSelect(els.yearSelect, "全部年份", unique(papers.map((paper) => paper.paperYear)).sort((a, b) => b.localeCompare(a)));
}

function renderStats() {
  const topicCount = unique(papers.flatMap((paper) => paper.topics)).length;
  const latest = papers.reduce((max, paper) => paper.articleDate > max ? paper.articleDate : max, "");

  els.statTotal.textContent = papers.length;
  els.statPaper.textContent = papers.filter((paper) => paper.type === "论文精读").length;
  els.statTopics.textContent = topicCount;
  els.statLatest.textContent = latest ? formatDate(latest) : "-";
}

function renderRoutes() {
  els.routeStrip.innerHTML = routes.map((route) => (
    `<button class="route-card${state.route === route.id ? " is-active" : ""}" type="button" data-route="${route.id}">
      <b>${escapeHtml(route.title)}</b>
      <span>${escapeHtml(route.description)}</span>
      <small>${route.paperIds.length} 篇</small>
    </button>`
  )).join("");
}

function renderTopicList() {
  els.topicList.innerHTML = topicDefinitions.filter((topic) => topic.id !== "all").map((topic) => {
    const count = papers.filter((paper) => paper.topics.includes(topic.id)).length;
    return `<button class="topic-item" type="button" data-topic="${topic.id}">
      <b>${escapeHtml(topic.label)}</b><span>${count} 篇</span>
    </button>`;
  }).join("");
}

function renderTimeline() {
  els.timeline.innerHTML = papers
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((paper) => `<button class="timeline-item" type="button" data-detail="${paper.id}">
      <span>${escapeHtml(paper.articleNo)} · ${escapeHtml(formatDate(paper.articleDate))}</span>
      <b>${escapeHtml(paper.title)}</b>
    </button>`)
    .join("");
}

function labelClass(label) {
  if (/Lyapunov|能耗|在线/.test(label)) return " alt";
  if (/LoRA|SFL|DDQN|ZO|Rank|带宽|SVD|量化|剪枝/.test(label)) return " blue";
  if (/Streaming|个性化|泛化|多任务|MARL|PSO|知识图谱|Client/.test(label)) return " red";
  return "";
}

function textForSearch(paper) {
  return normalize([
    paper.title,
    paper.type,
    paper.venue,
    paper.paperYear,
    paper.paperName,
    paper.authors,
    paper.summary,
    paper.problem,
    paper.method,
    paper.takeaway,
    paper.keywords.join(" "),
    paper.topicLabels.join(" ")
  ].join(" "));
}

function activeRouteIds() {
  if (state.route === "all") return null;
  const route = routes.find((item) => item.id === state.route);
  return route ? new Set(route.paperIds) : null;
}

function getFilteredPapers() {
  const routeIds = activeRouteIds();
  const query = normalize(state.query);

  return papers.filter((paper) => {
    const matchTopic = state.topic === "all" || paper.topics.includes(state.topic);
    const matchVenue = state.venue === "all" || paper.venueGroup === state.venue;
    const matchYear = state.year === "all" || paper.paperYear === state.year;
    const matchRoute = !routeIds || routeIds.has(paper.id);
    const matchFavorite = !state.favoriteOnly || favorites.has(paper.id);
    const matchQuery = query === "" || textForSearch(paper).includes(query);

    return matchTopic && matchVenue && matchYear && matchRoute && matchFavorite && matchQuery;
  }).sort((a, b) => {
    if (state.sort === "article-desc") return b.order - a.order;
    if (state.sort === "paper-year-desc") return Number(b.paperYear || 0) - Number(a.paperYear || 0) || b.order - a.order;
    if (state.sort === "title-asc") return a.title.localeCompare(b.title, "zh-Hans-CN");
    return a.order - b.order;
  });
}

function renderCard(paper) {
  const cover = paper.cover
    ? `<img class="cover" src="${escapeHtml(paper.cover)}" alt="${escapeHtml(paper.title)} 封面">`
    : `<div class="text-cover"><b>Edge AI</b><span>${escapeHtml(paper.topicLabels.join(" · "))}</span></div>`;

  const labels = paper.topicLabels.map((label) => (
    `<span class="label${labelClass(label)}">${escapeHtml(label)}</span>`
  )).join("");

  const links = paper.links.map((link, index) => (
    `<a class="link${index === 0 ? " primary" : ""}" href="${escapeHtml(link.url)}" target="_blank" rel="noopener" data-visit-id="${escapeHtml(paper.id)}">${escapeHtml(link.label)}</a>`
  )).join("");

  const favoriteText = favorites.has(paper.id) ? "已收藏" : "收藏";
  const favoriteClass = favorites.has(paper.id) ? " is-fav" : "";

  return `<article class="card" id="paper-${escapeHtml(paper.id)}">
    <div class="cover-wrap">
      ${cover}
      <span class="badge">${escapeHtml(paper.articleNo)}</span>
    </div>
    <div class="card-body">
      <div class="meta-row">
        <span>${escapeHtml(formatDate(paper.articleDate))} 发布</span>
        <span>${escapeHtml(paper.type)}</span>
      </div>
      <div class="labels">${labels}</div>
      <h3>${escapeHtml(paper.title)}</h3>
      <p class="paper-name"><strong>${paper.type === "论文精读" ? "论文" : "主题"}：</strong>${escapeHtml(paper.paperName)}</p>
      <p class="desc">${escapeHtml(paper.summary)}</p>
      <div class="facts">
        <span class="fact">${escapeHtml(paper.venue)}</span>
        ${paper.paperYear ? `<span class="fact">${escapeHtml(paper.paperYear)}</span>` : ""}
        ${paper.authors ? `<span class="fact">${escapeHtml(paper.authors.split(",")[0])} 等</span>` : ""}
      </div>
      <div class="actions">
        ${links}
        <button class="link" type="button" data-action="detail" data-id="${escapeHtml(paper.id)}">详情</button>
        <button class="link" type="button" data-action="copy" data-id="${escapeHtml(paper.id)}">复制引用</button>
        <button class="link${favoriteClass}" type="button" data-action="favorite" data-id="${escapeHtml(paper.id)}">${favoriteText}</button>
      </div>
    </div>
  </article>`;
}

function renderPapers() {
  const filtered = getFilteredPapers();
  els.paperGrid.innerHTML = filtered.map(renderCard).join("");
  els.emptyState.classList.toggle("is-visible", filtered.length === 0);

  const topicLabel = topicDefinitions.find((topic) => topic.id === state.topic)?.label || "全部";
  const routeLabel = routes.find((route) => route.id === state.route)?.title || "全部路线";
  els.resultSummary.textContent = `匹配 ${filtered.length}/${papers.length} 篇 · ${topicLabel} · ${routeLabel} · ${totalVisits()} 次访问`;
  renderRoutes();
}

function setTopic(topicId) {
  state.topic = topicId;
  Array.from(els.topicTabs.querySelectorAll(".tab")).forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.topic === topicId);
  });
  renderPapers();
}

function setRoute(routeId) {
  state.route = routeId;
  renderPapers();
}

function resetFilters() {
  state.topic = "all";
  state.venue = "all";
  state.year = "all";
  state.route = "all";
  state.sort = "article-asc";
  state.query = "";
  state.favoriteOnly = false;

  els.searchInput.value = "";
  els.venueSelect.value = "all";
  els.yearSelect.value = "all";
  els.sortSelect.value = "article-asc";
  els.favoriteOnly.checked = false;
  setTopic("all");
}

function showDetail(id) {
  const paper = papers.find((item) => item.id === id);
  if (!paper) return;

  recordPageView();
  renderPapers();

  const links = paper.links.length
    ? `<div class="actions">${paper.links.map((link, index) => `<a class="link${index === 0 ? " primary" : ""}" href="${escapeHtml(link.url)}" target="_blank" rel="noopener" data-visit-id="${escapeHtml(paper.id)}">${escapeHtml(link.label)}</a>`).join("")}</div>`
    : "";

  els.modalTitle.textContent = paper.title;
  els.modalBody.innerHTML = `
    <div class="labels">${paper.topicLabels.map((label) => `<span class="label${labelClass(label)}">${escapeHtml(label)}</span>`).join("")}</div>
    <div class="detail-block"><b>论文/主题</b><p>${escapeHtml(paper.paperName)}</p></div>
    ${paper.authors ? `<div class="detail-block"><b>作者</b><p>${escapeHtml(paper.authors)}</p></div>` : ""}
    <div class="detail-block"><b>网页访问</b><p>${escapeHtml(totalVisits())} 次</p></div>
    <div class="detail-block"><b>核心问题</b><p>${escapeHtml(paper.problem)}</p></div>
    <div class="detail-block"><b>方法线索</b><p>${escapeHtml(paper.method)}</p></div>
    <div class="detail-block"><b>阅读收获</b><p>${escapeHtml(paper.takeaway)}</p></div>
    <div class="detail-block"><b>关键词</b><p>${escapeHtml(paper.keywords.join("，"))}</p></div>
    <div class="detail-block"><b>引用</b><p>${escapeHtml(paper.citation)}</p></div>
    ${links}
  `;
  els.modal.hidden = false;
}

function closeDetail() {
  els.modal.hidden = true;
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast("已取消收藏");
  } else {
    favorites.add(id);
    showToast("已收藏");
  }

  localStorage.setItem(favoriteKey, JSON.stringify(Array.from(favorites)));
  renderPapers();
}

function bindEvents() {
  els.topicTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic]");
    if (button) setTopic(button.dataset.topic);
  });

  els.topicList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-topic]");
    if (button) setTopic(button.dataset.topic);
  });

  els.routeStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-route]");
    if (button) setRoute(state.route === button.dataset.route ? "all" : button.dataset.route);
  });

  els.timeline.addEventListener("click", (event) => {
    const button = event.target.closest("[data-detail]");
    if (button) showDetail(button.dataset.detail);
  });

  els.paperGrid.addEventListener("click", (event) => {
    const visitLink = event.target.closest("[data-visit-id]");
    if (visitLink) {
      recordPageView();
      renderPapers();
    }

    const button = event.target.closest("[data-action]");
    if (!button) return;

    const paper = papers.find((item) => item.id === button.dataset.id);
    if (!paper) return;

    if (button.dataset.action === "detail") showDetail(paper.id);
    if (button.dataset.action === "copy") writeClipboard(paper.citation, "已复制引用");
    if (button.dataset.action === "favorite") toggleFavorite(paper.id);
  });

  els.searchInput.addEventListener("input", () => {
    state.query = els.searchInput.value;
    renderPapers();
  });

  els.venueSelect.addEventListener("change", () => {
    state.venue = els.venueSelect.value;
    renderPapers();
  });

  els.yearSelect.addEventListener("change", () => {
    state.year = els.yearSelect.value;
    renderPapers();
  });

  els.sortSelect.addEventListener("change", () => {
    state.sort = els.sortSelect.value;
    renderPapers();
  });

  els.favoriteOnly.addEventListener("change", () => {
    state.favoriteOnly = els.favoriteOnly.checked;
    renderPapers();
  });

  els.resetBtn.addEventListener("click", resetFilters);
  els.closeModal.addEventListener("click", closeDetail);
  els.modalBody.addEventListener("click", (event) => {
    const visitLink = event.target.closest("[data-visit-id]");
    if (!visitLink) return;
    recordPageView();
    renderPapers();
  });
  els.modal.addEventListener("click", (event) => {
    if (event.target === els.modal) closeDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDetail();
  });
}

initControls();
recordPageView();
renderStats();
renderRoutes();
renderTopicList();
renderTimeline();
renderPapers();
bindEvents();
