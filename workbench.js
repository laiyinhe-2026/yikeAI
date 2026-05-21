const workbenchModes = {
  poster: {
    title: "招生海报",
    placeholder: "例如：暑假创意美术班招生海报，面向 6-10 岁孩子，突出小班教学、主题创作和作品展示。",
    helper: "建议写清课程主题、年龄段、发布平台和希望突出的卖点。",
    result: [
      "标题：这个暑假，让孩子把想象画出来",
      "副标题：6-10 岁创意美术主题课，小班引导，完成一幅可展示作品",
      "卖点：主题创作 / 材料体验 / 作品展示 / 老师逐步示范",
      "行动文案：预约试听，领取暑假班课程安排"
    ]
  },
  copy: {
    title: "招生文案",
    placeholder: "例如：为秋季少儿美术班写一条朋友圈招生文案，语气温和，适合家长阅读。",
    helper: "可以补充课程亮点、开课时间、优惠信息和发布平台。",
    result: [
      "朋友圈文案：",
      "秋季美术班开始预约啦。我们会从观察、构图、色彩和表达四个方向，引导孩子完成更有想法的作品。",
      "如果孩子喜欢画画，也想让作品更完整、更有表达力，可以先预约一次体验课。",
      "适合年龄：6-12 岁。名额采用小班制，方便老师照顾到每个孩子。"
    ]
  },
  video: {
    title: "招生视频",
    placeholder: "例如：生成一条 30 秒美术机构暑假班招生短视频脚本，适合老师出镜。",
    helper: "建议说明视频时长、出镜角色、课程主题和希望展示的画面。",
    result: [
      "镜头 1：老师站在作品墙前，介绍暑假创意美术班。",
      "口播：孩子的想象力，需要一个可以被看见的出口。",
      "镜头 2：展示课堂材料、孩子创作过程和完成作品。",
      "口播：这个暑假，我们带孩子从主题观察到动手表达，完成属于自己的作品。",
      "结尾：预约体验课，了解课程安排。"
    ]
  },
  lesson: {
    title: "美术教案",
    placeholder: "例如：为 7-9 岁孩子生成一节《会发光的城市》创意美术教案。",
    helper: "建议写清年龄段、课程主题、材料、课时和教学目标。",
    result: [
      "课程主题：《会发光的城市》",
      "教学目标：认识城市夜景的明暗关系，学习用线条和色块表现建筑层次。",
      "课堂流程：导入观察 8 分钟 / 示范构图 12 分钟 / 学生创作 45 分钟 / 展示点评 10 分钟",
      "材料准备：黑色卡纸、油画棒、荧光笔、剪贴材料。"
    ]
  },
  ppt: {
    title: "PPT 大纲",
    placeholder: "例如：生成一份少儿色彩启蒙课 PPT 大纲，包含导入、示范和课堂练习。",
    helper: "建议说明课程主题、页数、学生年龄和课堂重点。",
    result: [
      "P1：课程标题与课堂目标",
      "P2：色彩观察：生活中的暖色与冷色",
      "P3：作品案例拆解：主体、背景和色彩情绪",
      "P4：老师示范步骤",
      "P5：学生创作要求与注意事项",
      "P6：作品展示与点评问题"
    ]
  },
  review: {
    title: "作业点评",
    placeholder: "例如：孩子画了一幅海底世界，画面颜色丰富，但主体稍小，希望点评温和专业。",
    helper: "建议描述作品主题、优点、可提升点和希望发送给谁。",
    result: [
      "这幅《海底世界》颜色非常丰富，孩子能大胆使用蓝色、绿色和橙色表现海洋的层次，画面很有童趣。",
      "鱼群和水草的细节处理得很认真，能看出孩子在创作时有自己的想法。",
      "下一次可以尝试把主体画得更大一些，让画面的重点更突出。整体完成度很好，值得鼓励。"
    ]
  }
};

function renderWorkbenchResult(modeKey) {
  const mode = workbenchModes[modeKey];
  const title = document.querySelector("#resultTitle");
  const result = document.querySelector("#workbenchResult");
  const prompt = document.querySelector("#workbenchPrompt");
  const helper = document.querySelector("#promptHelper");

  if (!mode || !title || !result || !prompt || !helper) return;

  title.textContent = mode.title;
  prompt.placeholder = mode.placeholder;
  helper.textContent = mode.helper;
  result.innerHTML = mode.result.map((line) => `<p>${line}</p>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".mode-chip");
  const generate = document.querySelector("#generateWorkbench");
  let activeMode = "poster";

  renderWorkbenchResult(activeMode);

  const slides = document.querySelectorAll(".hot-slide");
  const dots = document.querySelector(".hot-dots");
  let activeSlide = 0;

  function showHotSlide(index) {
    if (!slides.length || !dots) return;

    activeSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === activeSlide);
    });
    dots.querySelectorAll("button").forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeSlide);
    });
  }

  if (slides.length && dots) {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `切换到第 ${index + 1} 张`);
      dot.addEventListener("click", () => showHotSlide(index));
      dots.appendChild(dot);
    });

    document.querySelector("[data-hot-prev]")?.addEventListener("click", () => showHotSlide(activeSlide - 1));
    document.querySelector("[data-hot-next]")?.addEventListener("click", () => showHotSlide(activeSlide + 1));
    showHotSlide(0);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeMode = chip.dataset.mode;
      chips.forEach((item) => item.classList.toggle("active", item === chip));
      renderWorkbenchResult(activeMode);
    });
  });

  if (!generate) return;

  generate.addEventListener("click", () => {
    const originalText = generate.textContent;
    generate.textContent = "生成中...";
    generate.disabled = true;

    window.setTimeout(() => {
      renderWorkbenchResult(activeMode);
      generate.textContent = originalText;
      generate.disabled = false;
    }, 800);
  });
});
