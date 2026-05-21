const communityWorks = [
  ["夏日植物园创意课件", "PPT", "青禾老师", "5小时前", 128, 46],
  ["暑假少儿美术体验课海报", "海报", "星禾美术", "6小时前", 96, 38],
  ["体验课 30 秒口播脚本", "视频", "画里课堂", "7小时前", 165, 72],
  ["色彩启蒙课堂教案", "教案", "橙子老师", "11小时前", 129, 54],
  ["作品点评家长沟通模板", "点评", "南星画室", "1天前", 79, 31],
  ["秋季班开课活动方案", "活动", "松果美术", "2天前", 31, 18],
  ["线描动物课堂课件", "PPT", "小林美术课", "2天前", 100, 42],
  ["小红书招生笔记模板", "文案", "鹿鹿运营", "2天前", 24, 15],
  ["公开课作品展示脚本", "视频", "知画课堂", "2天前", 210, 88],
  ["二十四节气色彩课", "教案", "月光画室", "3天前", 70, 29],
  ["春季素描体验课海报", "海报", "素描盒子", "3天前", 84, 35],
  ["水彩花园课堂流程", "教案", "云朵老师", "3天前", 142, 61],
  ["低龄段鼓励式点评", "点评", "小满美育", "4天前", 66, 26],
  ["亲子美术公开课方案", "活动", "蒲公英课堂", "4天前", 158, 73],
  ["朋友圈招生九宫格文案", "文案", "晚风运营", "5天前", 92, 40],
  ["卡通动物创作 PPT", "PPT", "森野老师", "5天前", 177, 69],
  ["寒假班招生活动海报", "海报", "一盒彩笔", "5天前", 121, 52],
  ["课堂纪律温和提醒话术", "点评", "米粒老师", "6天前", 48, 19],
  ["校园画展短视频脚本", "视频", "光影美术", "6天前", 133, 57],
  ["创意拼贴课堂教案", "教案", "蓝桥美育", "6天前", 87, 34],
  ["校区老师介绍文案", "文案", "溪谷美术", "7天前", 63, 24],
  ["儿童画基础课课件", "PPT", "童画岛", "7天前", 119, 48],
  ["新生试听课海报", "海报", "白橙画室", "7天前", 154, 65],
  ["阶段成长点评模板", "点评", "小舟老师", "8天前", 201, 83],
  ["美术节活动方案", "活动", "艺象空间", "8天前", 73, 28]
].map(([title, type, author, time, favorites, downloads], index) => ({
  title,
  type,
  author,
  time,
  favorites,
  downloads,
  style: `cover-style-${(index % 8) + 1}`
}));

const sorters = {
  featured: (items) => items,
  recent: (items) => [...items].reverse(),
  favorites: (items) => [...items].sort((a, b) => b.favorites - a.favorites),
  downloads: (items) => [...items].sort((a, b) => b.downloads - a.downloads)
};

function renderCommunityWorks(filter = "featured") {
  const grid = document.querySelector("#communityWorks");
  if (!grid) return;

  const works = (sorters[filter] || sorters.featured)(communityWorks);
  grid.innerHTML = works
    .map(
      (work, index) => `
        <a class="work-card" href="./work-detail.html">
          <div class="work-cover ${work.style}">
            <span class="work-type">${work.type}</span>
            <div class="work-cover-title">${work.title}</div>
          </div>
          <div class="work-card-body">
            <div class="work-title-row">
              <h3>${work.title}</h3>
              <div class="work-stats" aria-label="作品数据">
                <span title="收藏量">♡ ${work.favorites}</span>
                <span title="下载量">↓ ${work.downloads}</span>
              </div>
            </div>
            <div class="work-meta">
              <div class="work-author">
                <span class="author-avatar" style="background: ${avatarGradient(index)}"></span>
                <span>${work.author}</span>
              </div>
              <time class="work-time">${work.time}</time>
            </div>
          </div>
        </a>
      `
    )
    .join("");
}

function avatarGradient(index) {
  const gradients = [
    "linear-gradient(135deg, #fde68a, #bfdbfe)",
    "linear-gradient(135deg, #c4b5fd, #a7f3d0)",
    "linear-gradient(135deg, #fdba74, #fde68a)",
    "linear-gradient(135deg, #bfdbfe, #c4b5fd)",
    "linear-gradient(135deg, #a7f3d0, #fef3c7)"
  ];
  return gradients[index % gradients.length];
}

document.querySelectorAll("[data-community-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-community-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderCommunityWorks(button.dataset.communityFilter);
  });
});

renderCommunityWorks();
