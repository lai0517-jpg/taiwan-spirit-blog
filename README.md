# 《台灣靈格》部落格

《台灣靈格》是一個以 Astro 建置的靜態部落格，整理台灣山川、精怪、福澤、廟宇神靈、植物作物與民俗器物等條目。內容以 Markdown 管理，適合從 Obsidian 或其他文字編輯器撰寫後發佈。

## 專案內容

- 最新條目首頁
- 主題分類頁
- 文章詳情頁
- 側欄分類導覽
- 行動端選單
- Astro Content Collections 文章管理
- 靜態輸出，適合部署到 GitHub Pages

## 技術棧

- Astro 4
- TypeScript
- Markdown content collections
- 純 CSS 樣式

## 目錄結構

```text
.
├── public/
│   ├── favicon.svg
│   └── assets/images/
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro
│   │   └── Sidebar.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── fuzhe/
│   │       ├── monsters/
│   │       ├── plants/
│   │       ├── talismans/
│   │       └── temples/
│   ├── layouts/
│   │   └── BlogLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── [theme]/index.astro
│   │   └── posts/[...slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 文章格式

文章放在 `src/content/blog/` 底下，依主題分資料夾：

- `fuzhe`: 福澤系統
- `monsters`: 精怪・地景
- `plants`: 植物・作物
- `talismans`: 符咒・法器
- `temples`: 廟宇神靈

每篇 Markdown 需要 frontmatter：

```md
---
title: "文章標題"
subtitle: "副標題，可省略"
category: "分類名稱"
date: 2026-07-14
image: "/taiwan-spirit-blog/assets/images/example.jpg"
regions: ["北部盆地・河口"]
cities: ["台北"]
tags: ["標籤一", "標籤二"]
draft: false
---

文章內容寫在這裡。
```

欄位說明：

- `title`: 文章標題，必填
- `subtitle`: 副標題，選填
- `category`: 分類名稱，必填
- `date`: 發佈日期，必填
- `image`: 文章圖片路徑，選填
- `regions`: 靈格地域，預設空陣列
- `cities`: 城市或地點，預設空陣列
- `tags`: 標籤，選填
- `draft`: 是否為草稿，`true` 時不會出現在頁面上

## 開發

安裝依賴：

```bash
npm install
```

啟動本地開發伺服器：

```bash
npm run dev
```

建置靜態網站：

```bash
npm run build
```

預覽建置結果：

```bash
npm run preview
```

## 部署

目前程式中的連結與圖片路徑使用 `/taiwan-spirit-blog/` 作為 base path，適合部署到 GitHub Pages 的 repository page：

```text
https://<github-user>.github.io/taiwan-spirit-blog/
```

如果 repository 名稱改變，請同步調整：

- `src/layouts/BlogLayout.astro`
- `src/components/Sidebar.astro`
- `src/components/ArticleCard.astro`
- `src/pages/[theme]/index.astro`
- `src/pages/posts/[...slug].astro`
- 文章 frontmatter 內的 `image` 路徑

## Git 狀態

這個專案已初始化為 Git repository，主要分支為 `main`。

目前 remote 預設為：

```text
git@github.com:lai0517-jpg/taiwan-spirit-blog.git
```

若要推送到 GitHub，請先確認本機已設定 GitHub SSH key 或 HTTPS 登入憑證。
