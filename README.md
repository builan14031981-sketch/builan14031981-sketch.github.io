# builan14031981-sketch.github.io

严志辉的个人主页，部署于 GitHub Pages。

## 站点结构

| 文件 | 说明 |
| --- | --- |
| `index.html` | 首页（个人介绍、项目、技能、博客入口、AI 助手） |
| `about.html` | 关于页面 |
| `blog/index.html` | 博客列表页 |
| `blog/article.html` | 博客详情页（通过 `?id=` 加载文章） |
| `articles.json` | 博客列表数据 |
| `articles-detail.json` | 博客正文数据 |

## 维护说明

- 新增文章：同时更新 `articles.json` 与 `articles-detail.json`，正文文本中请使用中文引号「"」避免破坏 JSON/JS 解析。
- 文章封面：`cover.icon` 支持 `robot` / `building` / `palette` 三种 SVG 图标，对应图标在 `blog/index.html` 与 `blog/article.html` 的 JS 中定义。
- 首页 AI 助手为离线预设回复，不依赖外部 API。

## 部署

推送到 `main` 分支后，GitHub Actions 自动部署到 GitHub Pages。
