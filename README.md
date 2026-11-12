# TarHeel CourseMatch

UNC Kenan-Flagler 商学院大一选课互助与 Syllabus 指数平台原型。

**BUSI 200 Carolina Changemaking Challenge** 小组项目 · 纯前端 SPA（React + TypeScript + Vite + Tailwind CSS）。

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 部署到 GitHub Pages

1. 将本仓库推送到 GitHub
2. 在仓库 Settings → Pages 中选择 GitHub Actions 或 `gh-pages` 分支
3. 或使用：

```bash
npm run build
# 将 dist/ 目录内容发布到 GitHub Pages
```

本项目 `vite.config.ts` 已设置 `base: './'`，可适配任意子路径部署。

## 功能概览

- 6 门 Kenan-Flagler 大一核心 / 先修课程指数库
- Syllabus 硬核拆解弹窗
- 1v1 学长匹配卡（12 位模拟 UBP 学长学姐）
- 防尴尬微聊室（破冰胶囊 + 拟真回复 + Mentor Karma）
- localStorage 持久化匹配与私信状态
