const page = document.body.dataset.page;

const homeFeatures = [
  {
    icon: "招",
    label: "招生板块",
    title: "海报生成",
    description: "输入课程主题、年龄段和亮点，生成适合报名转化的海报文案与版式建议。",
    points: ["招生主题海报", "活动亮点提炼", "朋友圈配图文案"]
  },
  {
    icon: "文",
    label: "招生板块",
    title: "文案生成",
    description: "生成朋友圈、小红书、社群通知、体验课邀约等常用招生文案。",
    points: ["家长沟通语气", "平台化标题", "活动报名引导"]
  },
  {
    icon: "视",
    label: "招生板块",
    title: "视频生成",
    description: "生成短视频脚本、镜头建议和口播稿，帮助老师快速完成宣传视频。",
    points: ["抖音口播", "镜头分镜", "结尾引导"]
  },
  {
    icon: "案",
    label: "教学板块",
    title: "教案生成",
    description: "根据课程主题和学生年龄，生成课堂目标、流程、材料和点评方向。",
    points: ["课堂目标", "教学步骤", "材料准备"]
  },
  {
    icon: "P",
    label: "教学板块",
    title: "PPT生成",
    description: "把课程主题拆成适合课堂展示的 PPT 大纲、页面标题和讲解词。",
    points: ["页面结构", "讲解词", "展示重点"]
  },
  {
    icon: "评",
    label: "教学板块",
    title: "作业点评",
    description: "生成具体、温和、可发给家长的作业点评，兼顾鼓励和提升建议。",
    points: ["作品亮点", "提升方向", "家长沟通"]
  }
];

const workflow = [
  {
    title: "选择独立页面",
    description: "根据任务进入招生、教学或创作社区页面。"
  },
  {
    title: "填写创作需求",
    description: "输入课程主题、年龄段、平台和表达语气。"
  },
  {
    title: "AI 生成草稿",
    description: "快速得到可编辑的海报文案、脚本、教案或点评。"
  },
  {
    title: "保存或继续修改",
    description: "把满意的结果沉淀为个人素材。"
  },
  {
    title: "上传创作社区",
    description: "把自有素材或生成素材分享给其他用户。"
  },
  {
    title: "获得积分反馈",
    description: "素材被浏览、点赞和下载后，上传者获得积分。"
  }
];

const admissionTemplates = [
  {
    icon: "海",
    label: "招生板块",
    title: "海报生成",
    description: "生成标题、卖点、报名引导和版式建议，适合体验课、暑假班、主题课。",
    points: ["海报主标题", "视觉版式建议", "报名信息整理"]
  },
  {
    icon: "文",
    label: "招生板块",
    title: "文案生成",
    description: "生成朋友圈、小红书、社群通知等多平台招生文案。",
    points: ["朋友圈文案", "小红书标题", "社群报名通知"]
  },
  {
    icon: "视",
    label: "招生板块",
    title: "视频生成",
    description: "生成短视频口播脚本、镜头建议和拍摄重点。",
    points: ["30 秒口播", "镜头分镜", "发布标题"]
  }
];

const teachingTemplates = [
  {
    icon: "案",
    label: "教学板块",
    title: "教案生成",
    description: "生成课程目标、课堂流程、材料准备和课后延展建议。",
    points: ["课堂目标", "教学流程", "点评方向"]
  },
  {
    icon: "P",
    label: "教学板块",
    title: "PPT生成",
    description: "把课堂主题拆解成 PPT 页结构、讲解词和图片建议。",
    points: ["封面页", "知识点页", "课堂示范页"]
  },
  {
    icon: "评",
    label: "教学板块",
    title: "作业点评",
    description: "生成专业、温和、适合发给家长的作业反馈。",
    points: ["优点描述", "问题提醒", "下一步建议"]
  }
];

const pricingPlans = [
  {
    name: "免费版",
    tag: "适合初次体验",
    price: "¥0",
    period: "长期可用",
    featured: false,
    features: ["每日少量生成次数", "查看社区公开素材", "上传素材获得积分", "基础历史记录"]
  },
  {
    name: "月度会员",
    tag: "灵活开通",
    price: "¥39",
    period: "每月",
    featured: false,
    features: ["更多生成次数", "招生与教学全模板", "社区素材下载权益", "个人素材库"]
  },
  {
    name: "季度会员",
    tag: "推荐试用周期",
    price: "¥99",
    period: "每季度",
    featured: true,
    features: ["包含月度全部权益", "额外积分礼包", "批量生成入口", "导出高清素材"]
  },
  {
    name: "年度会员",
    tag: "适合长期使用",
    price: "¥299",
    period: "每年",
    featured: false,
    features: ["包含季度全部权益", "全年积分加成", "优先体验新模板", "年度素材归档"]
  }
];

const mockResults = {
  admissions: {
    "海报生成": [
      {
        heading: "海报标题",
        body: "暑假创意美术班｜让孩子用画笔记录一个有想象力的夏天"
      },
      {
        heading: "海报文案",
        body:
          "适合 6-10 岁孩子\n小班引导｜主题创作｜作品展示｜审美启蒙\n通过色彩、构图和综合材料练习，让孩子在轻松的课堂里完成一组有表达力的作品。"
      },
      {
        heading: "版式建议",
        body:
          "上方使用孩子作品或课堂创作画面，中间突出课程名称和年龄段，下方放报名二维码、上课时间和试听提醒。整体色彩建议使用暖白、浅橙和少量蓝紫点缀。"
      }
    ],
    "文案生成": [
      {
        heading: "朋友圈文案",
        body:
          "暑假想给孩子安排一门既有趣、又能沉下心来的课程，可以看看创意美术。\n\n这期课程适合 6-10 岁孩子，会围绕主题创作、色彩表达和作品展示展开。老师不会只让孩子照着画，而是引导孩子观察、构图、表达自己的想法。\n\n课程采用小班教学，每次课都有作品产出，也会给到具体反馈。想了解课程安排，可以私信预约试听。"
      },
      {
        heading: "小红书标题",
        body: "6-10 岁孩子暑假学美术，可以重点看这 4 个方面"
      }
    ],
    "视频生成": [
      {
        heading: "短视频口播",
        body:
          "如果你家孩子 6 到 10 岁，暑假想学一门能提升观察力和表达力的课程，可以了解一下创意美术。\n\n我们会通过主题引导，让孩子学习构图、色彩和画面表达，不只是简单照着画。每节课都会完成作品，老师也会给到具体点评。\n\n想预约试听，可以私信我们了解课程时间。"
      },
      {
        heading: "镜头建议",
        body: "开头展示作品墙，中段拍课堂创作过程，结尾用老师讲解和报名信息收束。"
      }
    ]
  },
  teaching: {
    "教案生成": [
      {
        heading: "课程主题",
        body: "夏日里的奇妙植物园"
      },
      {
        heading: "课堂目标",
        body:
          "1. 引导学生观察植物的形状、层次和色彩变化。\n2. 学习用主体、背景和细节组织画面。\n3. 鼓励学生加入自己的想象，完成一幅有故事感的主题作品。"
      },
      {
        heading: "课堂流程",
        body:
          "导入 8 分钟：通过图片和问题引出植物园主题。\n示范 12 分钟：讲解主体构图、色彩搭配和背景处理。\n创作 45 分钟：学生完成草图、上色和细节添加。\n点评 15 分钟：围绕构图、色彩和创意表达进行反馈。"
      }
    ],
    "PPT生成": [
      {
        heading: "PPT 页面结构",
        body:
          "1. 封面：夏日里的奇妙植物园\n2. 观察：植物有哪些形状和线条\n3. 色彩：夏天可以用哪些颜色表达\n4. 示范：主体、背景和细节如何安排\n5. 创作要求：完成一幅有想象力的植物园作品\n6. 作品分享：说说画面里的故事"
      },
      {
        heading: "讲解重点",
        body: "避免把植物画成一排，鼓励学生安排前后层次，并用不同大小的叶片和花朵丰富画面。"
      }
    ],
    "作业点评": [
      {
        heading: "家长反馈",
        body:
          "今天孩子在植物园主题创作中表现很投入，画面主体比较清楚，也愿意尝试用明亮的颜色表达夏天的感觉。\n\n这次比较好的地方是，孩子在植物造型上加入了自己的想象，不只是简单临摹。后续可以继续练习前后层次的处理，让主体和背景关系更清楚。\n\n整体来看，孩子的表达欲和完成度都在进步，建议继续保持这种主动观察和大胆尝试。"
      }
    ]
  }
};

const communityAssets = [
  {
    title: "暑假创意美术招生海报模板",
    tag: "招生海报",
    author: "青禾老师",
    description: "适合暑假班和体验课招生活动，包含标题、卖点和报名提示。",
    points: 18,
    likes: 126,
    views: 2480
  },
  {
    title: "儿童画课堂 PPT 大纲",
    tag: "教学 PPT",
    author: "小林美术课",
    description: "适合 7-9 岁课堂展示，可直接改成植物、动物、城市主题。",
    points: 24,
    likes: 89,
    views: 1620
  },
  {
    title: "家长沟通点评句库",
    tag: "作业点评",
    author: "南星画室",
    description: "包含构图、色彩、线条、创意表达等点评方向，语气温和。",
    points: 12,
    likes: 203,
    views: 3560
  },
  {
    title: "体验课短视频口播脚本",
    tag: "视频脚本",
    author: "画里课堂",
    description: "30 秒短视频结构，适合老师出镜介绍体验课亮点。",
    points: 15,
    likes: 77,
    views: 980
  }
];

function setupNavigation() {
  const navShell = document.querySelector(".nav-shell");
  const menuToggle = document.querySelector(".menu-toggle");
  const currentPage = document.body.dataset.page;

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === currentPage) {
      link.classList.add("active");
    }
  });

  if (!menuToggle || !navShell) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = navShell.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-links a, .nav-action, .home-links a, .home-login").forEach((link) => {
    link.addEventListener("click", () => {
      navShell.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function renderTemplateCards(targetId, items) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  target.innerHTML = items
    .map(
      (item) => `
        <article class="template-card">
          <div class="icon" aria-hidden="true">${item.icon}</div>
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <ul>
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderWorkflow() {
  const target = document.querySelector("#workflowList");
  if (!target) return;

  target.innerHTML = workflow
    .map(
      (step, index) => `
        <article class="step-card">
          <span class="step-number">${index + 1}</span>
          <div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderPricing(targetId, limit) {
  const target = document.querySelector(`#${targetId}`);
  if (!target) return;

  const plans = typeof limit === "number" ? pricingPlans.slice(0, limit) : pricingPlans;
  target.innerHTML = plans
    .map(
      (plan) => `
        <article class="plan-card ${plan.featured ? "featured" : ""}">
          <span class="tag">${plan.tag}</span>
          <h3>${plan.name}</h3>
          <div class="price">${plan.price}</div>
          <div class="period">${plan.period}</div>
          <p>${plan.name === "免费版" ? "适合先体验产品流程。" : "适合持续生产招生与教学内容。"}</p>
          <ul>
            ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderResult(form, type) {
  const generator = form.dataset.generator;
  const title = form.closest(".creator-layout").querySelector(".js-result-title");
  const content = form.closest(".creator-layout").querySelector(".js-result-content");

  title.textContent = type;
  content.innerHTML = mockResults[generator][type]
    .map(
      (block) => `
        <section class="result-block">
          <h4>${block.heading}</h4>
          <p>${block.body}</p>
        </section>
      `
    )
    .join("");
}

function setupGenerators() {
  document.querySelectorAll(".js-generator").forEach((form) => {
    const typeSelect = form.querySelector(".js-type");
    const button = form.querySelector(".js-generate");

    renderResult(form, typeSelect.value);

    typeSelect.addEventListener("change", () => {
      renderResult(form, typeSelect.value);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const content = form.closest(".creator-layout").querySelector(".js-result-content");

      button.disabled = true;
      button.textContent = "生成中...";
      content.innerHTML = `
        <section class="result-block">
          <h4>正在生成内容</h4>
          <p>已读取你填写的课程主题、年龄段、平台和表达语气，正在整理成可编辑草稿。</p>
        </section>
      `;

      window.setTimeout(() => {
        renderResult(form, typeSelect.value);
        button.disabled = false;
        button.textContent = "生成内容";
      }, 800);
    });
  });
}

function renderCommunityAssets() {
  const target = document.querySelector("#assetGrid");
  if (!target) return;

  target.innerHTML = communityAssets
    .map(
      (asset, index) => `
        <article class="asset-card">
          <span class="tag">${asset.tag}</span>
          <h3>${asset.title}</h3>
          <p>${asset.description}</p>
          <div class="asset-stats">
            <span>作者：${asset.author}</span>
            <span>积分：${asset.points}</span>
            <span>点赞：${asset.likes}</span>
            <span>浏览：${asset.views}</span>
          </div>
          <div class="asset-meta">
            <span class="soft-badge">下载后作者获得积分</span>
            <button class="btn secondary js-download" type="button" data-index="${index}">积分下载</button>
          </div>
        </article>
      `
    )
    .join("");

  target.querySelectorAll(".js-download").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.index);
      communityAssets[index].views += 1;
      communityAssets[index].likes += 1;
      button.textContent = "已模拟下载";
      button.disabled = true;
      window.setTimeout(renderCommunityAssets, 600);
    });
  });
}

function setupUploadForm() {
  const form = document.querySelector("#uploadForm");
  const message = document.querySelector("#uploadMessage");
  if (!form || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "已模拟发布：素材进入社区列表后，可通过浏览、点赞和下载获得积分。";
  });
}

function setupHomePrompt() {
  const prompt = document.querySelector("#homePrompt");
  if (!prompt) return;

  const modeLabel = document.querySelector("#homeModeLabel");
  const input = document.querySelector("#homePromptInput");
  const submit = document.querySelector("#homePromptSubmit");
  const current = prompt.querySelector(".mode-current");

  current.addEventListener("click", () => {
    prompt.classList.toggle("is-open");
  });

  prompt.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      modeLabel.textContent = button.dataset.mode;
      input.value = button.dataset.placeholder;
      submit.href = button.dataset.target;
      prompt.classList.remove("is-open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!prompt.contains(event.target)) {
      prompt.classList.remove("is-open");
    }
  });
}

setupNavigation();
setupHomePrompt();
renderTemplateCards("homeFeatureGrid", homeFeatures);
renderTemplateCards("admissionTemplates", admissionTemplates);
renderTemplateCards("teachingTemplates", teachingTemplates);
renderWorkflow();
renderPricing("pricingPreview", 4);
renderPricing("pricingGrid");
setupGenerators();
renderCommunityAssets();
setupUploadForm();
