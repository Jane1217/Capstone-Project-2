/**
 * main.js
 *
 * 依赖的外部资源（请放在项目根目录的 images 文件夹中）：
 *   - profile.jpg      (Hero 背景和封面头像)
 *   - project1.jpg     (示例项目1缩略图)
 *   - project2.jpg     (示例项目2缩略图)
 *   —— 如果还有新项目，可按 project3.jpg、project4.jpg … 命名，并在 index.html 中添加对应 .project-card
 *
 * 如果项目详情需要外部链接，请在下方插入时替换为实际的 GitHub/演示地址等。
 */

// main.js

document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.getElementById("typewriter");
  const cursorEl = document.querySelector(".cursor");
  const text = "Software Developer & Data Enthusiast"; // 你可以改成本文
  let idx = 0;

  function type() {
    if (idx <= text.length) {
      typewriterEl.textContent = text.slice(0, idx);
      idx++;
      setTimeout(type, 70); // 打字速度：100ms/字符
    } else {
      // 文字打完后，保持光标闪烁一段时间后消失或重打
      setTimeout(() => {
        cursorEl.style.display = "none";
      }, 1000);
    }
  }

  type();
});

// 暗/亮模式切换
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 项目弹窗（示例，可以根据项目数量自行扩展）
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const projId = card.getAttribute("data-project");
    if (projId === "1") {
      modalBody.innerHTML = `
        <h2>Promotion & Optimization Model</h2>
        <p><strong>Anker Innovations LTD</strong></p>
        <p>使用 Python 和优化方法对 Anker 产品在 Amazon 上的广告投放进行建模，最终提升了 ROI 并优化了预算分配。</p>
        <p><a href="https://github.com/yanxinchen/anker-optimization" target="_blank">查看 GitHub 仓库</a></p>
      `;
    } else if (projId === "2") {
      modalBody.innerHTML = `
        <h2>Credit Risk Analysis</h2>
        <p>基于 Python 和 scikit-learn 构建了信用风险分类模型，对金融数据进行特征工程与模型评估。</p>
        <p><a href="https://github.com/yanxinchen/credit-risk" target="_blank">查看 GitHub 仓库</a></p>
      `;
    }
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 点击模态框空白处也可关闭
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});