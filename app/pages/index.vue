<script setup lang="ts">
useSeoMeta({
  title: 'Kitsun — 個人首頁與專案',
  description: '把喜歡的遊戲、整理資料的過程，和想解決的小麻煩，慢慢做成網站與工具。',
  ogTitle: 'Kitsun — 個人首頁與專案',
  ogDescription: '個人專案、遊戲工具與持續累積中的小實驗。',
  ogType: 'website',
})

const projects = [
  {
    number: '01',
    name: 'Doll Finder TW',
    localName: '娃娃去哪買',
    category: '玩家生活索引',
    description: '整理雙北二遊娃娃的販售資訊，優先追蹤官方商品、公開販售頁與補貨消息。',
    details: ['依作品與角色搜尋', '來源與查核日期', '瀏覽器收藏'],
    className: 'doll-project',
  },
  {
    number: '02',
    name: 'Endfield Factory Planner',
    localName: '終末地產能規劃',
    category: '遊戲資料工具',
    description: '把製程、設備與藍圖資料放在一起，規劃產能時少一點來回查表。',
    details: ['製程產能計算', '設備藍圖編輯', '本機草稿保存'],
    className: 'endfield-project',
  },
]

const interests = ['遊戲資料整理', '實用的小工具', '把想法做成網站']
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">跳到主要內容</a>

    <header class="site-header">
      <NuxtLink class="brand" to="/" aria-label="Kitsun 首頁">
        <span class="brand-mark" aria-hidden="true">K</span>
        <span class="brand-word">KITSUN<span class="brand-period">.</span></span>
      </NuxtLink>

      <nav class="main-nav" aria-label="主要導覽">
        <a href="#projects">作品</a>
        <a href="#about">關於</a>
      </nav>

      <a class="header-contact" href="#contact">
        找我聊聊
        <span aria-hidden="true">↗</span>
      </a>
    </header>

    <main id="main">
      <section class="hero section-wrap" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="eyebrow-dot" /> PERSONAL SPACE <span class="eyebrow-divider">/</span> 2026</p>
          <h1 id="hero-title">
            把好奇的事情<br>
            做成<span class="hero-highlight">能用的東西。</span>
          </h1>
          <p class="hero-intro">
            喜歡的遊戲、整理資料的過程，還有生活裡的小麻煩——
            我把這些想法慢慢做成網站與工具。
          </p>
          <div class="hero-actions">
            <a class="button button-dark" href="#projects">
              看看我做的東西
              <span class="button-arrow" aria-hidden="true">↘</span>
            </a>
            <a class="text-link" href="#about">認識 Kitsun <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-footnote">
            <span>獨立專案</span>
            <span class="footnote-separator" />
            <span>持續更新中</span>
          </div>
        </div>

        <div class="hero-visual" aria-hidden="true">
          <div class="visual-grid" />
          <div class="visual-ring visual-ring-one" />
          <div class="visual-ring visual-ring-two" />
          <div class="visual-orbit">
            <span class="orbit-dot" />
          </div>
          <div class="fox-emblem">
            <svg viewBox="0 0 320 320" role="presentation">
              <path class="fox-shadow" d="M74 92 135 119 160 76 185 119 246 92 228 205Q214 251 160 272Q106 251 92 205Z" />
              <path class="fox-face" d="M83 100 137 125 160 89 183 125 237 100 220 199Q208 239 160 258Q112 239 100 199Z" />
              <path class="fox-mask" d="M101 156 143 170 160 152 177 170 219 156 207 202Q194 228 160 241Q126 228 113 202Z" />
              <path class="fox-nose" d="M153 205Q160 198 167 205L160 214Z" />
              <circle class="fox-eye" cx="128" cy="164" r="5" />
              <circle class="fox-eye" cx="192" cy="164" r="5" />
              <path class="fox-star" d="m238 128 4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />
              <path class="fox-star" d="m92 215 3 7 7 3-7 3-3 7-3-7-7-3 7-3z" />
            </svg>
          </div>
          <div class="visual-index"><span>K</span><span>01 — 26</span></div>
          <div class="visual-note">MADE WITH<br> CURIOSITY</div>
          <div class="visual-caption">一點靈感，慢慢長成作品。</div>
        </div>
      </section>

      <section class="project-section section-wrap" id="projects" aria-labelledby="projects-title">
        <div class="section-heading">
          <div>
            <p class="eyebrow section-eyebrow"><span class="eyebrow-dot" /> SELECTED PROJECTS</p>
            <h2 id="projects-title">最近在做的事<span class="heading-period">.</span></h2>
          </div>
          <p class="section-aside">從喜歡的事開始，<br>讓資訊變得更好找、更好用。</p>
        </div>

        <div class="project-list">
          <article
            v-for="project in projects"
            :key="project.number"
            class="project-card"
            :class="project.className"
          >
            <div class="project-art">
              <template v-if="project.number === '01'">
                <div class="doll-art-orbit orbit-a" />
                <div class="doll-art-orbit orbit-b" />
                <div class="doll-art-sun" />
                <svg class="doll-art-icon" viewBox="0 0 180 180" role="presentation">
                  <path d="M90 24c-19 0-33 14-33 32 0 10 4 18 11 24L52 128c-2 8 4 15 12 15h52c8 0 14-7 12-15l-16-48c7-6 11-14 11-24 0-18-14-32-33-32Z" />
                  <path class="doll-art-face" d="M76 66c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5Zm18 0c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5Zm-9 14 5 4 5-4" />
                  <path class="doll-art-accent" d="m54 42 5-12 5 12 12 5-12 5-5 12-5-12-12-5z" />
                </svg>
                <span class="art-label">FINDS<br>THAT MATTER</span>
              </template>
              <template v-else>
                <div class="blueprint-grid" />
                <div class="factory-orbit orbit-a" />
                <div class="factory-orbit orbit-b" />
                <svg class="factory-art-icon" viewBox="0 0 240 180" role="presentation">
                  <path d="M35 132V73l45 26V73l45 26V51h83v81H35Z" />
                  <path class="factory-window" d="M150 67h17v20h-17zm29 0h17v20h-17zm-29 34h17v20h-17zm29 0h17v20h-17z" />
                  <path class="factory-belt" d="M47 145h145m-127 0v10m29-10v10m29-10v10m29-10v10m29-10v10" />
                  <circle class="factory-node" cx="67" cy="65" r="7" />
                  <circle class="factory-node" cx="114" cy="52" r="7" />
                  <path class="factory-link" d="M67 65 114 52 150 50" />
                </svg>
                <span class="art-label">PLAN<br>THE FLOW</span>
              </template>
            </div>

            <div class="project-content">
              <div class="project-topline">
                <span class="project-number">{{ project.number }} /</span>
                <span class="project-category">{{ project.category }}</span>
              </div>
              <h3>{{ project.name }}</h3>
              <p class="project-local-name">{{ project.localName }}</p>
              <p class="project-description">{{ project.description }}</p>
              <ul class="project-details" :aria-label="project.name + ' 功能'">
                <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
              </ul>
              <div class="project-bottomline">
                <span>NUXT <i>·</i> VUE <i>·</i> TYPESCRIPT</span>
                <span class="project-spark" aria-hidden="true">✳</span>
              </div>
            </div>
          </article>
        </div>

        <div class="projects-note">
          <span class="note-dash" />
          <p>每個專案都有自己的節奏；這裡會慢慢收錄它們的進度。</p>
          <span class="note-star" aria-hidden="true">✳</span>
        </div>
      </section>

      <section class="about-section" id="about" aria-labelledby="about-title">
        <div class="about-inner section-wrap">
          <div class="about-mark" aria-hidden="true">
            <span class="about-mark-large">K</span>
            <span class="about-mark-small">個人專案<br>持續累積</span>
          </div>
          <div class="about-copy">
            <p class="eyebrow about-eyebrow"><span class="eyebrow-dot" /> A LITTLE ABOUT ME</p>
            <h2 id="about-title">嗨，我是 Kitsun。<br><span>這裡是我的網路角落。</span></h2>
            <p>
              我喜歡把興趣拆解成問題，再試著做出一個真的能用的答案。
              這個網站會放上正在製作的工具、實驗中的想法，以及之後想分享的內容。
            </p>
            <div class="interest-list" aria-label="關注主題">
              <span v-for="interest in interests" :key="interest">{{ interest }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
        <div class="contact-card">
          <div class="contact-copy">
            <p class="eyebrow contact-eyebrow"><span class="eyebrow-dot" /> SAY HELLO</p>
            <h2 id="contact-title">有想法，<br>就從交流開始。</h2>
            <p>專案回饋、合作點子，或只是想聊聊喜歡的遊戲，都歡迎來 GitHub 找我。</p>
          </div>
          <a
            class="github-link"
            href="https://github.com/kitsun-ho"
            target="_blank"
            rel="noreferrer"
            aria-label="前往 Kitsun 的 GitHub 個人頁，另開新視窗"
          >
            <span class="github-link-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.94.1-.73.39-1.23.71-1.51-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.43-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.56 10.56 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </span>
            <span>GitHub 個人頁</span>
            <span class="github-arrow" aria-hidden="true">↗</span>
          </a>
          <span class="contact-orbit contact-orbit-one" aria-hidden="true" />
          <span class="contact-orbit contact-orbit-two" aria-hidden="true" />
        </div>
      </section>
    </main>

    <footer class="site-footer section-wrap">
      <NuxtLink class="footer-brand" to="/">
        <span class="brand-mark brand-mark-small" aria-hidden="true">K</span>
        <span>KITSUN<span class="brand-period">.</span></span>
      </NuxtLink>
      <p>把喜歡的事，慢慢做成作品。</p>
      <a href="#main" class="back-to-top">回到頂端 <span aria-hidden="true">↑</span></a>
      <span class="footer-year">© 2026</span>
    </footer>
  </div>
</template>
