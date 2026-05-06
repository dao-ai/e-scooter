const models = [
  {
    id: "m1",
    name: "Urban X1 Pro",
    brand: "星驰",
    use: "commute",
    price: 8999,
    range: 92,
    topSpeed: 52,
    battery: "72V 32Ah",
    charge: "快充",
    source: "厂商公告 / 社区口碑",
    score: 86,
    heat: 78,
    tags: ["轻量车架", "CBS", "智能中控"]
  },
  {
    id: "m2",
    name: "Rider S9",
    brand: "凌越",
    use: "performance",
    price: 16800,
    range: 145,
    topSpeed: 88,
    battery: "双锂电",
    charge: "快充",
    source: "试驾内容 / 配置表",
    score: 91,
    heat: 92,
    tags: ["中置电机", "ABS", "运动模式"]
  },
  {
    id: "m3",
    name: "Cargo E7",
    brand: "路勤",
    use: "delivery",
    price: 10900,
    range: 128,
    topSpeed: 45,
    battery: "换电电池",
    charge: "换电",
    source: "车队反馈 / 补能站点",
    score: 83,
    heat: 69,
    tags: ["高载重", "低维护", "防水线束"]
  },
  {
    id: "m4",
    name: "Neo Mini",
    brand: "小境",
    use: "commute",
    price: 6299,
    range: 68,
    topSpeed: 39,
    battery: "60V 26Ah",
    charge: "慢充",
    source: "电商评论 / 参数表",
    score: 79,
    heat: 73,
    tags: ["短轴距", "低坐高", "App 解锁"]
  },
  {
    id: "m5",
    name: "GT Flux",
    brand: "锐能",
    use: "performance",
    price: 22900,
    range: 172,
    topSpeed: 105,
    battery: "96V 52Ah",
    charge: "快充",
    source: "发布会 / 媒体测试",
    score: 94,
    heat: 88,
    tags: ["双通道 ABS", "TCS", "液冷电机"]
  },
  {
    id: "m6",
    name: "Depot 5",
    brand: "即达",
    use: "delivery",
    price: 7600,
    range: 96,
    topSpeed: 42,
    battery: "72V 28Ah",
    charge: "换电",
    source: "渠道报价 / 车队反馈",
    score: 81,
    heat: 64,
    tags: ["后货架", "耐磨胎", "可拆电池"]
  },
  {
    id: "m7",
    name: "黑骑士 D2S 换电版",
    brand: "赛鸽黑骑士",
    use: "delivery",
    price: 3499,
    range: null,
    topSpeed: null,
    battery: "换电版 / 电池待核",
    charge: "换电",
    source: "ZOL 京东报价",
    sourceUrl: "https://ebike.zol.com.cn/1112/11129045.html",
    score: 78,
    heat: 72,
    tags: ["外卖车", "铁塔小哈换电", "智能仪表"]
  },
  {
    id: "m8",
    name: "黑骑士 D3 换电版",
    brand: "赛鸽黑骑士",
    use: "delivery",
    price: 4199,
    range: null,
    topSpeed: null,
    battery: "72V 20Ah 铅酸",
    charge: "换电",
    source: "ZOL 京东报价",
    sourceUrl: "https://ebike.zol.com.cn/1112/11129483.html",
    score: 82,
    heat: 76,
    tags: ["骑手外卖", "小哈换电", "原价 4599"]
  },
  {
    id: "m9",
    name: "黑骑士 E10",
    brand: "赛鸽黑骑士",
    use: "delivery",
    price: 4386,
    range: null,
    topSpeed: null,
    battery: "48V/60V/72V 通用空车",
    charge: "换电/快充",
    source: "ZOL / 快懂百科",
    sourceUrl: "https://ebike.zol.com.cn/937/9370520.html",
    score: 84,
    heat: 81,
    tags: ["外卖场景", "高碳钢车架", "强光大灯"]
  },
  {
    id: "m10",
    name: "黑骑士 B3L 换电版",
    brand: "赛鸽黑骑士",
    use: "delivery",
    price: 3599,
    range: null,
    topSpeed: null,
    battery: "空车 / 不含电池充电器",
    charge: "换电",
    source: "什么值得买商品库",
    sourceUrl: "https://wiki.smzdm.com/diandongche/b_237521/",
    score: 79,
    heat: 70,
    tags: ["外卖车", "裸车车架", "高端换电"]
  },
  {
    id: "m11",
    name: "黑骑士 E10R 换电版",
    brand: "赛鸽黑骑士",
    use: "delivery",
    price: 2999,
    range: null,
    topSpeed: null,
    battery: "空车 / 不含电池充电器",
    charge: "换电",
    source: "什么值得买商品库",
    sourceUrl: "https://wiki.smzdm.com/diandongche/b_237521/",
    score: 80,
    heat: 74,
    tags: ["外卖车", "星钻黑", "空车配置"]
  },
  {
    id: "m12",
    name: "黑骑士 B3R 换电版",
    brand: "赛鸽黑骑士",
    use: "delivery",
    price: 3599,
    range: null,
    topSpeed: null,
    battery: "空车 / 不含电池充电器",
    charge: "换电",
    source: "什么值得买商品库",
    sourceUrl: "https://wiki.smzdm.com/diandongche/b_237521/",
    score: 79,
    heat: 68,
    tags: ["外卖车", "专业换电", "星钻黑"]
  }
];

const news = [
  {
    type: "launch",
    label: "新车",
    title: "多款城市通勤电摩转向轻量化车架",
    source: "行业快讯",
    time: "09:30",
    summary: "入门车型开始把整备质量、车机互联和基础制动作为主要卖点。"
  },
  {
    type: "policy",
    label: "政策",
    title: "多个城市更新两轮车登记与通行细则",
    source: "政策观察",
    time: "10:45",
    summary: "合规目录、牌照类型和骑行区域仍是用户购车前最关注的信息。"
  },
  {
    type: "tech",
    label: "技术",
    title: "磷酸铁锂方案在配送车队中继续扩大",
    source: "技术周报",
    time: "11:20",
    summary: "循环寿命、安全性和低温表现成为车队采购对比表的核心字段。"
  },
  {
    type: "launch",
    label: "新车",
    title: "高性能电摩把 ABS 与牵引力控制下放到中端",
    source: "试驾频道",
    time: "13:05",
    summary: "安全配置开始成为 15000 元以上价格带的分水岭。"
  },
  {
    type: "tech",
    label: "技术",
    title: "换电柜运营商增加电池健康度透明度",
    source: "补能监测",
    time: "14:10",
    summary: "电池可用容量、循环次数和异常告警逐步进入用户端界面。"
  },
  {
    type: "policy",
    label: "政策",
    title: "社区停车点试点集中充电与消防监测",
    source: "城市治理",
    time: "15:40",
    summary: "集中式充电设施有望改善飞线充电和夜间停放安全问题。"
  }
];

const cities = [
  { city: "上海", index: 86, note: "换电密度高" },
  { city: "深圳", index: 79, note: "快充增长快" },
  { city: "杭州", index: 73, note: "社区点位多" },
  { city: "成都", index: 66, note: "配送需求强" }
];

const state = {
  use: "all",
  price: "all",
  minRange: 60,
  chargingOnly: false,
  query: "",
  newsType: "all",
  compare: []
};

const $ = (selector) => document.querySelector(selector);
const grid = $("#modelGrid");
const resultCount = $("#resultCount");
const compareList = $("#compareList");
const compareCount = $("#compareCount");

function priceBand(price) {
  if (price < 8000) return "low";
  if (price <= 15000) return "mid";
  return "high";
}

function filteredModels() {
  const query = state.query.trim().toLowerCase();
  return models.filter((model) => {
    const matchesUse = state.use === "all" || model.use === state.use;
    const matchesPrice = state.price === "all" || priceBand(model.price) === state.price;
    const matchesRange = model.range == null || model.range >= state.minRange;
    const matchesCharging = !state.chargingOnly || model.charge !== "慢充";
    const matchesQuery = !query || [model.name, model.brand, model.charge, model.source, model.tags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(query);
    return matchesUse && matchesPrice && matchesRange && matchesCharging && matchesQuery;
  });
}

function renderMetrics() {
  const rangeModels = models.filter((model) => model.range != null);
  const avgRange = Math.round(rangeModels.reduce((sum, model) => sum + model.range, 0) / rangeModels.length);
  const fastShare = Math.round(models.filter((model) => model.charge !== "慢充").length / models.length * 100);
  $("#metricModels").textContent = models.length;
  $("#metricAvgRange").textContent = avgRange;
  $("#metricFastCharge").textContent = `${fastShare}%`;
}

function renderModels() {
  const visibleModels = filteredModels();
  resultCount.textContent = `${visibleModels.length} 款`;
  grid.innerHTML = visibleModels.map((model) => {
    const selected = state.compare.includes(model.id);
    const rangeText = model.range == null ? "待核" : `${model.range} km`;
    const topSpeedText = model.topSpeed == null ? "待核" : `${model.topSpeed} km/h`;
    return `
      <article class="model-card">
        <div class="model-top">
          <div>
            <p class="model-brand">${model.brand}</p>
            <h3 class="model-name">${model.name}</h3>
          </div>
          <span class="score">${model.score}</span>
        </div>
        <div class="spec-grid">
          <div class="spec"><b>¥${model.price.toLocaleString("zh-CN")}</b><span>参考价</span></div>
          <div class="spec"><b>${rangeText}</b><span>续航</span></div>
          <div class="spec"><b>${topSpeedText}</b><span>极速</span></div>
        </div>
        <div class="tag-row">
          ${model.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="source-row">
          <span>${model.source}</span>
          ${model.sourceUrl ? `<a href="${model.sourceUrl}" target="_blank" rel="noreferrer">来源</a>` : ""}
        </div>
        <div class="card-actions">
          <span class="source">${model.battery} · ${model.charge}</span>
          <button class="ghost-button ${selected ? "is-selected" : ""}" type="button" data-compare="${model.id}">
            ${selected ? "已加入" : "对比"}
          </button>
        </div>
      </article>
    `;
  }).join("");

  if (!visibleModels.length) {
    grid.innerHTML = `<div class="empty-state">没有匹配车型</div>`;
  }
}

function renderCompare() {
  compareCount.textContent = state.compare.length;
  const selectedModels = state.compare.map((id) => models.find((model) => model.id === id)).filter(Boolean);

  if (!selectedModels.length) {
    compareList.innerHTML = `<div class="empty-state">选择车型后显示参数差异</div>`;
    return;
  }

  compareList.innerHTML = selectedModels.map((model) => {
    const rangeText = model.range == null ? "待核" : model.range;
    const rangeUnit = model.range == null ? "续航" : "km";
    const topSpeedText = model.topSpeed == null ? "待核" : model.topSpeed;
    const topSpeedUnit = model.topSpeed == null ? "极速" : "km/h";
    return `
      <div class="compare-item">
        <header>
          <b>${model.name}</b>
          <button class="ghost-button" type="button" data-remove="${model.id}">移除</button>
        </header>
        <div class="spec-grid">
          <div class="spec"><b>${rangeText}</b><span>${rangeUnit}</span></div>
          <div class="spec"><b>${topSpeedText}</b><span>${topSpeedUnit}</span></div>
          <div class="spec"><b>${model.score}</b><span>评分</span></div>
        </div>
      </div>
    `;
  }).join("");
}

function renderTrends() {
  const trending = [...models].sort((a, b) => b.heat - a.heat).slice(0, 5);
  $("#trendList").innerHTML = trending.map((model) => `
    <div class="trend-item">
      <header><b>${model.name}</b><span>${model.heat}</span></header>
      <div class="bar-track"><div class="bar-fill" style="width:${model.heat}%"></div></div>
    </div>
  `).join("");
}

function renderNews() {
  const visibleNews = news.filter((item) => state.newsType === "all" || item.type === state.newsType);
  $("#newsGrid").innerHTML = visibleNews.map((item) => `
    <article class="news-card">
      <div>
        <div class="news-meta"><span>${item.source}</span><span>${item.time}</span></div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
      <span class="news-type">${item.label}</span>
    </article>
  `).join("");
}

function renderCities() {
  $("#cityList").innerHTML = cities.map((city) => `
    <div class="city-item">
      <header><b>${city.city}</b><span>${city.note}</span></header>
      <div class="bar-track"><div class="bar-fill" style="width:${city.index}%"></div></div>
    </div>
  `).join("");
}

function renderAll() {
  renderMetrics();
  renderModels();
  renderCompare();
  renderTrends();
  renderNews();
  renderCities();
}

document.addEventListener("click", (event) => {
  const segment = event.target.closest("[data-filter]");
  if (segment) {
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("is-active", button === segment));
    state.use = segment.dataset.filter;
    renderModels();
  }

  const compare = event.target.closest("[data-compare]");
  if (compare) {
    const id = compare.dataset.compare;
    if (state.compare.includes(id)) {
      state.compare = state.compare.filter((item) => item !== id);
    } else if (state.compare.length < 3) {
      state.compare.push(id);
    }
    renderModels();
    renderCompare();
  }

  const remove = event.target.closest("[data-remove]");
  if (remove) {
    state.compare = state.compare.filter((id) => id !== remove.dataset.remove);
    renderModels();
    renderCompare();
  }

  const newsTab = event.target.closest("[data-news]");
  if (newsTab) {
    document.querySelectorAll("[data-news]").forEach((button) => button.classList.toggle("is-active", button === newsTab));
    state.newsType = newsTab.dataset.news;
    renderNews();
  }
});

$("#priceFilter").addEventListener("change", (event) => {
  state.price = event.target.value;
  renderModels();
});

$("#rangeFilter").addEventListener("input", (event) => {
  state.minRange = Number(event.target.value);
  $("#rangeValue").textContent = state.minRange;
  renderModels();
});

$("#chargingFilter").addEventListener("change", (event) => {
  state.chargingOnly = event.target.checked;
  renderModels();
});

$("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderModels();
});

$("#clearCompare").addEventListener("click", () => {
  state.compare = [];
  renderModels();
  renderCompare();
});

$("#compareJump").addEventListener("click", () => {
  $("#comparePanel").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#refreshBtn").addEventListener("click", () => {
  const active = document.activeElement;
  renderAll();
  active?.blur();
});

renderAll();
