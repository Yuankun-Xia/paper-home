const favoriteKey = "paper-home-favorites-v1";
const visitKey = "paper-home-pv-v2";

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Storage can be unavailable in restricted browser contexts.
  }
}

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean)));
}

function formatDate(value) {
  const parts = String(value || "").split("-");
  if (parts.length < 3) return value || "-";
  return `${parts[1]}.${parts[2]}`;
}

function labelClass(label) {
  if (/Lyapunov|能耗|在线/.test(label)) return "alt";
  if (/LoRA|SFL|DDQN|ZO|Rank|带宽|SVD|量化|剪枝/.test(label)) return "blue";
  if (/Streaming|个性化|泛化|多任务|MARL|PSO|知识图谱|Client/.test(label)) return "red";
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

const { createApp } = Vue;
const runtimeMessage = document.getElementById("runtimeMessage");
const featuredTopicIds = ["intro", "lora", "lyapunov", "sfl", "resource", "fine-tuning", "rank", "data-heterogeneity"];

createApp({
  data() {
    return {
      papers,
      topicDefinitions,
      routes,
      state: {
        topic: "all",
        venue: "all",
        year: "all",
        route: "all",
        sort: "article-asc",
        query: "",
        favoriteOnly: false
      },
      favorites: new Set(JSON.parse(readStorage(favoriteKey, "[]"))),
      totalVisits: Number(readStorage(visitKey, "0")),
      activePaperId: "",
      toast: ""
    };
  },

  computed: {
    venueOptions() {
      return unique(this.papers.map((paper) => paper.venueGroup));
    },

    yearOptions() {
      return unique(this.papers.map((paper) => paper.paperYear)).sort((a, b) => b.localeCompare(a));
    },

    stats() {
      const topicCount = unique(this.papers.flatMap((paper) => paper.topics)).length;
      const latest = this.papers.reduce((max, paper) => paper.articleDate > max ? paper.articleDate : max, "");

      return {
        total: this.papers.length,
        paper: this.papers.filter((paper) => paper.type === "论文精读").length,
        topics: topicCount,
        latest: latest ? formatDate(latest) : "-"
      };
    },

    sideTopics() {
      return this.topicDefinitions.filter((topic) => featuredTopicIds.includes(topic.id)).map((topic) => ({
        ...topic,
        count: this.papers.filter((paper) => paper.topics.includes(topic.id)).length
      }));
    },

    timelinePapers() {
      return this.papers.slice().sort((a, b) => a.order - b.order);
    },

    activeRouteIds() {
      if (this.state.route === "all") return null;
      const route = this.routes.find((item) => item.id === this.state.route);
      return route ? new Set(route.paperIds) : null;
    },

    filteredPapers() {
      const query = normalize(this.state.query);
      const routeIds = this.activeRouteIds;

      return this.papers.filter((paper) => {
        const matchTopic = this.state.topic === "all" || paper.topics.includes(this.state.topic);
        const matchVenue = this.state.venue === "all" || paper.venueGroup === this.state.venue;
        const matchYear = this.state.year === "all" || paper.paperYear === this.state.year;
        const matchRoute = !routeIds || routeIds.has(paper.id);
        const matchFavorite = !this.state.favoriteOnly || this.favorites.has(paper.id);
        const matchQuery = query === "" || textForSearch(paper).includes(query);

        return matchTopic && matchVenue && matchYear && matchRoute && matchFavorite && matchQuery;
      }).sort((a, b) => {
        if (this.state.sort === "article-desc") return b.order - a.order;
        if (this.state.sort === "paper-year-desc") return Number(b.paperYear || 0) - Number(a.paperYear || 0) || b.order - a.order;
        if (this.state.sort === "title-asc") return a.title.localeCompare(b.title, "zh-Hans-CN");
        return a.order - b.order;
      });
    },

    resultSummary() {
      const topicLabel = this.topicDefinitions.find((topic) => topic.id === this.state.topic)?.label || "全部";
      const routeLabel = this.routes.find((route) => route.id === this.state.route)?.title || "全部路线";
      return `匹配 ${this.filteredPapers.length}/${this.papers.length} 篇 · ${topicLabel} · ${routeLabel} · ${this.totalVisits} 次访问`;
    },

    activePaper() {
      return this.papers.find((paper) => paper.id === this.activePaperId) || null;
    }
  },

  mounted() {
    this.recordPageView();
    document.addEventListener("keydown", this.onKeydown);
    if (runtimeMessage) runtimeMessage.hidden = true;
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  },

  methods: {
    formatDate,
    labelClass,

    firstAuthor(authors) {
      return String(authors || "").split(",")[0];
    },

    isFavorite(id) {
      return this.favorites.has(id);
    },

    setTopic(topicId) {
      this.state.topic = topicId;
    },

    setRoute(routeId) {
      this.state.route = routeId;
    },

    resetFilters() {
      this.state.topic = "all";
      this.state.venue = "all";
      this.state.year = "all";
      this.state.route = "all";
      this.state.sort = "article-asc";
      this.state.query = "";
      this.state.favoriteOnly = false;
    },

    showDetail(id) {
      this.activePaperId = id;
      this.recordPageView();
    },

    closeDetail() {
      this.activePaperId = "";
    },

    recordPageView() {
      this.totalVisits += 1;
      writeStorage(visitKey, String(this.totalVisits));
    },

    showToast(message) {
      this.toast = message;
      clearTimeout(this.showToastTimer);
      this.showToastTimer = setTimeout(() => {
        this.toast = "";
      }, 1700);
    },

    writeClipboard(text, message) {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => this.showToast(message)).catch(() => this.fallbackCopy(text, message));
        return;
      }

      this.fallbackCopy(text, message);
    },

    fallbackCopy(text, message) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      this.showToast(message);
    },

    toggleFavorite(id) {
      const next = new Set(this.favorites);

      if (next.has(id)) {
        next.delete(id);
        this.showToast("已取消收藏");
      } else {
        next.add(id);
        this.showToast("已收藏");
      }

      this.favorites = next;
      writeStorage(favoriteKey, JSON.stringify(Array.from(next)));
    },

    handleCoverError(paper) {
      paper.cover = "";
    },

    onKeydown(event) {
      if (event.key === "Escape") this.closeDetail();
    }
  }
}).mount("#app");
